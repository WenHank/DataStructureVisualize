import React from "react";
import * as classNames from "classnames";
import { BinarySearchTree, useBinarySearchTree } from "react-tree-vis";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./BSTInteractive.css";
import { MDBContainer } from "mdbreact";
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

class InReactBeautifulDndHorizontal extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      items: getItems(arr.length),
    };
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
      <div>
        <h3>Inorder</h3>
        <Button
          variant="secondary"
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.setState({ items: getItems(arr.length) });
          }}
        >
          Change
        </Button>
        <div className="Dndcontainer">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
      </div>
    );
  }
}
class PreReactBeautifulDndHorizontal extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      items: getItems(arr.length),
    };
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
      <div>
        <h3>Preorder</h3>
        <Button
          variant="secondary"
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.setState({ items: getItems(arr.length) });
          }}
        >
          Change
        </Button>
        <div className="Dndcontainer">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
      </div>
    );
  }
}
class PostReactBeautifulDndHorizontal extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      items: getItems(arr.length),
    };
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
      <div>
        <h3>Postorder</h3>
        <Button
          variant="secondary"
          style={{ marginBottom: "10px" }}
          onClick={() => {
            this.setState({ items: getItems(arr.length) });
          }}
        >
          Change
        </Button>
        <div className="Dndcontainer">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
          <img className="correct" src="./Img/correct.png" />
          <img className="wrong" src="./Img/wrong.png" />
        </div>
      </div>
    );
  }
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Binary Search Tree Interactive
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>What can you do ?</h3>
        <p>
          透過拖拉下方的方塊，將其排列成中序,前序,後序的
          <br />
          並且按下Submit來知道你的答案是否正確
          <br />
          假如你還想做更多測驗的話
          <br />
          你可以按下Random之後，會有更多的題目讓你練習
        </p>
        <h3>About function</h3>
        <p>
          Random: 可隨機生成一棵樹
          <br />
          Change: 更改拖曳欄位
          <br />
          Submit: 送出答案
          <br />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Try it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function BSTInteractive() {
  const { ref, getData, generateRandomTree } = useBinarySearchTree();
  const [modalShow, setModalShow] = React.useState(false);
  const [record, setRecord] = useState([]);
  const scrollContainerStyle = { width: "100%", maxHeight: "500px" };
  const [open, setOpen] = useState("hide");

  let tmp = [...record];
  function creatTree(params) {
    let tmp = [];
    async function newTree(params) {
      await generateRandomTree(getRandom(5, 10));
      tmp = getData("inorder");
      tmp.sort(function () {
        return 0.5 - Math.random();
      });
      arr = tmp;
      console.log(arr);
    }
    newTree();
  }
  return (
    <div className="BSTInteractive">
      <div className="hintContainer">
        <div className="loader"></div>
        <img
          className="hint"
          src="./Img/hint.gif"
          onClick={() => setModalShow(true)}
        />
      </div>
      <h1>Interactive</h1>
      <div className="treeanddnd">
        <div className="bsttreecontainer">
          <BinarySearchTree data={arr} ref={ref} />
          <Button
            variant="secondary"
            style={{ marginTop: "20px" }}
            onClick={() => {
              creatTree();
              setRecord((prevArray) => [
                ...record,
                "-------------------",
                new Date().toLocaleTimeString() + "\n",
                new Date().getDate() + "日\n",
                new Date().getMonth() + 1 + "月 ",
                new Date().getFullYear() + " ",
                "Random \n",
              ]);
            }}
          >
            Random
          </Button>
        </div>
        <div className="dropdrupcontainer">
          <InReactBeautifulDndHorizontal arr={arr} />
          <PreReactBeautifulDndHorizontal arr={arr} />
          <PostReactBeautifulDndHorizontal arr={arr} />
          <Button
            variant="secondary"
            style={{ marginTop: "20px" }}
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
              let tmp = "";
              for (let i = 0; i < inorder.length; i++) {
                if (
                  inorder[i].innerText !== inorderValue[i].toString() &&
                  inTF === 1
                ) {
                  correctS[0].style.display = "none";
                  wrongS[0].style.display = "block";
                  inTF = 0;
                  tmp += "inorder wrong \n";
                }
                if (
                  preorder[i].innerText !== preorderValue[i].toString() &&
                  preTF === 1
                ) {
                  correctS[1].style.display = "none";
                  wrongS[1].style.display = "block";
                  preTF = 0;
                  tmp += "preorder wrong \n";
                }
                if (
                  postorder[i].innerText !== postorderValue[i].toString() &&
                  postTF === 1
                ) {
                  correctS[2].style.display = "none";
                  wrongS[2].style.display = "block";
                  postTF = 0;
                  tmp += "postorder wrong \n";
                }
              }
              if (inTF) {
                correctS[0].style.display = "block";
                wrongS[0].style.display = "none";
                tmp += "inorder correct \n";
              }
              if (preTF) {
                correctS[1].style.display = "block";
                wrongS[1].style.display = "none";
                tmp += "preorder correct \n";
              }
              if (postTF) {
                correctS[2].style.display = "block";
                wrongS[2].style.display = "none";
                tmp += "postorder correct \n";
              }
              setRecord((prevArray) => [
                ...record,
                "-------------------",
                new Date().toLocaleTimeString() + "\n",
                new Date().getDate() + "日\n",
                new Date().getMonth() + 1 + "月 ",
                new Date().getFullYear() + " ",
                tmp,
              ]);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className={`record ${open === "show" && "open"} `}>
        <div className="recordContainer">
          <Button
            variant="secondary"
            onClick={() => {
              if (open === "hide") {
                setOpen("show");
              } else {
                setOpen("hide");
              }
            }}
          >
            {open}
          </Button>
          <MDBContainer>
            <div
              className="scrollbar body mx-auto"
              style={(scrollContainerStyle, { whiteSpace: "pre-wrap" })}
            >
              <div className="title">Record Table</div>
              {tmp.reverse()}
            </div>
          </MDBContainer>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default BSTInteractive;
