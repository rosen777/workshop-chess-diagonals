export default {
  draw,
  highlight,
};

// ****************************

var diagonals = [];
var highlighted = [];
var tileDiagonals = new Map();

function draw(boardEl) {
  for (let i = 0; i < 30; i++) {
    diagonals.push([]);
  }

  for (let i = 0; i <= 7; i++) {
    let rowEl = document.createElement("div");
    for (let j = 0; j <= 7; j++) {
      let tileEl = document.createElement("div");
      rowEl.appendChild(tileEl);

      let majorDiag = diagonals[7 - (i - j)];
      let minorDiag = diagonals[15 + (i + j)];

      majorDiag.push(tileEl);
      minorDiag.push(tileEl);

      tileDiagonals.set(tileEl, [majorDiag, minorDiag]);
    }
    boardEl.appendChild(rowEl);
  }
}

function highlight(tileEl) {
  // clear all currently highlighted tiles (if any)
  for (let diagonal of highlighted) {
    for (let el of diagonal) {
      el.classList.remove("highlighted");
    }
  }

  // clicked on a board tile?
  if (tileEl) {
    highlighted = tileDiagonals.get(tileEl);

    for (let diagonal of highlighted) {
      for (let el of diagonal) {
        el.classList.add("highlighted");
      }
    }
  }
}
