const championsUrl = "http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json";
const getChampionUrl = (champion) => `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${champion}.json`

const getChampions = async () => {
    const response = await fetch(championsUrl);
    const json = await response.json();
    //console.log(json.data);
    return Object.keys(json.data);
}

const getRandomValue = (array) => {
    randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
}

const getChampionSkins = async (champion) => {
    const championUrl = getChampionUrl(champion);
    const response = await fetch(championUrl);
    const json = await response.json();
    console.log(json.data[champion].skins);
    return json.data[champion].skins;
}

const displayChampionSkin = (champion, skins) => {
    const randomSkin = getRandomValue(skins)
    console.log(randomSkin);
    const skinUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${randomSkin.num}.jpg`;
    console.log(skinUrl);
    const image = new Image();
    image.src = skinUrl;
    document.body.appendChild(image);
}

const initialize = async () => {
    const champions = await getChampions();
    console.log(champions);
    const champion = getRandomValue(champions);
    console.log(champion);
    const skins = await getChampionSkins(champion);
    displayChampionSkin(champion, skins);


}



initialize();
