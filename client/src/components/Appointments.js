import React from "react";
import { Link } from "react-router-dom";

const Appointments = (props) => {
  const { appt } = props;
  const currTime = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const time = new Date(appt.datetime).toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  console.log(appt);

  return (
    <tbody>
      <tr>
        <td className="">{time}</td>
        <td>{appt.name}</td>
        <td>
          <span>{appt.contact}</span>
          <br />
          <span>{appt.email}</span>
        </td>
        <td>
          {appt.address}, {appt.city}
        </td>
        <td>{appt.docName}</td>

        <td>{appt.choose}</td>
        {time >= currTime ? (
          <td className="">Pending</td>
        ) : (
          <td className="text-danger">Completed / Expired</td>
        )}
        <td>
          <Link to={"/editAppointment/" + appt._id}>
            <i className="fa fa-pencil fa-lg text-success" />
          </Link>{" "}
          |{" "}
          <i
            onClick={() => props.deleteAppt(appt._id)}
            className="fa fa-times fa-lg text-danger"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Appointments;
