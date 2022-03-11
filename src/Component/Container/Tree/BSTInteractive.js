import React from "react";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./BSTInteractive.css";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arr = [];
for (let i = 0; i < getRandom(5, 10); i++) {
  let tmp = getRandom(5, 70);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === tmp) {
      arr.splice(j, 1);
    }
  }
  arr.push(tmp);
}
function BSTInteractive() {
  const { ref } = useBinarySearchTree();
  return (
    <div className="BSTInteractive">
      <h1>Interactive</h1>
      <BinarySearchTree data={arr} ref={ref} />
    </div>
  );
}

export default BSTInteractive;
