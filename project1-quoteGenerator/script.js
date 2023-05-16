// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

let quotes = [
    {
        quote : "I don’t remember anybody’s name. How do you think the dahling thing started?",
        person : "Eva Gabor"
    },
    {
        quote : "The inheritance of a distinguished and noble name is a proud inheritance to him who lives worthily of it.",
        person : "Charles Caleb Colton"
    },
    {
        quote : "A good name, like good will, is got by many actions and lost by one.",
        person : "Lord Jeffrey"
    },
    {
        quote : "Be in present past is worth nothing",
        person : "insh007"
    },
    {
        quote : "Work hard until or unless you get success",
        person : "Unknown"
    }
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})