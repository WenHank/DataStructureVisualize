import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AVL from "./AdvancedTree/AVL";
import MaxH from "./AdvancedTree/MaxH";
import MinH from "./AdvancedTree/MinH";
import RBT from "./AdvancedTree/RBT";
import Home from "./Home/Home";
import Bubble from "./Sort/Bubble";
import BST from "./Tree/BST";
import Tree from "./Tree/Tree";
import BSTInteractive from "./Tree/BSTInteractive";

function Container() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="tree" element={<Tree />} />
          <Route exact path="bst" element={<BST />} />
          <Route exact path="avl" element={<AVL />} />
          <Route exact path="rbt" element={<RBT />} />
          <Route exact path="bstinteractive" element={<BSTInteractive />} />
          <Route exact path="maxheap" element={<MaxH />} />
          <Route exact path="minheap" element={<MinH />} />
          <Route exact path="bubble" element={<Bubble />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
