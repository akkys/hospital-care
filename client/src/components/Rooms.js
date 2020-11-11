import React from "react";
import { Link } from "react-router-dom";

const Rooms = (props) => {
  const { room } = props;
  console.log(props);
  return (
    <tbody>
      <tr>
        <td>{room.num}</td>
        <td>{room.name}</td>
        <td>{room.groups}</td>
        <td>{room.capacity}</td>
        <td>
          {room.fromTime} {room.morning} - {room.toTime} {room.evening}
        </td>
        <td>
          <Link to={"/editRoom/" + room._id}>
            <i className="fa fa-pencil fa-lg text-success" />
          </Link>{" "}
          |{" "}
          <i
            onClick={() => props.deleteRoom(room._id)}
            className="fa fa-times fa-lg text-danger"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Rooms;
