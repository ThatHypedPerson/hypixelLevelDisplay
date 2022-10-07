// do /api in hypixel and add the key below
api_key = "API_KEY_HERE"

// look up your UUID and put it here
uuid = "UUID"

function getLevel()
{
	fetch(`https://api.hypixel.net/status?key=${api_key}&uuid=${uuid}`) // check if player is online
	.then(result => result.json())
	.then(({ session }) => {
		if(session["online"])
		{
			fetch(`https://api.hypixel.net/player?key=${api_key}&uuid=${uuid}`) // get player data
			.then(result => result.json())
			.then(({ player }) => {
				if(player["mostRecentGameType"] == "BEDWARS")
				{
					display(true)
					document.getElementById("level").innerHTML = String(player["achievements"]["bedwars_level"])
					updateColorBW(player["achievements"]["bedwars_level"])
					document.getElementById("progress").innerHTML = getProgressBW(player["stats"]["Bedwars"]["Experience"])
				}
				else if(player["mostRecentGameType"] == "SKYWARS")
				{
					display(true)
					// to-do: add all symbols from https://pastebin.com/jVNCkpKz
					document.getElementById("level").innerHTML = String(player["stats"]["SkyWars"]["levelFormatted"].slice(2,-1))
					updateColorSW(player["stats"]["SkyWars"]["levelFormatted"].slice(2,-1))
					document.getElementById("progress").innerHTML = getProgressSW(player["stats"]["SkyWars"]["skywars_experience"], player["stats"]["SkyWars"]["levelFormatted"].slice(2,-1))
				}
				else // player is not in bedwars/skywars
				{
					display(false)
				}
			})
		}
		else // do not show stats is player is not online
		{
			display(false)
		}
	})
	setTimeout(getLevel, 5000) // send request every 5 seconds
}

// match colors to ingame
const colors = [
	["#aaaaaa", "#2a2a2a"], //   0 stars / stone (no prestige)
	["#ffffff", "#414141"],	// 100 stars / iron
	["#f7ac21", "#2d2f05"],	// 200 stars / gold
	["#55FFFF", "#153f3f"],	// 300 stars / diamond
	["#00ab0b", "#002f02"],	// 400 stars / emerald
	["#2ca7a6", "#0c2e2e"],	// 500 stars / sapphire
	["#a30f15", "#2d0203"],	// 600 stars / ruby
	["#fe3efd", "#411441"],	// 700 stars / crystal
	["#693bfc", "#201441"],	// 800 stars / opal
	["#a700a7", "#2e002e"],	// 900 stars / amethyst
]
function updateColorBW(level)
{
	prestige = Math.floor(level / 100)
	var css = document.querySelector(':root');

	css.style.setProperty('--main', colors[prestige][0])
	css.style.setProperty('--sub', colors[prestige][1])
}
function updateColorSW(level)
{
	// different prestige/color every 5 levels
	prestige = Math.floor(level / 5)

	var css = document.querySelector(':root');

	css.style.setProperty('--main', colors[prestige][0])
	css.style.setProperty('--sub', colors[prestige][1])
}

// display exp requirements for next level
function getProgressBW(exp)
{
	// remove prestige exp from calculations
	np_exp = exp % 487000 // 487000 exp is 100 levels

	// levels X00 to X04 require different exp for each level
	if(np_exp < 500) // 0 -> 1 star
	{
		return np_exp + "/" + 500
	}
	else if(np_exp < 1500) // 1 -> 2 star
	{
		return (np_exp - 500) + "/" + 1000
	}
	else if(np_exp < 3500) // 2 -> 3 star
	{
		return (np_exp - 1500) + "/" + 2000
	}
	else if(np_exp < 7000) // 3 -> 4 star
	{
		return (np_exp - 3500) + "/" + 3500
	}
	else // stars 5-100
	{
		return ((np_exp - 7000) % 5000) + "/" + 5000
	}
}

// skywars level exp requirement remains consistent after level 12
const xp_per = [0, 20, 50, 80, 100, 250, 500, 1000, 1500, 2500, 4000, 5000, 10000]
const total_xp_12 = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000]
function getProgressSW(exp, level)
{
	if(level <= 12)
	{
		return (exp - total_xp_12[level - 1]) + "/" + xp_per[level - 1]
	}
	offset = 10000 * (level - 12)
	return (exp - offset - 15000) + "/" + 10000
}

// disable showing anything when not playing bedwars/skywars
function display(show)
{
	if(show)
	{
		document.getElementById("level_line").innerHTML = "Current Level: <span id='level'></span>"
		document.getElementById("progress_line").innerHTML = "Progress: <span id='progress'></span>"
	}
	else
	{
		document.getElementById("level_line").innerHTML = ""
		document.getElementById("progress_line").innerHTML = ""
	}
}

getLevel()