import React from "react";
import { Link } from "react-router-dom";

const PatientList = (props) => {
  const { patient } = props;
  console.log(patient);

  const admitDate = new Date(patient.admitDate).toLocaleString();

  return (
    <tbody>
      <tr>
        <td>{patient.pid}</td>
        <td>{patient.name}</td>
        <td>{admitDate}</td>
        <td>{patient.roomNum}</td>
        <td>{patient.roomType}</td>
        <td>{patient.age}</td>
        <td>{patient.gender}</td>
        <td>{patient.address}</td>
        <td>{patient.contact}</td>
        {patient.status === "Discharged" ? (
          <td className="text-danger">{patient.status}</td>
        ) : (
          <td className="text-success">{patient.status}</td>
        )}
        {/* <td>{patient.status}</td> */}
        <td>
          <Link to={"/editPatientRoom/" + patient._id}>
            <i className="fa fa-pencil fa-lg text-success" />
          </Link>{" "}
          |{" "}
          <i
            onClick={() => props.deletePatient(patient._id)}
            className="fa fa-times fa-lg text-danger"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default PatientList;
