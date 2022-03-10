import React from "react";
import * as d3 from "d3";
import { Button } from "react-bootstrap";
import "./Bubble.css";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arr = [];
for (let i = 0; i < 5; i++) {
  let tmp = getRandom(100, 500);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === tmp) {
      arr.splice(j, 1);
    }
  }
  arr.push(tmp);
}
let data = arr;
function Sort(params) {
  let gs = document.querySelectorAll("g");
  let rects = document.querySelectorAll("rect");
  let flag = 0;
  let size = 500;
  let xPosition = [];
  let ogPosition = [];
  for (let i = 0; i < gs.length; i++) {
    xPosition[i] = 5 + i * 100;
    ogPosition.push(data[i]);
  }
  for (let i = 0; i < gs.length; i++) {
    flag = 0;
    for (let j = 0; j < gs.length - i - 1; j++) {
      let k = j + 1;
      //   console.log("j" + rects[j].__data__);
      //   console.log("k" + rects[k].__data__);
      //   console.log("-------------");
      if (data[j] > data[k]) {
        flag = 1;
        d3.select(gs[ogPosition.indexOf(data[j])])
          .transition()
          .duration(1000)
          .attr(
            "transform",
            `translate(${xPosition[k]}, ${
              size - rects[ogPosition.indexOf(data[j])].__data__
            })`
          );
        d3.select(gs[ogPosition.indexOf(data[k])])
          .transition()
          .duration(1000)
          .attr(
            "transform",
            `translate(${xPosition[j]}, ${
              size - rects[ogPosition.indexOf(data[k])].__data__
            })`
          );
        [data[j], data[k]] = [data[k], data[j]];
      }
    }
    if (flag === 0) {
      break;
    }
  }
  //   for (let i = 0; i < gs.length; i++) {
  //     flag = 0;
  //     for (let j = 0; j < gs.length - i - 1; j++) {
  //       let k = j + 1;
  //       setTimeout(function () {
  //         if (data[j] > data[k]) {
  //           flag = 1;
  //           d3.select(gs[ogPosition.indexOf(data[j])])
  //             .transition()
  //             .duration(1000)
  //             .attr(
  //               "transform",
  //               `translate(${xPosition[k]}, ${
  //                 size - rects[ogPosition.indexOf(data[j])].__data__
  //               })`
  //             );
  //           d3.select(gs[ogPosition.indexOf(data[k])])
  //             .transition()
  //             .duration(1000)
  //             .attr(
  //               "transform",
  //               `translate(${xPosition[j]}, ${
  //                 size - rects[ogPosition.indexOf(data[k])].__data__
  //               })`
  //             );
  //           [data[j], data[k]] = [data[k], data[j]];
  //         }
  //       }, j * 500);
  //     }
  //     if (flag === 0) {
  //       break;
  //     }
  //     console.log("----------");
  //   }
}

class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataset = data;
  }
  componentDidMount() {
    let size = 500;
    let svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);
    let react_width = 95;
    let bar = svg
      .selectAll("g")
      .data(this.dataset)
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return `translate(${5 + i * (react_width + 5)}, ${size - d})`;
      });
    bar
      .append("rect")
      .attr("width", react_width)
      .attr("height", (d) => d)
      .attr("fill", "teal");
    bar
      .append("text")
      .attr("dy", ".35em")
      .attr("x", react_width / 2 - 15)
      .attr("y", (d) => {
        return d - 15;
      })
      .text(function (d) {
        return d;
      })
      .attr("fill", "yellow");
    // svg
    //   .selectAll("rect")
    //   .data(this.dataset)
    //   .enter()
    //   .append("g")
    //   .attr("transform", function (d, i) {
    //     return `translate(${5 + i * (react_width + 5)}, ${size - d})`;
    //   })
    //   .append("rect")
    //   .attr("width", react_width)
    //   .attr("height", (d) => d)
    //   .attr("fill", "teal");
    // svg
    //   .selectAll("text")
    //   .data(this.dataset)
    //   .enter()
    //   .insert("text", "text")
    //   .text(function (d) {
    //     return d;
    //   })
    //   .attr("fill", "#ffff00")
    //   .attr("font-size", "13px")
    //   .attr("x", react_width / 2)
    //   .attr("y", (d) => {
    //     return d - 15;
    //   });
  }

  render() {
    return (
      <div className="bubble">
        <h1>Bubble sort</h1>
        <div ref={this.myRef}></div>
        <Button
          variant="secondary"
          className="start"
          onClick={() => {
            Sort();
          }}
        >
          Sort
        </Button>
      </div>
    );
  }
}

export default Bubble;
