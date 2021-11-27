// Oyuncunun Mevcut Pozisyonu
var currentY = 0;
var currentX = 3;

// Oyuncunun Yeni Pozisyonu
var newX = 0;
var newY = 0;

// Labirent
var middleMaze = [
  [0, 0, 0, "X", 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0],
];

// Labirentin Çizilmesi

function drawMaze() {
  var middleMazeTable = document.getElementById("middleMaze");
  var middleTableHtml = "<div>";
  for (let i = 0; i < middleMaze.length; i++) {
    let row = "";
    for (let j = 0; j < middleMaze[i].length; j++) {
      row =
        row +
        middleMaze[i][j] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;";
    }
    row = row + "<br>" + "<br>";
    middleTableHtml += row;
  }
  middleMazeTable.innerHTML = middleTableHtml;
}

drawMaze();

// Tuşlara Eventlerin Atanması
window.addEventListener("keydown", function easyAct(char) {
  if (char.code === "KeyA") {
    newX = currentX - 1;
    newY = currentY;
  } else if (char.code === "KeyS") {
    newY = currentY + 1;
    newX = currentX;
  } else if (char.code === "KeyD") {
    newX = currentX + 1;
    newY = currentY;
  } else if (char.code === "KeyW") {
    newY = currentY - 1;
    newX = currentX;
  }

  // Yeni Pozisyon
  let valueNewPosition = middleMaze[newY][newX];

  // Hareket Edilebilirlik Kontrolü
  if (valueNewPosition == 0) {
    middleMaze[currentY][currentX] = 0;
    middleMaze[newY][newX] = "X";
    currentX = newX;
    currentY = newY;

    // Oyun bitirme
    if (newY == 7 && newX == 4) {
      Swal.fire({
        title: "Good Job!",
        text: "Next Stogecoach. Hurry Up!",
        imageUrl:
          "https://i.pinimg.com/originals/45/4b/dd/454bddc1435aade711fa286fcffa6315.jpg",
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: "Custom image",
        showConfirmButton: false,
        timer: 3000,
      });
      this.setTimeout(openNextLevel, 3000);
    }

    // Hareket Edebiliyorsa Labirentin Güncellenmesi
    drawMaze();
  }
  // Hareket Edemiyorsa Uyarının Yapılması
  else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Be careful. Daltons there !",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

// Ana Sayfaya Dönme
const townBtn = document.querySelector(".daisy"); //Butonun Seçilmesi

townBtn.addEventListener("click", goToDaisy); // Click Eventinin Atanması

function goToDaisy(e) {
  window.location.replace("../mainPage/main.html");

  e.preventDefault();
}

// Master Maze Açma
function openNextLevel() {
  window.location.replace("../masterPage/master.html");
}
