
function getNBAUrl() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-based, so January is 0
    let day = currentDate.getDate();
  
    // Pad single-digit month and day with leading zero if needed
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
  
    // Construct the URL with the current date
    const url = `https://api-nba-v1.p.rapidapi.com/games?date=${year}-${month}-${day}`;
  
    return url;
  }

const url = getNBAUrl();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c8eb51988msh059f11ec9d4a56fp198f95jsnfb06ddf43e1e',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch(url,options

)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the API response data
    console.log(data);
    data.response.forEach((item)=>{
        createGame(item)
    })
  })




  document.getElementById('fantasy').onclick = () =>{
    window.location.href = './fantasy/fantasy.html'
}

document.getElementById('standings').onclick = () =>{
    window.location.href = '../standings/standings.html'
}
document.getElementById('statistics').onclick = () =>{
    window.location.href = '../player-stats/player-stats.html'
}
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amOrPm = hours >= 12 ? 'pm' : 'am';
  
    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12 || 12;
  
    // Add leading zero to minutes if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${hours}:${minutes}${amOrPm}`;
  }



function createGame(gameItem){
    console.log(gameItem.teams.visitors.logo)
    var gameBox = document.createElement('div')
    gameBox.classList.add('game-box')
    var time = document.createElement('p')
    var away = document.createElement('p')
    var home = document.createElement('p')
    away.innerText = gameItem.teams.visitors.code
    home.innerText = gameItem.teams.home.code
    var awayLogo = document.createElement('img')
    var homeLogo = document.createElement('img')
    awayLogo.src = gameItem.teams.visitors.logo
    awayLogo.style.height = '30px'
    homeLogo.src = gameItem.teams.home.logo
    homeLogo.style.height = '30px'
    away.appendChild(awayLogo)
    home.appendChild(homeLogo)

    away.classList.add('game-text')
    home.classList.add('game-text')
    time.classList.add('game-text')
    time.innerText = formatTime(new Date(gameItem.date.start))
    gameBox.appendChild(time)
    gameBox.appendChild(away)
    gameBox.appendChild(home)
    document.getElementById('game-bar').appendChild(gameBox)
}