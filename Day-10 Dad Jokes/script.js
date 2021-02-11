const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//USING.then()
//fetch is native api that is built into the browser
//that means that you don't have to download anything
//or add a cdn of any kind
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke 
//         //Joke is from the API
//     })
// }

//this does the same as the above
//USING 'await' and 'async'
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    //whenever you use 'await' inside of a function,
    //you have to label that function 'asnyc'
    //any promises that you want to put into a variable
    //you add 'await'
    const res = await fetch('https://icanhazdadjoke.com', config)

    //this returns a promise
    const data = await res.json()

    jokeEl.innerHTML = data.joke

}