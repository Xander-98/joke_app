const joke = document.getElementById("text");
const btn = document.getElementById("btn");
btn.addEventListener('onclick', jokes);
getJoke();

function jokes(){
    fetch('https://icanhazdadjoke.com/') 
    .then(res => res.json())
    .then(data =>{
        console.log(data.joke)
        joke.innerText = data.joke
        document.getElementById('btn')
        innerHTML=jokes
    })
}