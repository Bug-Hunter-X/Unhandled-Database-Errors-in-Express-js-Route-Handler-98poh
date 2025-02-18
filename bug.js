const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Missing proper error handling here.  Just sending 500 isn't ideal.
      return res.status(500).send('Error');
    }
    res.json(user);
  });
});