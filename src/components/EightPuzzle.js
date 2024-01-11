import React, { useState } from "react";
import "./EightPuzzle.css";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
const EightPuzzle = () => {
  const [boxes, setBoxes] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, ""]));

  const handleClick = (index) => {
    const newBoxes = [...boxes];
    if (newBoxes[index] === "") {
      return;
    }

    if (newBoxes[index - 1] === "") {
      newBoxes[index - 1] = newBoxes[index];
      newBoxes[index] = "";
    } else if (newBoxes[index + 1] === "") {
      newBoxes[index + 1] = newBoxes[index];
      newBoxes[index] = "";
    } else if (newBoxes[index - 3] === "") {
      newBoxes[index - 3] = newBoxes[index];
      newBoxes[index] = "";
    } else if (newBoxes[index + 3] === "") {
      newBoxes[index + 3] = newBoxes[index];
      newBoxes[index] = "";
    }

    setBoxes(newBoxes);
    checkWin();
  };

  // const checkWin = () => {
  //   if (
  //     boxes[0] === 1 &&
  //     boxes[1] === 2 &&
  //     boxes[2] === 3 &&
  //     boxes[3] === 4 &&
  //     boxes[4] === 5 &&
  //     boxes[5] === 6 &&
  //     boxes[6] === 7 &&
  //     boxes[7] === 8 &&
  //     boxes[8] === ""
  //   ) {
  //     alert("Congrats, you win!");
  //   }
  // };
  const checkWin = () => {
  const isWin = boxes.every((box, index) => {
    if (box === "") {
      return index === boxes.length - 1;
    }
    return box === index + 1;
  });

  if (isWin) {
    alert("Congrats, you win!");
  }
};

  return (
    <>
      <header class="purples">
        <h1>
          <center>8 Puzzle</center>
        </h1>
      </header>
      <div className="container">
        {boxes.map((box, index) => (
          <div className="box" key={index} onClick={() => handleClick(index)}>
            {box}
          </div>
        ))}
      </div>
    </>
  );
};

export default EightPuzzle;
