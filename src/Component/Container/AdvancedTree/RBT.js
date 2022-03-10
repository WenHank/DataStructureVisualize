import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { RedBlackTree, useRedBlackTree } from "react-tree-vis";
import "./RBT.css";

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

function RBT() {
  const { ref, insert, remove, getData, search, clear, generateRandomTree } =
    useRedBlackTree();
  const [rbtinsertValue, setrbtInsertValue] = useState(0);
  const [rbtremoveValue, setrbtRemoveValue] = useState(0);
  const [rbtsearchValue, setrbtsearchValue] = useState(0);
  const [InorderValue, setInorderValue] = useState("");
  const [PreorderValue, setPreorderValue] = useState("");
  const [PostorderValue, setPostorderValue] = useState("");
  return (
    <div className="rbt">
      <h1>Red Black Tree</h1>
      <div className="Input">
        <div className="InputGroup">
          <input
            type="number"
            onChange={(elem) =>
              setrbtInsertValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => insert(rbtinsertValue)}>
            Insert
          </Button>
          <input
            type="number"
            onChange={(elem) =>
              setrbtRemoveValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => remove(rbtremoveValue)}>
            Remove
          </Button>
          <input
            type="number"
            onChange={(elem) =>
              setrbtsearchValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => search(rbtsearchValue)}>
            Search
          </Button>
          <Button
            variant="secondary"
            onClick={() => generateRandomTree(getRandom(5, 10))}
          >
            Random
          </Button>
        </div>
        <div className="InputGroup">
          <Button variant="secondary" onClick={() => clear()}>
            clear
          </Button>
          <br />
          <Button
            variant="secondary"
            onClick={() => {
              setInorderValue(getData("inorder"));
              let i = 0;
              let Inordertraversal = setInterval(() => {
                if (i > InorderValue.length) {
                  clearInterval(Inordertraversal);
                }
                search(parseInt(InorderValue[i]));
                i++;
                console.log("do");
              }, 800);
              console.log("-------------");
            }}
          >
            Inorder
          </Button>
          <div>{InorderValue}</div>

          <Button
            variant="secondary"
            onClick={() => {
              setPreorderValue(getData("preorder"));
              let i = 0;
              let Preordertraversal = setInterval(() => {
                if (i > PreorderValue.length) {
                  clearInterval(Preordertraversal);
                }
                search(parseInt(PreorderValue[i]));
                i++;
                console.log("do");
              }, 800);
              console.log("-------------");
            }}
          >
            Preorder
          </Button>
          <div>{PreorderValue}</div>
          <Button
            variant="secondary"
            onClick={() => {
              setPostorderValue(getData("postorder"));
              let i = 0;
              let Postordertraversal = setInterval(() => {
                if (i > PostorderValue.length) {
                  clearInterval(Postordertraversal);
                }
                search(parseInt(PostorderValue[i]));
                i++;
                console.log("do");
              }, 800);
              console.log("-------------");
            }}
          >
            Postorder
          </Button>
          <div>{PostorderValue}</div>
        </div>
      </div>
      <RedBlackTree data={arr} ref={ref} />
    </div>
  );
}

export default RBT;
