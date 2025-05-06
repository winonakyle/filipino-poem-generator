function displayPoem(response) {

  console.log("Poem generated");

  new Typewriter("#generated-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event){
  event.preventDefault();

let userInstructions = document.querySelector("#user-instructions");
let prompt = `Generate a short 4-line Tagalog poem about ${userInstructions.value}. Do not include a title to the poem, separate every line with <br /> element and sign "- SheCodes AI" on the bottom of the poem in <em> element.`;
let context = `You are an AI Assistant that is knowledgeable about Filipino, specifically Tagalog literature.`;
let apiKey = "8e3acea414f74ff0de5f0fboa8fbt362";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let generatedPoemElement = document.querySelector("#generated-poem");
generatedPoemElement.classList.remove("hidden");
generatedPoemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${userInstructions.value}</div>`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);