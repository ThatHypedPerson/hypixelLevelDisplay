# Hypixel Level/Progress Display
This program displays the current level and progress to their next level for [Minecraft Hypixel](https://hypixel.net/) games Bed Wars and SkyWars. The color and font of each level is also shown.

This is aimed for use with livestreams of these games as a supplement to the viewer experience. I originally created it to show my progress to 300✫ in Bed Wars and level 15 in SkyWars.

<details>
<summary>Examples</summary>
Screenshots taken October 6, 2022
<br>

ThatHypedPerson Bedwars
![hyped_bw](https://user-images.githubusercontent.com/60367754/194553618-44e2d590-24d0-4d7d-91d4-226900555006.png)

ThatHypedPerson Skywars
![hyped_sw](https://user-images.githubusercontent.com/60367754/194553297-69b1c5d8-fde8-42d1-8b54-d935fc99f4a1.png)

[RedYoshi7](https://www.twitch.tv/shedaft_mf) Bedwars
![shedaft_bw](https://user-images.githubusercontent.com/60367754/194556011-bf36ec9c-ef53-416b-81d8-c805a3dbd3b9.png)

[RedYoshi7](https://www.twitch.tv/shedaft_mf) Skywars
![shedaft_sw](https://user-images.githubusercontent.com/60367754/194555772-20d1146f-184b-44be-919d-87fb1b847c95.png)
</details>

## Setup
Download the zip of this repository at the top of the page and extract it to a known location.

Download and install [this Minecraft font](https://github.com/IdreesInc/Minecraft-Font/releases/download/v1.0/Minecraft.otf).

Navigate to `api.js` and change the variables at the top of the file to:
- `api_key`: Connect to the Hypixel Network (mc.hypixel.net) and run the command `/api` to get your api key.
- `uuid`: Go to the website https://namemc.com/ and input your username. The uuid should be on your profile.

Your `api.js` should look like this
```
// do /api in hypixel and add the key below
api_key = "967211bc-1ed9-4343-9792-48fdbbda707a" (FAKE API KEY)

// look up your UUID and put it here
uuid = "f73b37d0137b40e682b1b5e400617ca6" (ThatHypedPerson UUID)
...
```
###### obviously without the parenthesis
<br>

### The following instructions are for [OBS Studio](https://obsproject.com/), however most steps should be similar if not the same in other streaming programs.

1. Add a new browser source to your scene.
2. Enable the local file checkbox and browse for the index.html of this project.
3. Set the width of this source to 1000 and the height to 200.

Your browser source should now look like this:![obs-browser](https://user-images.githubusercontent.com/60367754/194550012-c0d4abf7-e90f-4768-82ce-18df8f4ab30d.png)