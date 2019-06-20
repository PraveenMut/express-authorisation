// require express dependencies
const express = require('express');
const app = new express();

// users data (makeshift)
const users = [
  {
    name: "harrison",
    password: "password",
    role: "admin"
  },
  {
    name: "anhar",
    password: "password",
    role: "card game expert"
  },
  {
    name: "lav",
    password: "password",
    role: "cricket expert"
  },
  {
    name: "leah",
    password: "password",
    role: "meetups expert"
  }
];

// require global middleware dependencies
app.use(express.json());

// define login dependency when checking logins
app.use((req, res, next) => {
  const { username, password } = req.body;
  const foundUser = user.find((user) => {
    return user.name === username;
  });
  if (!foundUser || foundUser.password != password) {
    return res.send("You are not authorised");
  }
  req.user = foundUser;
  next();
});


app.post('/login', (req, res) => {
  res.send("You have reached inside the login page!");
});

// a protected endpoint where if accessed without authorisation, hit with a 403 error

// a role based endpoint where people with the role of cricket expert cannot access the page

// a role based endpoint where only privileged access from admins and meetup experts can access