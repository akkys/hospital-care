import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Rooms from "./Rooms";
import IsLoading from "./IsLoading";

class RoomsList extends Component {
  state = {
    rooms: [],
    isLoading: false,
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/addRoom/")
      .then((res) => {
        this.setState({
          rooms: res.data,
          isLoading: true,
        });
        console.log(this.state.rooms);
      })
      .catch((err) => console.log(err));
  }

  deleteRoom = (id) => {
    Axios.delete("http://localhost:5000/addRoom/" + id).then((res) =>
      console.log(res.data)
    );

    this.setState({
      rooms: this.state.rooms.filter((el) => el._id !== id),
    });
  };

  render() {
    const { rooms, isLoading } = this.state;

    const roomsList = rooms.map((room, i) => {
      return <Rooms key={i} room={room} deleteRoom={this.deleteRoom} />;
    });

    if (!isLoading) {
      return <IsLoading />;
    } else
      return (
        <div className="container appt-container">
          <div className="row">
            <div className="col-md-9">
              <h2>Occupied Rooms for Laboratory</h2>
            </div>
            <div className="col-md-3">
              <Link
                to="/addRoom"
                className="btn btn-lg btn-block btn-primary"
                id="btn"
              >
                Add Room
              </Link>
            </div>
          </div>

          {rooms.length === 0 ? (
            <div>
              <h4>No Room Occupied.</h4>
            </div>
          ) : (
            <table className="table table-active">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Room Name</th>
                  <th scope="col">Sample Groups</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {roomsList}
            </table>
          )}
        </div>
      );
  }
}

export default RoomsList;
