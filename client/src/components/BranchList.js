import React, { Component } from "react";
import Axios from "axios";
import IsLoading from "./IsLoading";
import Branch from "./Branch";
import ContactUs from "./ContactUs";

class BranchList extends Component {
  state = {
    branches: [],
    isLoading: false,
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/addBranch/")
      .then((res) => {
        this.setState({
          branches: res.data,
          isLoading: true,
        });
        console.log("Data", this.state.branches);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { branches, isLoading } = this.state;

    const branchList = branches.map((branch, i) => {
      return <Branch branch={branch} key={i} />;
    });

    if (!isLoading) {
      return <IsLoading />;
    } else
      return (
        <div>
          <ContactUs />

          <div className="container appt-container">
            <h2>List of Branches</h2>
            {branches.length === 0 ? (
              <div>
                <h4>No Data Found.</h4>
              </div>
            ) : (
              <div className="row">{branchList}</div>
            )}
          </div>
        </div>
      );
  }
}

export default BranchList;
