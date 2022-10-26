import React from "react";

function openform() {
  document.getElementById("overlay").style.display = "block";
}

function closeform() {
  document.getElementById("overlay").style.display = "none";
}

export {openform, closeform}