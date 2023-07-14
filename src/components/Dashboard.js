import React, { Component } from "react";
import ApiData from "../ApiData";
import '../assets/style.css'
import { Pie, Line, Bar } from "react-chartjs-2";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dash: [],
    };

    this.state = {
      piedata: {
        labels: [],
        values: [],
      },
    };

    this.state = {
      linedata: {
        labels: [],
        values: [],
      },
    };
  }
  componentDidMount() {
    let data = ApiData();
    data.then((d) => {
      console.log(d);
      this.setState({
        dash: d.dasbhoardPage,
        piedata: {
          values: Object.values(d.dasbhoardPage.storage),
          labels: Object.keys(d.dasbhoardPage.storage),
        },
        linedata: {
          labels: d.dasbhoardPage.latestHits.months,
          values: [
            {
              data: Object.values(d.dasbhoardPage.latestHits.featured),
            },
          ],
        },
      });
    });
  }
  render() {
    const pieOptions = {
      legend: {
        display: true,
        position: "center",
        fontColor:"#fff"
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
    };
    const lineOptions = {
      Plugin: {
        legend:{
          fontColor:"#fff"
        }
      },
      scales:{
        y:{
          min:10,
          max:90
        }
      }
    }
    const barOptions = {
      indexAxis : 'Y',
      elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' ,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    }
  };
    return (
      <div className="container  text-light">
        <div className="row">
          <div className="col">
            <p className="text-white mt-5 mb-5">
              Welcome back, <b>Admin</b>
            </p>
          </div>
        </div>
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
              <div
                className="chartjs-size-monitor"
                style={{
                  position: "absolute",
                  inset: "0px",
                  overflow: "hidden",
                  pointeEvents: "none",
                  visibility: "hidden",
                  zIndex: "-1",
                }}
              >
                <div
                  className="chartjs-size-monitor-expand"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: "-1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "1000000px",
                      height: "1000000px",
                      left: "0",
                      top: "0",
                    }}
                  >
                    {/* <Bar options={barOptions} data={Bardata} />; */}
                  </div>
                </div>
                <div
                  className="chartjs-size-monitor-shrink"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: "-1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "200%",
                      height: "200%",
                      left: "0",
                      top: "0",
                    }}
                  ></div>
                </div>
              </div>
              <h2 className="tm-block-title">Latest Hits</h2>
              <Line
                options={lineOptions}
                data={{
                  labels: this.state.linedata?.labels,

                  datasets: [
                    {
                      label: "Latset Hits",
                      data: [88, 70, 79, 56, 50, 55, 72],
                      backgroundColor: "#4bbbbc",
                      borderColor: "#4bbbbc",
                      fill: true,
                      tension: 0.3,
                    },
                    {
                      label: "Popular Hits",
                      data: [32, 47, 38, 21, 55, 75, 70],
                      borderColor: "#ff6384",
                      fill: true,
                      tension: 0.3,
                      backgroundColor: "#ff6384",
                    },
                    {
                      label: "Featured",
                      fill: true,
                      data: [43, 20, 39, 46, 86, 66, 80],
                      backgroundColor: "#9966ff",
                      borderColor: "#9966ff",
                      Textcolor: "#fff",
                      tension: 0.4,
                    },
                  ],
                }}
              />
              
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
              <div
                className="chartjs-size-monitor"
                style={{
                  position: "absolute",
                  inset: "0px",
                  overflow: "hidden",
                  pointerEvents: "none",
                  visibility: "hidden",
                  zIndex: "-1",
                }}
              >
                <div
                  className="chartjs-size-monitor-expand"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    pointerEvents: "none",
                    visibility: "hidden",
                    zIndex: "-1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "1000000px",
                      height: "1000000px",
                      left: "0",
                      top: "0",
                    }}
                  ></div>
                </div>
                <div
                  className="chartjs-size-monitor-shrink"
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden",
                    pointerEents: "none",
                    visibility: "hidden",
                    zIndex: "-1",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "200%",
                      height: "200%",
                      left: "0",
                      top: "0",
                    }}
                  ></div>
                </div>
              </div>
              <h2 className="tm-block-title">Performance</h2>
              <canvas
                id="barChart"
                width="581"
                height="290"
                style={{ display: "block", height: "232px", width: "465px" }}
                className="chartjs-render-monitor"
              ></canvas>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller">
              <h2 className="tm-block-title">Storage Information</h2>
              <div id="pieChartContainer" style={{ height: "300px" }}>
                <div
                  className="chartjs-size-monitor"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    overflow: "hidden",
                    pointeEvents: "none",
                    visibility: "hidden",
                    zIndex: "-1",
                  }}
                >
                  <div
                    className="chartjs-size-monitor-expand"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: "-1",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "1000000px",
                        height: "1000000px",
                        left: "0",
                        top: "0",
                      }}
                    ></div>
                  </div>
                  <div
                    className="chartjs-size-monitor-shrink"
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      overflow: "hidden",
                      pointerEvents: "none",
                      visibility: "hidden",
                      zIndex: -1,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                        left: "0",
                        top: "0",
                      }}
                    ></div>
                  </div>
                </div>
                {this.state.piedata?.values?.length > 0 &&
                  this.state.piedata?.labels?.length > 0 && (
                    <Pie
                    className="piechart"
                      options={pieOptions}
                      data={{
                        labels: ["Used Storage", "System storage", "Available storage"],
                        datasets: [
                          {
                            data: this.state.piedata.values,
                            backgroundColor: ["#9966ff", "#4ed6b8", "#f7604d"],
                            borderColor: "#fff",
                            borderWidth: 2,
                            Textcolor: "#fff",
                          },
                        ],
                      }}
                    />
                  )}
                {/* <div id="legend" /> */}

                {console.log(this.state.piedata)}
                {/* <canvas
                  id="pieChart"
                  className="chartjs-render-monitor"
                  width="581"
                  height="375"
                  style={{display: "block", height: "300px", width: "465px"}}
                ></canvas> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
              <h2 className="tm-block-title">Notification List</h2>
              <div className="tm-notification-items">
                {this.state.dash?.notifications?.length > 0 &&
                  this.state.dash?.notifications?.map((notific) => {
                    return (
                      <div className="media tm-notification-item">
                        <div className="tm-gray-circle">
                          <img
                            src={notific.pic}
                            alt="Avatar Image"
                            className="rounded-circle icon-img"
                          />
                        </div>
                        <div className="media-body">
                          <p className="mb-2">
                            {/* <b>Jessica</b> and <b>6 others</b> sent you new
                          <a href="#" className="tm-notification-link">
                            product updates
                          </a>
                          . Check new orders. */}
                            {notific.message}
                          </p>
                          <span className="tm-small tm-text-color-secondary">
                            {notific.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
              <h2 className="tm-block-title">Orders List</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ORDER NO.</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">OPERATORS</th>
                    <th scope="col">LOCATION</th>
                    <th scope="col">DISTANCE</th>
                    <th scope="col">START DATE</th>
                    <th scope="col">EST DELIVERY DUE</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.dash?.orders?.length > 0 &&
                    this.state.dash?.orders?.map((order) => {
                      return (
                        <tr>
                          <th scope="row">#{order.orderNo}</th>
                          <td>
                            <div className="tm-status-circle moving"></div>
                            {order.status}
                          </td>
                          <td>
                            <b>{order.operators}</b>
                          </td>
                          <td>
                            <b>{order.location}</b>
                          </td>
                          <td>
                            <b>{order.distance}</b>
                          </td>
                          <td>{order.startDate}</td>
                          <td>{order.deliveryDate}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
