const router = require("express").Router();
let Branch = require("../model/AddBranch.model");

router.route("/").get((req, res) => {
  Branch.find()
    .then((branch) => res.json(branch))
    .catch((err) => console.log(err));
});

router.route("/add").post((req, res) => {
  const address = req.body.address;
  const email = req.body.email;
  const contact = req.body.contact;
  const helpLine = req.body.helpLine;

  const newBranch = new Branch({ address, email, contact, helpLine });

  newBranch
    .save()
    .then(() => console.log("Branch Added"))
    .catch((err) => console.log(err));
});

module.exports = router;
