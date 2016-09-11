// function popup (num) {
//   document.getElementbyId("popup" + num).style.visibility: "visible";
//   console.log("hi");
// }

// function popdown (x) {
//   x.style.visibility: "hidden";
// }

function popup (num) {
  document.getElementById("popup" + num).style.visibility = "visible";

  for (var i = 1; i < 5; i++) {
    if (i !== num) {
      document.getElementById("img" + i).style.opacity= 0.6;
    }
  }
}

function popdown (num) {
  document.getElementById("popup" + num).style.visibility = "hidden";

  for (var i = 1; i < 5; i++) {
    if (i !== num) {
      document.getElementById("img" + i).style.opacity= 1;
    }
  }
}