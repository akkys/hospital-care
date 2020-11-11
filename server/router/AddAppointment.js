const router = require("express").Router();
let Appointment = require("../model/AddAppointment.model");

router.route("/").get((req, res) => {
  Appointment.find()
    .then((appointment) => res.json(appointment))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const contact = req.body.contact;
  const address = req.body.address;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const datetime = req.body.datetime;
  const choose = req.body.choose;
  const docName = req.body.docName;

  const newappointment = new Appointment({
    name,
    email,
    contact,
    address,
    city,
    zipcode,
    datetime,
    choose,
    docName,
  });

  newappointment
    .save()
    .then(() => console.log("Appointment Added"))
    .catch((err) => console.log(err));
});

router.route("/:id").get((req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch((err) => console.log(err));
});

router.route("/:id").delete((req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => console.log("Appointment Deleted!"))
    .catch((err) => console.log(err));
});

router.route("/update/:id").post((req, res) => {
  Appointment.findById(req.params.id).then((appointment) => {
    (appointment.name = req.body.name),
      (appointment.email = req.body.email),
      (appointment.contact = req.body.contact),
      (appointment.address = req.body.address),
      (appointment.city = req.body.city),
      (appointment.zipcode = req.body.zipcode),
      (appointment.docName = req.body.docName),
      (appointment.datetime = req.body.datetime),
      (appointment.choose = req.body.choose);

    appointment
      .save()
      .then(() => console.log("Appointment Updated!"))
      .catch((err) => console.log(err));
  });
});

module.exports = router;
