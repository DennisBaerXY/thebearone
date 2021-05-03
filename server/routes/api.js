var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dbAdmin:Ritter1209@cluster0.0lhuy.mongodb.net/theBearOne?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});
const Todo = mongoose.model("Todo", TodoSchema);

const TodoListSchema = new mongoose.Schema({
  todos: [],
  title: String,
  completed: Boolean,
});

const TodoList = mongoose.model("TodoList", TodoListSchema);

const UserSchema = new mongoose.Schema({
  todolists: [],
  recentlyVisitedTodoLists: [],
  uid: {
    type: String,
    requierd: true,
    unique: true,
    dropDupes: true,
  },
  displayName: String,
});

const User = mongoose.model("User", UserSchema);

router.get("/", (req, res) => {
  res.json({
    wasser: "wasser",
  });
});

router.post("/createUser", (req, res) => {
  const uid = req.body.uid;
  const user = new User({ uid: uid, displayName: req.body.displayName });

  user.save((err, savedUser) => {
    if (err) return console.error(err);
    console.log(savedUser.displayName + " saved with success");
  });
});

// define the home page route
router.post("/todoList", function (req, res) {
  const data = {
    uid: req.body.uid,
    title: req.body.title,
  };

  const user = User.findOne({ uid: data.uid }, (err, user) => {
    if (!user) return;
    if (err) return console.error(err);
    user.todolists.push({ title: data.title, todos: [], complete: false });
    user.save((err, savedUser) => {
      if (err) return console.error(err);
      console.log("Added List Successfully");
      res.sendStatus(201);
    });
  });
});

module.exports = router;
