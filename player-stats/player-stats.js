
function populateData(data, tableId){
    const firstFive = data.results.slice(0,5)
    firstFive.forEach((player)=>{
        const playerRow = document.createElement('tr')

        const name = document.createElement('td')
        name.innerText = player.player_name;
        const points = document.createElement('td')
        points.innerText = player.PTS;
        const rebounds = document.createElement('td')
        rebounds.innerText = player.TRB;
        const assists = document.createElement('td')
        assists.innerText = player.AST;

        playerRow.appendChild(name)
        playerRow.appendChild(points)
        playerRow.appendChild(rebounds)
        playerRow.appendChild(assists)

        Array.from(playerRow.children).forEach((child)=>{ // why doesnt this work
            child.classList.add('table-text')
        })

        const pointsTable = document.getElementById(tableId)
        pointsTable.appendChild(playerRow)

    })
    


}

function retreiveData(url, tableId){
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Handle the JSON data returned by the API
        populateData(data, tableId)
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
    });
}


retreiveData('https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/2023/', 'point-scorers')
retreiveData('https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/2023/', 'top-rebounds')

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
document.getElementById('home-bttn').onclick = () =>{
    console.log("hello")
    window.location.href = '../index.html'
}