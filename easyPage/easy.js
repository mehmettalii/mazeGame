// Oyuncunun Mevcut Pozisyonu
var currentY = 0;
var currentX = 2;

// Oyuncunun Yeni Pozisyonu
var newX = 0;
var newY = 0;

// Labirent
var easyMaze = [
  [1, 0, "X", 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
];

// Labirentin Çizilmesi

function drawMaze() {
  var easyMazeTable = document.getElementById("easyMaze");
  var easyTableHtml = "<div>";
  for (let i = 0; i < easyMaze.length; i++) {
    let row = "";
    for (let j = 0; j < easyMaze[i].length; j++) {
      row =
        row +
        easyMaze[i][j] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;";
    }
    row = row + "<br>" + "<br>";
    easyTableHtml += row;
  }
  easyMazeTable.innerHTML = easyTableHtml;
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
  let valueNewPosition = easyMaze[newY][newX];

  // Hareket Edilebilirlik Kontrolü
  if (valueNewPosition == 0) {
    easyMaze[currentY][currentX] = 0;
    easyMaze[newY][newX] = "X";
    currentX = newX;
    currentY = newY;

    // Oyun bitirme
    if (newY == 4 && newX == 3) {
      Swal.fire({
        title: "Good Job!",
        text: "Next Düldül. Hurry Up!",
        imageUrl:
          "https://img-s3.onedio.com/id-59f867a37a93c1ba0e257b78/rev-0/w-900/h-680/f-gif/s-9d821b6019ba9460df52127ac292d8f15c507fc3.gif",
        imageWidth: 600,
        imageHeight: 320,
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

// Middle Maze Açma
function openNextLevel() {
  window.location.replace("../middlePage/middle.html");
}
