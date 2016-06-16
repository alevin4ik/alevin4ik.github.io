/**
 * Created by alevin on 16.06.16.
 */
var Help_list, Help_str0, Help_str1, Help_str2,  Help_str3, Help_str4;
var playername, x;

Help_str0 = "<h2>Правила игры в 21 :<h2>";
Help_str1 = "<p>1. Задача набрать число очков приближенное к 21, но не привышающее 21.</p>";
Help_str2 = "<p>2. Играют одной колодой в 36 карт.</p>";
Help_str3 = "<p>3. При подсчете очков старшинство карт не стандартно.<br>(Валет - 2 очка; Дама - 3 очка; Король - 4 очка; Туз - 11 очков)</p>";
Help_str4 = "<p>4. Остальные каарты считаются по своему наминалу.</p>";

Help_list = Help_str0 + Help_str1 + Help_str2 + Help_str3 + Help_str4;

function HelpToGame() {
    document.getElementById('game_set').innerHTML = Help_list + "<div id=\"CenterButton\"><button id=\"StartButton\" onclick=\"style.display='none';StartToGame()\">Начать</button></div>";
}

function GiveName() {
    playername = document.getElementById("Name").value;
    alert("Поздравляю игрок " + playername + "!")
}

function StartToGame() {
    document.getElementById('game_set').innerHTML = "";
    document.getElementById('game_set').innerHTML += "<input id=\"Name\" type=\"text\" placeholder=\"Имя набирать тут\" id=\"name_tag\">";
    document.getElementById('game_set').innerHTML += "<button id=\"StartButton\" onclick=\"style.display='none';GiveName()\">Принять</button>";
}