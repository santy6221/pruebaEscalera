const stairs = [[3,11], [6,17], [9,18], [10,12]];
const snakes = [[14,4], [19,8], [22,20], [24,16]];
var position = 0;
var avance = 0;
var diceRoll = 0;

//esta funcion se encarga de ssacar un numero entre 1 y 6 para representar la tirada de un dado
function rollDice(){
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("El jugador saco un "+diceRoll);
    return diceRoll;
}

//Esta funcion compara la posiciion actual con el arreglo snakes para determinar si el jugadr debe bajar casillas
function checkForSnakes(pos){
    tmp = false
    var newPos = 0;
    snakes.forEach(element => {
        if (element[0]==pos) {
            console.log("El jugador cayo en una serpiente y retrocedera a la casilla "+element[1]);
            newPos = element[1];
            tmp = true;
        }
    });

    if(tmp == true){
        return newPos
    }else{
        return pos;
    }
}

//Esta funcion se encarga de comparar la posicion actual con el arrreglo de stairs para saber si el jugador debe subir de casilla
function checkForStairs(pos){
    tmp = false
    var newPos = 0;
    stairs.forEach(element => {
        if(element[0]==pos){
            console.log("El jugador cayo en una escalera y avazara a la casilla "+element[1]);
            newPos = element[1];
            tmp = true;
        }
    });

    if(tmp == true){
        return newPos
    }else{
        return pos;
    }
}

//esta funcion se encarga de simular una partida de escalera
function play(){
    

    while (position!=25) {
        console.log("El jugador esta actualmente en la posicion "+position);
        avance = rollDice();
        if(position + avance > 25){
            var tmp = position + avance;
            position = 25 - (tmp-25);
            console.log("El jugador se paso de las 25 casillas, por lo que tendra que retroceder "+(tmp-25));

        }else{
            position+=avance;
        }
        console.log("El jugador avanzo a la posicion "+position);
        position = checkForSnakes(position);
        position = checkForStairs(position);
        



    }

    console.log("El jugador gano la partida");
}

play();