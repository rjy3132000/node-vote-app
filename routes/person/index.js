const express = require("express");
const router = express.Router();
const {
  getAllperson,
  person,
  personID,
  deletePersonID,
} = require("../../controller/person");

router.route("/all").get(getAllperson);
router.route("/send").post(person);
router.route("/update/:id").patch(personID);
router.route("/delete/:id").delete(deletePersonID);

module.exports = router;
