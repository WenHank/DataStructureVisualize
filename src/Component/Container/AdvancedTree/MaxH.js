import React from "react";
import { useState } from "react";
import { MaxHeap, useHeap } from "react-tree-vis";
import "./MaxH.css";
import { Button } from "react-bootstrap";

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
function MaxH() {
  const {
    ref,
    insert,
    remove,
    getData,
    search,
    clear,
    balance,
    generateRandomTree,
  } = useHeap();
  const [mheapinsertValue, setmheapInsertValue] = useState(0);
  const [mheapremoveValue, setmheapRemoveValue] = useState(0);
  const [mheapsearchValue, setmheapsearchValue] = useState(0);
  const [InorderValue, setInorderValue] = useState("");
  const [PreorderValue, setPreorderValue] = useState("");
  const [PostorderValue, setPostorderValue] = useState("");
  return (
    <div className="maxheap">
      <h1>Max Heap</h1>
      <div className="Input">
        <div className="InputGroup">
          <input
            type="number"
            onChange={(elem) =>
              setmheapInsertValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => insert(mheapinsertValue)}>
            Insert
          </Button>
          <input
            type="number"
            onChange={(elem) =>
              setmheapRemoveValue(parseInt(elem.currentTarget.value, 10))
            }
          />
          <Button variant="secondary" onClick={() => remove(mheapremoveValue)}>
            Remove
          </Button>
          <Button variant="secondary" onClick={() => clear()}>
            clear
          </Button>
          <Button
            variant="secondary"
            onClick={() => generateRandomTree(getRandom(5, 10))}
          >
            Random
          </Button>
        </div>

        {/* <button
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
        </button>
        <div>{InorderValue}</div>
        <button
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
        </button>
        <div>{PreorderValue}</div>
        <button
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
        </button>
        <div>{PostorderValue}</div> */}
      </div>
      <MaxHeap data={arr} ref={ref} />
    </div>
  );
}

export default MaxH;
