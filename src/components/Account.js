import React, { Component } from "react";
import ApiData from "../ApiData";
import "../assets/style.css";
import avtor from "../assets/img/avatar.png";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
    this.state = {
      email: "",
      name: "",
      phone: "",
      password: "",
      profilePic: "",
    };
  }
  componentDidMount() {
    let data = ApiData();
    data.then((d) => {
      this.setState({
        accounts: d.accountsPage,
      });
    });
  }
  render() {
    const handleSelect = (value) => {
      console.log(value);
      this.setState({
        ...this.state.accounts[value],
      });
    };
    return (
      <div className="container mt-5">
        {console.log(this.state)}
        <div className="row tm-content-row">
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <h2 className="tm-block-title">List of Accounts</h2>
              <p className="text-white">Accounts</p>
              <select
                className="custom-select"
                onChange={(e) => handleSelect(e.target.value)}
              >
                <option value={""}>Select account</option>
                <option value={"Admin"}>Admin</option>
                <option value={"Editor"}>Editor</option>
                <option value={"Merchant"}>Merchant</option>
                <option value={"Customer"}>Customer</option>
              </select>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row tm-content-row">
          <div className="tm-block-col tm-col-avatar">
            <div className="tm-bg-primary-dark tm-block tm-block-avatar">
              <h2 className="tm-block-title">Change Avatar</h2>
              <div className="tm-avatar-container">
                <img
                  src={this.state.profilePic}
                  alt="Avatar"
                  className="tm-avatar img-fluid mb-4"
                />
                <a href="#" className="tm-avatar-delete-link">
                  <i className="far fa-trash-alt " />
                  <FontAwesomeIcon
                    className="tm-product-delete-icon"
                    icon={faTrashAlt}
                  />
                </a>
              </div>
              <button className="btn btn-primary btn-block text-uppercase">
                Upload New Photo
              </button>
            </div>
          </div>
          <div className="tm-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title">Account Settings</h2>
              <div action className="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label htmlFor="name">Account Name</label>
                  <input
                    value={this.state.name}
                    onBlur={(e) => {
                      this.setState({
                        name: e.target.value,
                        ...this.state,
                      });
                    }}
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="email">Account Email</label>
                  <input
                    value={this.state.email}
                    onBlur={(e) => {
                      this.setState({
                        email: e.target.value,
                        ...this.state,
                      });
                    }}
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="password">Password</label>
                  <input
                    value={this.state.password}
                    onBlur={(e) => {
                      this.setState({
                        password: e.target.value,
                        ...this.state,
                      });
                    }}
                    id="password"
                    name="password"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="password2">Re-enter Password</label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    value={this.state.phone}
                    onBlur={(e) => {
                      this.setState({
                        phone: e.target.value,
                        ...this.state,
                      });
                    }}
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Update Your Profile
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Delete Your Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
