var letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

var words = [
    "Życie", "Kot", "Pies", "Kredka", "Masło", "Telefon", "Jabłko", "Pytanie", "Nuda", "Szkoła",
    "Kartkówka", "Słowo", "Sto", "Tramwaj", "Gra", "YouTube", "Kasa", "Miłość", "Facebook", "Spam",
    "Koszyk", "Paznokcie", "Bluzka", "Spodnie", "Kropka", "Koń", "Gruszka", "Chipsy", "RedBull",
    "Herbata", "Dziewczyna", "Polska", "Ziemia", "Oceny", "Szczoteczka", "Wanna", "Gąbka", "Serce",
    "Łyżka", "Frytki", "Cenzura", "Butelka", "Woda", "Spodnie", "Nogi", "Basen", "Pasta do Zębów",
    "Kleszcz", "Smutek", "Radość", "Rozum", "Emocje", "Młodzież", "Zeszyt", "Samochód", "Chomik",
    "Piasek", "Kamień", "Oczy", "Uszy", "Ręcznik", "Ręce", "Internet", "Śliwka", "Książka", "Ołówek",
    "Taniec", "Igła", "Ogień", "Ludzie", "Świat", "Włosy", "Mydło", "Klawiatura", "Komputer", "Ekran",
    "Monitor", "Ogon", "Łza", "Metka", "Sklep", "Praca", "Małpa", "Zoo", "Wojna", "Historia", "Pytanie",
    "Gra", "Ubrania", "Szafka", "Worek", "Kabel", "Ładowarka", "Zegar", "Czas", "Uśmiech", "Urodziny",
    "Kwiaty", "Przyroda", "Kartka", "Zajączek", "Wielkanoc", "Piątek", "Niedziela", "Plecak", "Globus",
    "Magia", "Przyjaźń", "Emocje"
];

var phrase = words[Math.floor(Math.random() * words.length)];
var hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
var phraseLength = hiddenPhrase.length;
var notMatched = 0;

window.onload = function () {


    var divContent = "";

    for (i = 0; i <= letters.length - 1; i++) {
        var element = "lit" + i;
        divContent = divContent + '<div class="letter" onclick="check(' + i + ')"  id="' + element + '">' + letters[i] + '</div>';
    }

    document.getElementById("alphabet").innerHTML = divContent;

    String.prototype.hitLetter = function (place, sign) {
        if (place > this.length - 1) return this.toString();
        else return this.substr(0, place) + sign + this.substr(place + 1);
    }

    function word() {
        let guess = document.getElementById("guess");
        guess.innerText = hiddenPhrase;
    }
    word()

    function buttonText(text) {
        let button = document.getElementById("newWord");
        button.innerHTML = text

    }

    buttonText("Reset Game")

    function resetWord() {
        let button = document.getElementById("newWord");
        button.innerHTML = "Reset Game";
        button.addEventListener("click", () => {
            notMatched = 0;
            gameOver = false;
            phrase = words[Math.floor(Math.random() * words.length)];
            hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
            document.getElementById("hanged-man").innerHTML = '<img src="" alt="" style="width: 350; height: 500;"></img>';
            word()
            resetLetters()
            buttonText("Reset Game")
        })

    }
    resetWord()

    function resetLetters() {
        var letters = document.getElementsByClassName("letter");
        for (i = 0; i <= letters.length; i++) {
            if (letters[i]) {
                elementId = letters[i].getAttribute("id");
                document.getElementById(elementId).setAttribute('onclick', 'check(' + i + ');');
                letters[i].style.removeProperty('background');
                letters[i].style.removeProperty('color');
                letters[i].style.removeProperty('border');
                letters[i].style.removeProperty('cursor');
            }

        }

    }
    resetWordFunction = resetWord
    buttonTextFunction = buttonText


}

function disableLetters() {
    var letters = document.getElementsByClassName("letter");
    for (i = 0; i <= letters.length; i++) {
        if (letters[i]) {
            elementId = letters[i].getAttribute("id");
            document.getElementById(elementId).setAttribute('onclick', ';');
        }

    }

}

function check(index) {

        var isHit;
        phrase = phrase.toUpperCase()
        for (i = 0; i <= phraseLength; i++) {
            if (phrase.charAt(i) === letters[index]) {
                hiddenPhrase = hiddenPhrase.hitLetter(i, letters[index]);
                isHit = true;
            }
        }


        if (isHit == true) {
            var element = "lit" + index;
            document.getElementById(element).style.background = '#003300';
            document.getElementById(element).style.color = '#00C000';
            document.getElementById(element).style.border = '3px solid #00C000';
            document.getElementById(element).style.cursor = 'default';
            setPhrase()
            var revealedPhrase = document.getElementById("guess").innerHTML;
            if (revealedPhrase === phrase) {
                disableLetters()
                resetWordFunction()
                var victory = "./images/victory.png";
                document.getElementById("hanged-man").innerHTML = '<img src="' + victory + '" alt="" style="width: 350; height: 500;"></img>';
                buttonTextFunction("New Game")
            }


        }

        else {
            var element = "lit" + index;
            document.getElementById(element).style.background = '#330000';
            document.getElementById(element).style.color = '#C00000';
            document.getElementById(element).style.border = '3px solid #C00000';
            document.getElementById(element).style.cursor = 'default';
            document.getElementById(element).setAttribute("onclick", ";");
            notMatched++;
            var gallows = "./images/gallows" + notMatched + ".png";
            document.getElementById("hanged-man").innerHTML = '<img src="' + gallows + '" alt="" style="width: 350; height: 500;"></img>';
            if (notMatched === 8) {
                document.getElementById('guess').innerHTML = phrase;
                disableLetters()
                buttonTextFunction("New Game")

            }
        


    }
}

function setPhrase() {
    document.getElementById('guess').innerHTML = hiddenPhrase;
}









