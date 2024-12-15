const Person = require("../../models/person");

const getAllperson = async (req, res) => {
  console.log("getAll person");
  return res.send("getAll person");
};

const person = async (req, res) => {
  console.log("getAll person");
  return res.send("getAll person post data");
};

const personID = async (req, res) => {
  console.log("getAll person");
  return res.send("getAll person data by id");
};

const deletePersonID = async (req, res) => {
  console.log("getAll person");
  return res.send("getAll person data by id");
};

module.exports = { getAllperson, person, personID, deletePersonID };
