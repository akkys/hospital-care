const router = require("express").Router();
let Rooms = require("../model/AddRoom.model");

router.route("/").get((req, res) => {
  Rooms.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => console.log(err));
});

router.route("/:id").get((req, res) => {
  Rooms.findById(req.params.id)
    .then((rooms) => res.json(rooms))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const num = req.body.num;
  const name = req.body.name;
  const capacity = req.body.capacity;
  const groups = req.body.groups;
  const fromTime = req.body.fromTime;
  const toTime = req.body.toTime;
  // const timing = req.body.timing;
  const morning = req.body.morning;
  const evening = req.body.evening;

  const newRoom = new Rooms({
    num,
    name,
    capacity,
    groups,
    fromTime,
    toTime,
    // timing,
    morning,
    evening,
  });

  newRoom
    .save()
    .then(() => console.log("Room Added!"))
    .catch((err) => console.log(err));
});

router.route("/update/:id").post((req, res) => {
  Rooms.findById(req.params.id).then((rooms) => {
    (rooms.num = req.body.num),
      (rooms.name = req.body.name),
      (rooms.capacity = req.body.capacity),
      (rooms.groups = req.body.groups),
      (rooms.fromTime = req.body.fromTime),
      (rooms.toTime = req.body.toTime),
      // (rooms.timing = req.body.timing),
      (rooms.morning = req.body.morning),
      (rooms.evening = req.body.evening);

    rooms
      .save()
      .then(() => console.log("Room Updated!"))
      .catch((err) => console.log(err));
  });
});

router.route("/:id").delete((req, res) => {
  Rooms.findByIdAndDelete(req.params.id)
    .then(() => console.log("Room Deleted!"))
    .catch((err) => console.log(err));
});

module.exports = router;
