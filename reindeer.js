console.log("reindeer.js");


let colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
let reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

let hohohoElement = document.getElementById("reindeer");


for (let i = 0; i < reindeer.length && reindeer.length <= colors.length ; i++){
	let currentReindeer = reindeer[i];
	let currentColor = colors[i];
	hohohoElement.innerHTML += `${currentColor} ${currentReindeer}<br>`
}








