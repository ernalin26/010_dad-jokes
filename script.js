const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// With async await method
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json();
  
  jokeEl.innerHTML = data.joke;
}

// Another method with .then
// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//   .then((respond) => respond.json())
//   .then((data) => {
//     jokeEl.innerHTML = data.joke
//   })
// }