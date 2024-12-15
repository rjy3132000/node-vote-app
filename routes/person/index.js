const express = require("express");
const router = express.Router();
const { getAllperson, person, personID } = require("../../controller/person");

router.route("/all").get(getAllperson);
router.route("/send").post(person);
router.route("/update/:id").post(personID);
router.route("delete/:id").delete(personID);

module.exports = router;
