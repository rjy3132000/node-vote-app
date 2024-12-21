const Person = require("../../models/person");
const validateRequiredFields = require("../../utils/requiredFields");

const getAllperson = async (req, res) => {
  const allPersonData = await Person.find();

  try {
    if (allPersonData) {
      return res.status(200).json({ success, data: allPersonData });
    } else {
      return res.status(400).json({ success, data: "network error" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const person = async (req, res) => {
  try {
    const { name, email, age, mobile, address, salary, work } = req.body;

    // Validate required fields
    const validation = validateRequiredFields(req.body, [
      "name",
      "email",
      "age",
      "mobile",
      "salary",
      "work",
    ]);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        errors: validation.error,
      });
    }

    // Check if email already exists
    const existingPerson = await Person.findOne({ email });
    if (existingPerson) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create new person
    const newPerson = await Person.create({
      name,
      email,
      age,
      mobile,
      address,
      salary,
      work: work.toLowerCase(),
    });

    return res.status(201).json({
      success: true,
      data: newPerson,
    });
  } catch (error) {
    console.error("Person creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
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
