const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  const cursor = await mongodb.getDatabase().collection('users').find();
  cursor.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id.trim());
  const cursor = await mongodb.getDatabase().collection('users').find({ _id: userId });
  cursor.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users[0]);
  });
};

const createUser = async (req, res) => {
    const userId = new ObjectId(req.params.id.trim());
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'some error has occured while updating the user')
    }
}


    
const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id.trim());
       const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
    };
        const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'some error has occured while updating the user')
    }
}


const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id.trim())
    const response = await mongodb.getDatabase().db().collection('users').remove({ _id: userId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.error || 'some error has occured while updating the user')
    }

}

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser
};
