const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = "mongodb://localhost:27017/hospitalDb";

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected to Server"))
  .catch((err) => console.log(err));

const addApptRouter = require("./router/AddAppointment");
const addDoctor = require("./router/AddDoctor");
const addRoom = require("./router/AddRoom");
const addPatient = require("./router/AddPatient");
const addWard = require("./router/AddWards");
const addBrnach = require("./router/AddBranch");

app.use("/addAppt", addApptRouter);
app.use("/addDoc", addDoctor);
app.use("/addRoom", addRoom);
app.use("/addPatient", addPatient);
app.use("/addWard", addWard);
app.use("/addBranch", addBrnach);

app.listen(port, () => {
  console.log(`Server is running at PORT : ${port}`);
});
