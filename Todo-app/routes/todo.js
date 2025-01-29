const Todo = require ("../models/todo.js");
const express = require ("express");

const router = express.Router();

//create todo list route
router.post("/", async (req, res) => {
   try {
      const todo = new Todo({
          title: req.body.title,
          completed: false
      });
      await todo.save();
      res.status(201).json(todo);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
})

//get all todos
router.get("/", async (req, res) => {
   try {
      const todos = await Todo.find();
      res.json(todos)
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
})

// update a todo
router.patch("/:id", async(req, res) => {
   try {
      const todo = await Todo.findById(req.params.id);
      if(!todo) return res.status(404).json({message: "Todo not found!"})

         todo.completed = req.body.completed
         await todo.save();
         res.json(todo);

   } catch (error) {
      res.status(400).json({ message: error.message });
   }
})

// delete a todo
router.delete("/:id", async (req, res) => {
   try {
      const todo = await Todo.findById(req.params.id);
      if (!todo) return res.status(404).json({ message: 'Todo not found' });

      await todo.deleteOne();
      res.json({ message: 'Todo deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})


module.exports = router;