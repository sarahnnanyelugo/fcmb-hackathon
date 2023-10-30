import Top from "../assets/images/top.png";
import Back from "../assets/images/left.png";
import Bank from "../assets/images/fcmb.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import "./style.scss";

import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Data", "Rent", "Food", "Peer 2 Peer loan"],
  datasets: [
    {
      label: "amount",
      data: [10000, 20000, 25000, 30000],
      backgroundColor: [
        "rgba(98,178, 253, 1)",
        "rgba(955, 233, 196, 1)",
        "rgba(241, 158, 196, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderColor: [
        "rgba(98,178, 253, 1)",
        "rgba(955, 233, 196, 1)",
        "rgba(241, 158, 196, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
function ExpenseChart() {
  const [filterData, setFilterData] = useState(data);
  //   function Track(){
  // setFilterData ("data2");
  //   }
  return (
    <>
      <div className="app-header">
        <center>
          <div className="col-md-3">
            <center>
              <div className="col-md-10 app">
                <div className="app-inner">
                  <div className="app-inner2">
                    <div className="app-face">
                      {" "}
                      <img src={Top} alt="icon" width="100%" />
                      <select>
                        <option>Jan</option>
                        <option>Fab</option>
                        <option>Mar</option>
                      </select>
                      <div className="flexy chart-div">
                        <div className="col-md-8" style={{ marginTop: "40px" }}>
                          <Doughnut data={data} />{" "}
                        </div>
                        <div
                          className="col-md-4 data-set"
                          style={{ marginTop: "120px" }}
                        >
                          <ul className="list-unstyled ">
                            <li>
                              Data:<span>₦10,000</span>
                            </li>
                            <li>
                              Rent:<span>₦20,000</span>
                            </li>
                            <li>
                              Food:<span>₦25,000</span>
                            </li>
                            <li>
                              P2P:<span>₦30,000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}

export default ExpenseChart;

// class ExpenseChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [44, 55, 41, 17, 15],
//       options: {
//         chart: {
//           width: 380,
//           type: "donut",
//         },
//         plotOptions: {
//           pie: {
//             startAngle: -90,
//             endAngle: 270,
//           },
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         fill: {
//           type: "gradient",
//         },
//         legend: {
//           formatter: function (val, opts) {
//             return val + " - " + opts.w.globals.series[opts.seriesIndex];
//           },
//         },
//         title: {
//           text: "Gradient Donut with custom Start-angle",
//         },
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: "bottom",
//               },
//             },
//           },
//         ],
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="donut"
//           width={380}
//         />
//       </div>
//     );
//   }
// }
