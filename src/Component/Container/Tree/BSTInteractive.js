import React from "react";
import * as classNames from "classnames";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./BSTInteractive.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
const getItems = (count) =>
  Array.from({ length: count }, (arr, k) => k).map((k) => ({
    id: `item-${k + 1}`,
    content: `${arr[k]}`,
  }));
// 重新記錄陣列順序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  //刪除並記錄 刪除元素
  const [removed] = result.splice(startIndex, 1);
  //將原來的元素新增進陣列
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

// 設定樣式
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0 `,
  background: isDragging ? "#6cb593" : "#889fad",
  ...draggableStyle,
});

const getListStyle = () => ({
  background: "black",
  display: "flex",
  padding: grid,
  overflow: "auto",
});

class InorderDnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(arr.length),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      className="Inorderitems"
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
class PreorderDnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(arr.length),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      className="Preorderitems"
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
class PostorderDnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(arr.length),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      className="Postorderitems"
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
function BSTInteractive() {
  const { ref, getData } = useBinarySearchTree();
  return (
    <div className="BSTInteractive">
      <h1>Interactive</h1>
      <BinarySearchTree data={arr} ref={ref} />
      <div className="dropdrupcontainer">
        <h3>Inorder</h3>
        <div className="Dndcontainer">
          <InorderDnd />
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
        <h3>Preorder</h3>
        <div className="Dndcontainer">
          <PreorderDnd />
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
        <h3>Postorder</h3>
        <div className="Dndcontainer">
          <PostorderDnd />
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
      </div>
      <Button
        variant="secondary"
        onClick={() => {
          let inorderValue = getData("inorder");
          let preorderValue = getData("preorder");
          let postorderValue = getData("postorder");
          let inorder = document.querySelectorAll(".Inorderitems");
          let preorder = document.querySelectorAll(".Preorderitems");
          let postorder = document.querySelectorAll(".Postorderitems");
          let inTF = 1;
          let preTF = 1;
          let postTF = 1;
          let correctS = document.querySelectorAll(".correct");
          let wrongS = document.querySelectorAll(".wrong");
          for (let i = 0; i < inorder.length; i++) {
            if (
              inorder[i].innerText !== inorderValue[i].toString() &&
              inTF === 1
            ) {
              correctS[0].style.display = "none";
              wrongS[0].style.display = "block";
              inTF = 0;
            }
            if (
              preorder[i].innerText !== preorderValue[i].toString() &&
              preTF === 1
            ) {
              correctS[1].style.display = "none";
              wrongS[1].style.display = "block";
              preTF = 0;
            }
            if (
              postorder[i].innerText !== postorderValue[i].toString() &&
              postTF === 1
            ) {
              correctS[2].style.display = "none";
              wrongS[2].style.display = "block";
              postTF = 0;
            }
          }
          if (inTF) {
            correctS[0].style.display = "block";
            wrongS[0].style.display = "none";
          }
          if (preTF) {
            correctS[1].style.display = "block";
            wrongS[1].style.display = "none";
          }
          if (postTF) {
            correctS[2].style.display = "block";
            wrongS[2].style.display = "none";
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default BSTInteractive;
