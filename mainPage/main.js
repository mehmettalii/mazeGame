// Butonların Seçilmesi

const easyBtn = document.querySelector(".level1");
const mediumBtn = document.querySelector(".level2");
const masterBtn = document.querySelector(".level3");

// Eventlerin Atanması

easyBtn.addEventListener("click", openEasyMaze);
mediumBtn.addEventListener("click", openMiddleMaze);
masterBtn.addEventListener("click", openMasterMaze);

// Easy Maze Açılması

function openEasyMaze(e) {
  window.location.replace("../easyPage/easy.html");

  e.preventDefault();
}

// Middle Maze Açılması

function openMiddleMaze(e) {
  Swal.fire({
    title: "Did you save Rintintin?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      window.location.replace("../middlePage/middle.html");
    } else if (result.isDenied) {
      Swal.fire("You must save it first !", "", "info");
    }
  });

  e.preventDefault();
}

// Master Maze Açılması

function openMasterMaze(e) {
  Swal.fire({
    title: "Did you save Rintintin and Düldül?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    
    if (result.isConfirmed) {
      window.location.replace("../masterPage/master.html");
    } else if (result.isDenied) {
      Swal.fire("You must save them first !", "", "info");
    }
  });

  e.preventDefault();
}
