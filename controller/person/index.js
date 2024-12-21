const Person = require("../../models/person");
const validateRequiredFields = require("../../utils/requiredFields");

const getAllperson = async (req, res) => {
  try {
    const allPersonData = await Person.find();

    if (!allPersonData) {
      return res.status(404).json({
        success: false,
        message: "No records found",
      });
    }

    if (allPersonData.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No persons found in database",
      });
    }

    return res.status(200).json({
      success: true,
      data: allPersonData,
      message: "Data retrieved successfully",
    });
  } catch (error) {
    console.error("Error in getAllPerson:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
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
      message: "Data retrieved successfully",
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
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Person ID is required",
      });
    }

    const deletePerson = await Person.findByIdAndDelete(id);

    if (!deletePerson) {
      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Person deleted successfully",
        data: deletePerson,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { getAllperson, person, personID, deletePersonID };
