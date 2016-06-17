/**
 * Created by alevin on 16.06.16.
 */
var Help_list, Help_str0, Help_str1, Help_str2,  Help_str3, Help_str4;
var playername, playerpoint = 0, machinpoint = 0, machineRand, pointRand, randCard;
var printCard, bordpoint;

Help_str0 = "<h2>Правила игры в 21 :<h2>";
Help_str1 = "<p>1. Задача набрать число очков приближенное к 21, но не привышающее 21.</p>";
Help_str2 = "<p>2. Играют одной колодой в 36 карт.</p>";
Help_str3 = "<p>3. При подсчете очков старшинство карт не стандартно.<br>(Валет - 2 очка; Дама - 3 очка; Король - 4 очка; Туз - 11 очков)</p>";
Help_str4 = "<p>4. Остальные каарты считаются по своему номиналу.</p>";

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
    playerpoint = 0;
    Pre_machin_gene();
    document.getElementById('game_set').innerHTML = "";
    document.getElementById('game_set').innerHTML += "<input id=\"Name\" type=\"text\" placeholder=\"Имя набирать тут\" id=\"name_tag\">";
    document.getElementById('game_set').innerHTML += "<button id=\"NameStart\" onclick=\"style.display='none';GiveName()\">Принять</button>";
}

function card_set() {
    if (randCard == 0){
        printCard = printCard + "Diamonds.png\"></div>";
    }else if (randCard == 1){
        printCard = printCard + "Hearts.png\"></div>";
    }else if (randCard == 2){
        printCard = printCard + "Spades.png\"></div>";
    }else if (randCard == 3){
        printCard = printCard + "Clubs.png\"></div>";
    }
}

function point_random() {
    if (pointRand == 0){
        printCard = "<div id=\"img\"><image src=\"card/11/";
        card_set();
        playerpoint = playerpoint + 11;
    }else if (pointRand == 1){
        printCard = "<div id=\"img\"><image src=\"card/10/";
        card_set();
        playerpoint = playerpoint + 10;
    }else if (pointRand == 2){
        printCard = "<div id=\"img\"><image src=\"card/9/";
        card_set();
        playerpoint = playerpoint + 9;
    }else if (pointRand == 3){
        printCard = "<div id=\"img\"><image src=\"card/8/";
        card_set();
        playerpoint = playerpoint + 8;
    }else if (pointRand == 4){
        printCard = "<div id=\"img\"><image src=\"card/7/";
        card_set();
        playerpoint = playerpoint + 7;
    }else if (pointRand == 5){
        printCard = "<div id=\"img\"><image src=\"card/6/";
        card_set();
        playerpoint = playerpoint + 6;
    }else if (pointRand == 6){
        printCard = "<div id=\"img\"><image src=\"card/4/";
        card_set();
        playerpoint = playerpoint + 4;
    }else if (pointRand == 7){
        printCard = "<div id=\"img\"><image src=\"card/3/";
        card_set();
        playerpoint = playerpoint + 3;
    }else if (pointRand == 8){
        printCard = "<div id=\"img\"><image src=\"card/2/";
        card_set();
        playerpoint = playerpoint + 2;
    }
}

function CloseGame() {
    document.getElementById('game_set').innerHTML = "";
    if (playerpoint == 21){
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Поздравляю " + playername + ".</b><br><b>Вы победили!</b></div>";
    }else if (playerpoint > 21){
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Сочувствую " + playername + ".</b><br><b>Вы проиграли!</b></div>";
    }else if(machinpoint > 21) {
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Поздравляю " + playername + ".</b><br><b>Вы победили!</b></div>";
    }else if(playerpoint > machinpoint){
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Поздравляю " + playername + ".</b><br><b>Вы победили!</b></div>";
    }else if(playerpoint == machinpoint){
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Поздравляю " + playername + ".</b><br><b>Вы сыграли в ничью!</b></div>";
    }else{
        document.getElementById('game_set').innerHTML += "<div id=\"text_box\"><b>Сочувствую " + playername + ".</b><br><b>Вы проиграли!</b></div>";
    }
    document.getElementById('game_set').innerHTML += "<div id=\"CenterButton\"><button id=\"StartButton\" onclick=\"style.display='none';PreStat()\">Начать заново</button></div>";
}

function bord_name() {
    bordpoint = "<div id=\"bord_point\"><b>Колличество очков игрока " + playername + " : ";
}

function Nv() {
    if (playerpoint == 21){
        CloseGame();
    }else if (playerpoint > 21){
        CloseGame();
    }
}

function Pre_machin_gene() {
    machinpoint = 0;
    machineRand = Math.floor(Math.random() * 8);
    if (machineRand == 0) {
        machinpoint = machinpoint + 11;
    } else if (machineRand == 1) {
        machinpoint = machinpoint + 10;
    } else if (machineRand == 2) {
        machinpoint = machinpoint + 9;
    } else if (machineRand == 3) {
        machinpoint = machinpoint + 8;
    } else if (machineRand == 4) {
        machinpoint = machinpoint + 7;
    } else if (machineRand == 5) {
        machinpoint = machinpoint + 6;
    } else if (machineRand == 6) {
        machinpoint = machinpoint + 4;
    } else if (machineRand == 7) {
        machinpoint = machinpoint + 3;
    } else if (machineRand == 8) {
        machinpoint = machinpoint + 2;
    }
    if (machinpoint < 21 && Math.floor(Math.random()) == 0) {
        machineRand = Math.floor(Math.random() * 8);
        if (machineRand == 0) {
            machinpoint = machinpoint + 11;
        } else if (machineRand == 1) {
            machinpoint = machinpoint + 10;
        } else if (machineRand == 2) {
            machinpoint = machinpoint + 9;
        } else if (machineRand == 3) {
            machinpoint = machinpoint + 8;
        } else if (machineRand == 4) {
            machinpoint = machinpoint + 7;
        } else if (machineRand == 5) {
            machinpoint = machinpoint + 6;
        } else if (machineRand == 6) {
            machinpoint = machinpoint + 4;
        } else if (machineRand == 7) {
            machinpoint = machinpoint + 3;
        } else if (machineRand == 8) {
            machinpoint = machinpoint + 2;
        }
    }
}

function StartToGame() {
    bord_name();
    document.getElementById('game_set').innerHTML = "";
    pointRand = Math.floor(Math.random()*8);
    randCard = Math.floor(Math.random()*3);
    point_random();
    bordpoint = bordpoint + playerpoint + "</b></div>";
    document.getElementById('game_set').innerHTML += bordpoint + "<br>";
    document.getElementById('game_set').innerHTML += printCard + "<br>";
    document.getElementById('game_set').innerHTML += "<div id=\"Me\"><button onclick=\"style.display='none';StartToGame()\">Взять</button><button onclick=\"style.display='none';CloseGame()\">Пас</button></div>";
    Nv();
}