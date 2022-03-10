import React from "react";
import { useState } from "react";
import { AVLTree, useAVLTree } from "react-tree-vis";
import { Button } from "react-bootstrap";
import "./AVL.css";
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

function AVL() {
  const { ref, insert, remove, getData, search, clear, generateRandomTree } =
    useAVLTree();
  const [avlinsertValue, setavlInsertValue] = useState(0);
  const [avlremoveValue, setavlRemoveValue] = useState(0);
  const [avlsearchValue, setavlsearchValue] = useState(0);
  const [InorderValue, setInorderValue] = useState("");
  const [PreorderValue, setPreorderValue] = useState("");
  const [PostorderValue, setPostorderValue] = useState("");
  return (
    <div className="avl">
      <h1>AVl</h1>
      <div className="Input">
        <div className="InputGroup">
          <input
            type="number"
            onChange={(elem) =>
              setavlInsertValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => insert(avlinsertValue)}>
            Insert
          </Button>
          <input
            type="number"
            onChange={(elem) =>
              setavlRemoveValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => remove(avlremoveValue)}>
            Remove
          </Button>
          <input
            type="number"
            onChange={(elem) =>
              setavlsearchValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => search(avlsearchValue)}>
            Search
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              generateRandomTree(getRandom(5, 10));
            }}
          >
            Random
          </Button>
        </div>
        <div className="InputGroup">
          <Button variant="secondary" onClick={() => clear()}>
            clear
          </Button>
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
      <AVLTree data={arr} ref={ref} />
    </div>
  );
}

export default AVL;
