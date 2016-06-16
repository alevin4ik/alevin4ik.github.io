/**
 * Created by alevin on 16.06.16.
 */
var text1;
text1 = "<p>Дамка</p>";
document.getElementById('game_set').innerHTML += text1 + "\n";

function StartGame() {
    document.getElementById('game_set').innerHTML += text1 + "\n"+ "<button onclick=\"style.display='none';StartGame()\">Нажми</button>";
}

function Stop(text) {
    location = 'javascript:document.write("new data");document.close()'
}