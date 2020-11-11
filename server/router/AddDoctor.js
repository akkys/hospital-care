const router = require("express").Router();
const Docs = require("../model/AddDoctor.model");

router.route("/").get((req, res) => {
  Docs.find()
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.route("/:id").get((req, res) => {
  Docs.findById(req.params.id)
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const expert = req.body.expert;
  const desc = req.body.desc;
  const time = req.body.time;
  const available = req.body.available;
  const exp = req.body.exp;
  const contact = req.body.contact;

  const newDocs = new Docs({
    name,
    expert,
    desc,
    time,
    available,
    exp,
    contact,
  });

  newDocs
    .save()
    .then(() => console.log("Doctor Added!"))
    .catch((err) => console.log(err));
});

router.route("/update/:id").post((req, res) => {
  Docs.findById(req.params.id).then((docs) => {
    (docs.name = req.body.name),
      (docs.expert = req.body.expert),
      (docs.desc = req.body.desc),
      (docs.time = req.body.time),
      (docs.available = req.body.available),
      (docs.exp = req.body.exp),
      (docs.contact = req.body.contact);

    docs
      .save()
      .then(() => console.log("Doctor Updated!"))
      .catch((err) => console.log(err));
  });
});

router.route("/:id").delete((req, res) => {
  Docs.findByIdAndDelete(req.params.id)
    .then(() => console.log("Doctor Deleted!"))
    .catch((err) => console.log(err));
});

module.exports = router;
