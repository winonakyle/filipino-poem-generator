function generatePoem(event){
  event.preventDefault();

new Typewriter("#generated-poem", {
  strings: "Hindi tayo tao, hindi rin tayo hayop. Bagay tayo, bagay talaga 🥰",
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);