document.getElementById('back-bttn').onclick = () =>{
    document.getElementsByClassName('side-menu')[0].style.visibility = 'hidden';
}
document.getElementById('menu-icon').onclick = () =>{
    document.getElementsByClassName('side-menu')[0].style.visibility = 'visible';
}
document.getElementById('fantasy-bttn').onclick = () =>{
    window.location.href = '../fantasy/fantasy.html'
}

document.getElementById('standings-bttn').onclick = () =>{
    window.location.href = '../standings/standings.html'
}
document.getElementById('stats').onclick = () =>{
    window.location.href = '../player-stats/player-stats.html'
}
document.getElementById('home-bttn').onclick = () =>{
    console.log("hello")
    window.location.href = '../index.html'
}


const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023';
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
        addStanding(item)
    })
  })

  function addStanding(item){
    const tableItem = document.createElement('tr');
    const logo = document.createElement('td');
    const team = document.createElement('td');
    const conf = document.createElement('td');
    const division = document.createElement('td');
    const wins = document.createElement('td');
    const losses = document.createElement('td');

    logo.classList.add('table-text')
    team.classList.add('table-text')
    conf.classList.add('table-text')
    division.classList.add('table-text')
    wins.classList.add('table-text')
    losses.classList.add('table-text')

    const logoImg = document.createElement('img')
    logoImg.src = item.team.logo
    logoImg.style.height = '30px'
    logo.appendChild(logoImg)
    team.innerText = item.team.name
    conf.innerText = item.conference.name
    division.innerText = item.division.name
    wins.innerText = item.win.total
    losses.innerText = item.loss.total
    tableItem.appendChild(logo)
    tableItem.appendChild(team)
    tableItem.appendChild(conf)
    tableItem.appendChild(division)
    tableItem.appendChild(wins)
    tableItem.appendChild(losses)
    document.getElementById('standings').appendChild(tableItem)



    

  }