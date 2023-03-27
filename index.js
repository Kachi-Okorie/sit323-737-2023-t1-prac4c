const express = require("express"),
  app = express(),
  authRoute = require("./routes/authRoute"),
  arithimeticRoute = require("./routes/arithimeticRoute"),
  auth = require('./middleware/auth.js')(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  localStrategy = require("passport-local"),
  User = require("./models/user"),
  bodyParser = require("body-parser");

  const uri = "mongodb+srv://Kachi2:EexvvnM8RTtOF3bA@cluster0.2ifezbo.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(auth.initialize());
// Passport Config
passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute);
app.use(arithimeticRoute);

app.listen(3001, () => {
  console.log("Server Started at 3001");
});
