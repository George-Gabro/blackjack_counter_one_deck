let i = 52;
let score = 0;
let Heart_king = document.getElementById("Heart_king");
let Heart_ass = document.getElementById("Heart_ass");
let Heart_queen = document.getElementById("Heart_queen");
let Heart_j = document.getElementById("Heart_j");
let Heart_10 = document.getElementById("Heart_10");
let Heart_9 = document.getElementById("Heart_9");
let Heart_8 = document.getElementById("Heart_8")
let Heart_7 = document.getElementById("Heart_7");
let Heart_6 = document.getElementById("Heart_6");
let Heart_5 = document.getElementById("Heart_5");
let Heart_4 = document.getElementById("Heart_4");
let Heart_3 = document.getElementById("Heart_3");
let Heart_2 = document.getElementById("Heart_2");
let BlackHeart_ass = document.getElementById("BlackHeart_ass");
let BlackHeart_king = document.getElementById("BlackHeart_king");
let BlackHeart_queen = document.getElementById("BlackHeart_queen");
let BlackHeart_j = document.getElementById("BlackHeart_j");
let BlackHeart_10 = document.getElementById("BlackHeart_10");
let BlackHeart_9 = document.getElementById("BlackHeart_9");
let BlackHeart_8 = document.getElementById("BlackHeart_8");
let BlackHeart_7 = document.getElementById("BlackHeart_7");
let BlackHeart_6 = document.getElementById("BlackHeart_6");
let BlackHeart_5 = document.getElementById("BlackHeart_5");
let BlackHeart_4 = document.getElementById("BlackHeart_4");
let BlackHeart_3 = document.getElementById("BlackHeart_3");
let BlackHeart_2 = document.getElementById("BlackHeart_2");
let Diamond_ass = document.getElementById("Diamond_ass");
let Diamond_king = document.getElementById("Diamond_king");
let Diamond_queen = document.getElementById("Diamond_queen");
let Diamond_j = document.getElementById("Diamond_j");
let Diamond_10 = document.getElementById("Diamond_10");
let Diamond_9 = document.getElementById("Diamond_9");
let Diamond_8 = document.getElementById("Diamond_8");
let Diamond_7 = document.getElementById("Diamond_7");
let Diamond_6 = document.getElementById("Diamond_6");
let Diamond_5 = document.getElementById("Diamond_5");
let Diamond_4 = document.getElementById("Diamond_4");
let Diamond_3 = document.getElementById("Diamond_3");
let Diamond_2 = document.getElementById("Diamond_2");
let Clubs_ass = document.getElementById("Clubs_ass");
let Clubs_king = document.getElementById("Clubs_king");
let Clubs_queen = document.getElementById("Clubs_queen");
let Clubs_j = document.getElementById("Clubs_j");
let Clubs_10 = document.getElementById("Clubs_10");
let Clubs_9 = document.getElementById("Clubs_9");
let Clubs_8 = document.getElementById("Clubs_8");
let Clubs_7 = document.getElementById("Clubs_7");
let Clubs_6 = document.getElementById("Clubs_6");
let Clubs_5 = document.getElementById("Clubs_5");
let Clubs_4 = document.getElementById("Clubs_4");
let Clubs_3 = document.getElementById("Clubs_3");
let Clubs_2 = document.getElementById("Clubs_2");
let Deck = [Heart_2,Heart_3,Heart_4,Heart_5,Heart_6,Heart_7,Heart_8,Heart_9,Heart_10,Heart_king,Heart_ass,Heart_j,Heart_queen,
            BlackHeart_2,BlackHeart_3,BlackHeart_4,BlackHeart_5,BlackHeart_6,BlackHeart_7,BlackHeart_8,BlackHeart_9,BlackHeart_10,BlackHeart_king,BlackHeart_ass,BlackHeart_j,BlackHeart_queen,
            Diamond_2,Diamond_3,Diamond_4,Diamond_5,Diamond_6,Diamond_7,Diamond_8,Diamond_9,Diamond_10,Diamond_ass,Diamond_king,Diamond_j,Diamond_queen,
            Clubs_2,Clubs_3,Clubs_4,Clubs_5,Clubs_6,Clubs_7,Clubs_8,Clubs_9,Clubs_10,Clubs_ass,Clubs_queen,Clubs_king,Clubs_j]
Deck.sort(function(a, b){return 0.5 - Math.random()});
const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function next(){
    if(document.getElementById("button").innerHTML == "Start"){
        document.getElementById("button").innerHTML = "Next Card";
    }
    if(Deck[i-1] == null){
        //do nothing!
    }
    else{
    i--
    if(Deck[i].id == "Heart_2" || Deck[i].id == "Heart_3" || Deck[i].id == "Heart_4"
    || Deck[i].id == "Heart_5" || Deck[i].id == "Heart_6" 
    || Deck[i].id == "BlackHeart_2" || Deck[i].id == "BlackHeart_3"
    || Deck[i].id == "BlackHeart_4" || Deck[i].id == "BlackHeart_5" || Deck[i].id == "BlackHeart_6"
    || Deck[i].id == "Diamond_2" || Deck[i].id == "Diamond_3" || Deck[i].id == "Diamond_4"
    || Deck[i].id == "Diamond_5" || Deck[i].id == "Diamond_6" || Deck[i].id == "Clubs_2"
    || Deck[i].id == "Clubs_3" || Deck[i].id == "Clubs_4" || Deck[i].id == "Clubs_5"
    || Deck[i].id == "Clubs_6"){
    score = score + 1;
    document.getElementById("score").innerHTML = `The current score is: ${score}`;
    }
    if(Deck[i].id == "Heart_7" || Deck[i].id == "Heart_8" || Deck[i].id == "Heart_9" 
    ||Deck[i].id == "BlackHeart_7" || Deck[i].id == "BlackHeart_8" || Deck[i].id == "BlackHeart_9"
    || Deck[i].id == "Diamond_7" || Deck[i].id == "Diamond_8" || Deck[i].id == "Diamond_9"
    || Deck[i].id == "Clubs_7" || Deck[i].id == "Clubs_8" || Deck[i].id == "Clubs_9"){
        score = score;
        document.getElementById("score").innerHTML = `The current score is: ${score}`;
    }
    if(Deck[i].id == "Heart_ass" || Deck[i].id == "Heart_king" || Deck[i].id == "Heart_queen"
    || Deck[i].id == "Heart_j" || Deck[i].id == "Heart_10" 
    || Deck[i].id == "BlackHeart_ass" || Deck[i].id == "BlackHeart_king"
    || Deck[i].id == "BlackHeart_queen" || Deck[i].id == "BlackHeart_j" || Deck[i].id == "BlackHeart_10"
    || Deck[i].id == "Diamond_ass" || Deck[i].id == "Diamond_king" || Deck[i].id == "Diamond_queen"
    || Deck[i].id == "Diamond_j" || Deck[i].id == "Diamond_10" || Deck[i].id == "Clubs_ass"
    || Deck[i].id == "Clubs_king" || Deck[i].id == "Clubs_queen" || Deck[i].id == "Clubs_j"
    || Deck[i].id == "Clubs_10"){
        score = score - 1;
        document.getElementById("score").innerHTML = `The current score is: ${score}`;
    }
    Deck[i].classList.add("highlight");
    Deck[i].style.display = "block";
    Deck.splice(i,1);
    if(Deck.length == "0"){
        document.getElementById("button").innerHTML = "(all cards are showed)"
    }
    }
}