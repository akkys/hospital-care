const router = require("express").Router();
let Wards = require("../model/AddWard.model");

router.route("/").get((req, res) => {
  Wards.find()
    .then((wards) => res.json(wards))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const roomType = req.body.roomType;
  const desc = req.body.desc;
  const price = req.body.price;

  const newWard = new Wards({ roomType, desc, price });

  newWard
    .save()
    .then(() => console.log("New Ward Added"))
    .catch((err) => console.log(err));
});

router.route("/update/:id").post((req, res) => {
  Wards.findById(req.params.id).then((wards) => {
    (wards.roomType = req.body.roomType),
      (wards.desc = req.body.desc),
      (wards.price = req.body.price);

    wards
      .save()
      .then(() => console.log("Updated"))
      .catch((err) => console.log(err));
  });
});

router.route("/:id").delete((req, res) => {
  Wards.findByIdAndDelete(req.params.id)
    .then(() => console.log("Deleted"))
    .catch((err) => console.log(err));
});

module.exports = router;
