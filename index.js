// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

 function appendCat(name){
    const newCat = [...cats, name];
    return newCat
}

function prependCat(name){
    const newCat = [name, ...cats];
    return newCat
}

function removeLastCat(){
    const lastCat = cats.slice(0, 2);
    return lastCat
}

function removeFirstCat(){
    const firstCat = cats.slice(-2);
    return firstCat
}









