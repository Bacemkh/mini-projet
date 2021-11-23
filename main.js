/*

mini-projet SpeedTyper un jeu de saisie rapide,
pour le module javasript avancé
realiser par :

Bacem Khaskhoussy

*/



window.addEventListener('load', init);
// les variables globales 
let time = 10;
let score =0;
let isPlay; 

//available levels
const WordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDispaly = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hello',
    'tek-up',
    "javascript",
    "mini-projet",
    "success",
    "determination",
    "high motivation"];


// initialiser le jeu
function init(){
    //ajouter des mots a partir de la liste
    showWord(words);
    WordInput.addEventListener('input',startMatch);
    // commencer a matcher les mot d'entrer

    // invoker countdawn chaque second
    setInterval(countdown,1000 );
    setInterval(checkGameSatuts, 60);

    //verifier l'état du jeu

}


//commencer a matcher les mots
function startMatch(){
    if(matchWords()){
            console.log('Match')
            isPlay = true;
            time = 8;    
            showWord(words);   
            WordInput.value="";
            score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
        //score=0 plus ou moins n'a pas de sense, le mettre 0 si est le cas
    }
    else{

        scoreDisplay.innerHTML= score;

    }
}
// matcher le mots actuel avec le mot d'entrer
function matchWords(){
    if(WordInput.value === currentWord.innerHTML){
        message.innerHTML= 'correct!!!';
        return true;
    }else {
        message.innerHTML ='';
        return false;
    }


}

//pick and show random word
function showWord(words){
    // generer liste random
     randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
    return currentWord;

}   

//le compteur
function countdown(){
    //assurer le temps n'est pas terminer
    if(time>0){
        time--;

     } else if(time ===0 ){
        //game is over
        isPlay = False; 
    }
    //afficher le temps
    timeDispaly.innerHTML = time;
    }


function  checkGameSatuts(){
    if (!isPlay && time===0 ){
        message.innerHTML = 'game over ';
        score = -1;
        

    }


}


