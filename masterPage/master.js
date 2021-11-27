// Oyuncunun Mevcut Pozisyonu
var currentY = 0;
var currentX = 5;

// Oyuncunun Yeni Pozisyonu
var newX = 0;
var newY = 0;

// Labirent
var masterMaze = [
  [0, 1, 0, 1, 0, "X", 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
];

// Labirentin Çizilmesi

function drawMaze() {
  var masterMazeTable = document.getElementById("masterMaze");
  var masterTableHtml = "<div>";
  for (let i = 0; i < masterMaze.length; i++) {
    let row = "";
    for (let j = 0; j < masterMaze[i].length; j++) {
      row =
        row +
        masterMaze[i][j] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;";
    }
    row = row + "<br>" + "<br>";
    masterTableHtml += row;
  }
  masterMazeTable.innerHTML = masterTableHtml;
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
  let valueNewPosition = masterMaze[newY][newX];

  // Hareket Edilebilirlik Kontrolü
  if (valueNewPosition == 0) {
    masterMaze[currentY][currentX] = 0;
    masterMaze[newY][newX] = "X";
    currentX = newX;
    currentY = newY;

    // Oyun bitirme
    if (newY == 9 && newX == 0) {
      Swal.fire({
        title: "Good Job!",
        text: "Make World Great Again!",
        imageUrl: "../images/final.jpg",
        imageWidth: 600,
        imageHeight: 320,
        imageAlt: "Custom image",
        showConfirmButton: false,
        timer: 3000,
      });
      this.setTimeout(goToDaisy, 3000);
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