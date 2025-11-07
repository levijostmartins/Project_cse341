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

module.exports = {
  getAll,
  getSingle
};
