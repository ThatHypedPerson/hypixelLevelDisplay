// do /api in hypixel and add the key below
api_key = "API_KEY_HERE"

// look up your UUID and put it here
uuid = "UUID"

function getLevel()
{
	fetch(`https://api.hypixel.net/player?key=${api_key}&uuid=${uuid}`)
	.then(result => result.json())
	.then(({ player }) => {
		document.getElementById("level").innerHTML = String(player["achievements"]["bedwars_level"])
		updateColor(player["achievements"]["bedwars_level"])
	})
	setTimeout(getLevel, 5000) // send request every 5 seconds
}

colors = [
	["#aaaaaa", "#2a2a2a"], //   0 stars
	["#ffffff", "#414141"],	// 100 stars
	["#f7ac21", "#2d2f05"],	// 200 stars
	["#55FFFF", "#153f3f"],	// 300 stars
	["#00ab0b", "#002f02"],	// 400 stars
	["#2ca7a6", "#0c2e2e"],	// 500 stars
	["#a30f15", "#2d0203"],	// 600 stars
	["#fe3efd", "#411441"],	// 700 stars
	["#693bfc", "#201441"],	// 800 stars
	["#a700a7", "#2e002e"],	// 900 stars
]
function updateColor(level)
{
	prestige = Math.floor(level / 100)
	var css = document.querySelector(':root');

	css.style.setProperty('--main', colors[prestige][0])
	css.style.setProperty('--sub', colors[prestige][1])
}

getLevel()