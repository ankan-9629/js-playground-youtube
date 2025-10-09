const fullName = "Ankan Bhowmick"
const repoCount = 2

console.log(`Hey I am ${fullName}, and my repo count is ${repoCount}`);

const email = new String("ankan1@gmail.com");

const username = email.substring(0,email.indexOf('@'));
const domain = email.slice(email.indexOf('@')+1);

console.log(`username: ${username}`);
console.log(`domain: ${domain}`);

// slice
console.log(email.slice(-9,12));


const url = "https://ankan.com/ankan%20bhowmick";
const refinedUrl = url.replace('%20', '-');

console.log(refinedUrl);

console.log(refinedUrl.includes("ankan"));
console.log(refinedUrl.includes("boni"));

const gameName = "valorant-gta5-coc-vice%city-bgmi-san%andreas"

const gamesList = gameName.split("-");
const refinedGamesList = gameName.replaceAll('%', ' ').split("-");

console.log(gamesList);
console.log(refinedGamesList);


