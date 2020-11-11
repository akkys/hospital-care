const router = require("express").Router();
const Patient = require("../model/AddPatient.model");

router.route("/").get((req, res) => {
  Patient.find()
    .then((patient) => res.json(patient))
    .catch((err) => console.log(err));
});

router.route("/:id").get((req, res) => {
  Patient.findById(req.params.id)
    .then((patient) => res.json(patient))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const pid = req.body.pid;
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const address = req.body.address;
  const admitDate = Date.parse(req.body.admitDate);
  const status = req.body.status;
  const contact = req.body.contact;
  const roomNum = req.body.roomNum;
  const roomType = req.body.roomType;

  const newPatient = new Patient({
    pid,
    name,
    age,
    gender,
    address,
    admitDate,
    status,
    contact,
    roomType,
    roomNum,
  });

  newPatient
    .save()
    .then(() => console.log("Patient Added!"))
    .catch((err) => console.log(err));
});

router.route("/update/:id").post((req, res) => {
  Patient.findById(req.params.id).then((patient) => {
    (patient.pid = req.body.pid),
      (patient.name = req.body.name),
      (patient.age = req.body.age),
      (patient.gender = req.body.gender),
      (patient.address = req.body.address),
      (patient.admitDate = Date.parse(req.body.admitDate)),
      (patient.status = req.body.status),
      (patient.contact = req.body.contact),
      (patient.roomNum = req.body.roomNum),
      (patient.roomType = req.body.roomType);

    patient
      .save()
      .then(() => console.log("Patient Updated!"))
      .catch((err) => console.log(err));
  });
});

router.route("/:id").delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => console.log("Patient Deleted!"))
    .catch((err) => console.log(err));
});

module.exports = router;
