const User = require('../models/user');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const user = await User.create({ firstName, lastName, age });
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Error getting users' });
  }
};

//
const bootSendMessage = async (req, res) => {
      // check if verification token is correct
      if (req.query.token !== token) {
        return res.sendStatus(401);
      }
    // print request body
    console.log(req.body);
    // return a text response
    const data = {
        responses: [
            {
                type: 'randomText',
                messages: ['Hi', 'Hello']
            }
        ]
    };
    res.json(data);
  };


module.exports = { createUser, getUsers , bootSendMessage };
