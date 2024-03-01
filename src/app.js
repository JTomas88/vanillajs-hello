/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let frase = "";

  //random who
  let quien = Math.floor(Math.random() * 3) + 1;
  let resultadoQuien = who[quien];
  frase = frase + resultadoQuien + " ";

  //random action
  let accion = Math.floor(Math.random() * 3) + 1;
  let resultadoAccion = action[accion];
  frase = frase + resultadoAccion + " ";

  //random what
  let que = Math.floor(Math.random() * 2) + 1;
  let resultadoQue = what[que];
  frase = frase + resultadoQue + " ";

  //random when
  let donde = Math.floor(Math.random() * 4) + 1;
  let resultadoDonde = when[donde];
  frase = frase + resultadoDonde;

  document.getElementById("excuse").innerHTML = frase;
  console.log(frase);
  console.log("Hello Rigo from the console!");
};
