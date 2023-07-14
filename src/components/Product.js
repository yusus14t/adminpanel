import React, { Component } from "react";
import ApiData from "../ApiData";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    let data = ApiData();
    data.then((d) => {
      console.log(d);
      this.setState({
        products: d.productsPage,
      });
    });
  }

  render() {
    return (
      <div className="contentbackground m-0">
        {/* {console.log(this.state.products)} */}
        <div className="container  ">
          <div className="row tm-content-row ">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 block-col mt-5 mb-5">
              <div className="darkBackground tm-block block-products">
                <div className="product-table-container">
                  <table className="table table-hover tm-table-small text-light product-table">
                    <thead>
                      <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">UNIT SOLD</th>
                        <th scope="col">IN STOCK</th>
                        <th scope="col">EXPIRE DATE</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.products?.products?.length > 0 &&
                        this.state.products?.products.map((product) => (
                          <tr style={{ backgroundColor: "#50697f" }}>
                            <th scope="row">
                              <input className="bg-light" type="checkbox" />
                            </th>
                            <td className="tm-product-name">{product.name}</td>
                            <td>{product.unitSold}</td>
                            <td>{product.stock}</td>
                            <td>{product.expireDate}</td>
                            <td>
                              <a href="#" className=" tm-product-delete-link">
                                <FontAwesomeIcon
                                  className="tm-product-delete-icon"
                                  icon={faTrashAlt}
                                />
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* table container */}
                <Link
                  to={"/addnewproduct"}
                  className="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Add new product
                </Link>
                <button className="btn btn-primary btn-block text-uppercase">
                  Delete selected products
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col mt-5">
              <div className="darkBackground tm-block tm-block-product-categories">
                <h2 className="tm-block-title">Product Categories</h2>
                <div className="product-table-container">
                  <table className="table tm-table-small text-light product-table">
                    <tbody>
                      {this.state.products?.categories?.length > 0 &&
                        this.state.products?.categories.map((category) => {
                          return (
                            <tr style={{ backgroundColor: "#50697f" }}>
                              <td className="tm-product-name">{[category]}</td>
                              <td className="text-center">
                                <a href="#" className="tm-product-delete-link">
                                  <i className=" " />
                                  <FontAwesomeIcon
                                    className="tm-product-delete-icon"
                                    icon={faTrashAlt}
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {/* table container */}
                <button className="btn btn-primary btn-block text-uppercase mb-3">
                  Add new category
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
