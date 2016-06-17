/**
 * Created by alevin on 16.06.16.
 */
var Help_list, Help_str0, Help_str1, Help_str2,  Help_str3, Help_str4;
var playername, playerpoint = 0, machinpoint, pointRand, randCard;
var printCard ;

Help_str0 = "<h2>Правила игры в 21 :<h2>";
Help_str1 = "<p>1. Задача набрать число очков приближенное к 21, но не привышающее 21.</p>";
Help_str2 = "<p>2. Играют одной колодой в 36 карт.</p>";
Help_str3 = "<p>3. При подсчете очков старшинство карт не стандартно.<br>(Валет - 2 очка; Дама - 3 очка; Король - 4 очка; Туз - 11 очков)</p>";
Help_str4 = "<p>4. Остальные каарты считаются по своему наминалу.</p>";

Help_list = Help_str0 + Help_str1 + Help_str2 + Help_str3 + Help_str4;

function HelpToGame() {
    document.getElementById('game_set').innerHTML = Help_list + "<div id=\"CenterButton\"><button id=\"StartButton\" onclick=\"style.display='none';PreStat()\">Начать</button></div>";
}

function GiveName() {
    playername = document.getElementById("Name").value;
    document.getElementById('game_set').innerHTML = "";
    StartToGame();
}

function PreStat() {
    document.getElementById('game_set').innerHTML = "";
    document.getElementById('game_set').innerHTML += "<input id=\"Name\" type=\"text\" placeholder=\"Имя набирать тут\" id=\"name_tag\">";
    document.getElementById('game_set').innerHTML += "<button id=\"NameStart\" onclick=\"style.display='none';GiveName()\">Принять</button>";
}

function card_set() {
    if (randCard == 0){
        printCard = printCard + "Diamonds.png\">";
    }else if (randCard == 1){
        printCard = printCard + "Hearts.png\">";
    }else if (randCard == 2){
        printCard = printCard + "Spades.png\">";
    }else if (randCard == 3){
        printCard = printCard + "Clubs.png\">";
    }
}

function point_random() {
    if (pointRand == 0){
        printCard = "<image src=\"card/11/";
        card_set();
        playerpoint = playerpoint + 11;
    }else if (pointRand == 1){
        printCard = "<image src=\"card/10/";
        card_set();
        playerpoint = playerpoint + 10;
    }else if (pointRand == 2){
        printCard = "<image src=\"card/9/";
        card_set();
        playerpoint = playerpoint + 9;
    }else if (pointRand == 3){
        printCard = "<image src=\"card/8/";
        card_set();
        playerpoint = playerpoint + 8;
    }else if (pointRand == 4){
        printCard = "<image src=\"card/7/";
        card_set();
        playerpoint = playerpoint + 7;
    }else if (pointRand == 5){
        printCard = "<image src=\"card/6/";
        card_set();
        playerpoint = playerpoint + 6;
    }else if (pointRand == 6){
        printCard = "<image src=\"card/4/";
        card_set();
        playerpoint = playerpoint + 4;
    }else if (pointRand == 7){
        printCard = "<image src=\"card/3/";
        card_set();
        playerpoint = playerpoint + 3;
    }else if (pointRand == 8){
        printCard = "<image src=\"card/2/";
        card_set();
        playerpoint = playerpoint + 2;
    }
}

function StartToGame() {
    pointRand = Math.floor(Math.random()*8);
    randCard = Math.floor(Math.random()*3);
    point_random();
    document.getElementById('game_set').innerHTML += printCard;
    document.getElementById('game_set').innerHTML += "<button id=\"Me\" onclick=\"style.display='none';StartToGame()\">Взять</button>"
    document.getElementById('game_set').innerHTML += "<button id=\"Pass\" onclick=\"style.display='none';CloseGame()\">Пас</button>"
}