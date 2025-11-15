const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.js');

// GET all users
router.get('/',
    // #swagger.tags = ['Users']
    //#swagger.summary = 'Get all users'
    usersController.getAll
);

// GET single user
router.get('/:id',
    // #swagger.tags = ['Users']
    //#swagger.summary = 'Get a single user by ID' 
    usersController.getSingle
);

// POST create user
router.post('/',
    // #swagger.tags = ['Users'] 
    // #swagger.summary = 'Create a new user' 
    usersController.createUser
);

// PUT update user
router.put('/:id',
    // #swagger.tags = ['Users'] 
    // #swagger.summary = 'Update a user by ID' 
    usersController.updateUser
);

// DELETE user
router.delete('/:id',
    // #swagger.tags = ['Users'] 
    // #swagger.summary = 'Delete a user by ID' 
    usersController.deleteUser
);

module.exports = router;
