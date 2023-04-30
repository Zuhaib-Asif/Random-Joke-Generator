let joke = document.getElementById("joke");
let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function () {
  fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      joke.innerHTML = data.joke;
    });
});
