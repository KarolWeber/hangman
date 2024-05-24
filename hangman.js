var letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

var words = [
    { "phrase": "Życie", "hint": "Droga doświadczeń i przygód." },
    { "phrase": "Kot", "hint": "Często mruczy i lubi się drapać." },
    { "phrase": "Pies", "hint": "Wierny przyjaciel człowieka." },
    { "phrase": "Kredka", "hint": "Służy do rysowania i kolorowania." },
    { "phrase": "Masło", "hint": "Składnik wielu potraw i smarowidło na chleb." },
    { "phrase": "Telefon", "hint": "Urządzenie do komunikacji na odległość." },
    { "phrase": "Jabłko", "hint": "Owoc często kojarzony z lekcją historii." },
    { "phrase": "Pytanie", "hint": "Coś, co stawiamy, gdy czegoś nie wiemy." },
    { "phrase": "Nuda", "hint": "Stan braku zajęcia." },
    { "phrase": "Szkoła", "hint": "Miejsce, gdzie zdobywa się wiedzę." },
    { "phrase": "Kartkówka", "hint": "Krótka praca domowa lub test." },
    { "phrase": "Słowo", "hint": "Podstawowy element mowy." },
    { "phrase": "Sto", "hint": "Mebel do zasiadania i spożywania posiłków." },
    { "phrase": "Tramwaj", "hint": "Środek transportu miejskiego." },
    { "phrase": "Gra", "hint": "Forma rozrywki, czasem z zasadami." },
    { "phrase": "YouTube", "hint": "Popularna platforma do udostępniania i oglądania filmów." },
    { "phrase": "Kasa", "hint": "Miejsce, gdzie dokonuje się płatności." },
    { "phrase": "Miłość", "hint": "Silne uczucie do kogoś lub czegoś." },
    { "phrase": "Facebook", "hint": "Społecznościowy portal internetowy." },
    { "phrase": "Spam", "hint": "Niechciana poczta elektronicza." },
    { "phrase": "Koszyk", "hint": "Pojemnik na zakupy." },
    { "phrase": "Paznokcie", "hint": "Część ciała, którą maluje się lakierem." },
    { "phrase": "Bluzka", "hint": "Element damskiej garderoby." },
    { "phrase": "Spodnie", "hint": "Ubranie na dolną część ciała." },
    { "phrase": "Kropka", "hint": "Mały symbol kończący zdanie." },
    { "phrase": "Koń", "hint": "Zwierzę hodowane przez człowieka." },
    { "phrase": "Gruszka", "hint": "Owoc o charakterystycznym kształcie." },
    { "phrase": "Chipsy", "hint": "Przekąska w formie cienkich plastrów." },
    { "phrase": "RedBull", "hint": "Popularny napój energetyczny." },
    { "phrase": "Herbata", "hint": "Napój parzony z liści." },
    { "phrase": "Dziewczyna", "hint": "Osoba płci żeńskiej." },
    { "phrase": "Polska", "hint": "Kraj w Europie Środkowej." },
    { "phrase": "Ziemia", "hint": "Planeta, na której żyjemy." },
    { "phrase": "Oceny", "hint": "Forma oceniania osiągnięć uczniów." },
    { "phrase": "Szczoteczka", "hint": "Narzędzie do czyszczenia zębów." },
    { "phrase": "Wanna", "hint": "Pojemnik na wodę do kąpieli." },
    { "phrase": "Gąbka", "hint": "Porażająco miękka i chłonna." },
    { "phrase": "Serce", "hint": "Symbol miłości i życia." },
    { "phrase": "Łyżka", "hint": "Narzędzie do jedzenia lub miarkowania." },
    { "phrase": "Frytki", "hint": "Rodzaj przekąski z ziemniaków." },
    { "phrase": "Cenzura", "hint": "Kontrola treści lub wyrażeń." },
    { "phrase": "Butelka", "hint": "Pojemnik na płyny." },
    { "phrase": "Woda", "hint": "Podstawa życia." },
    { "phrase": "Spodnie", "hint": "Ubranie na dolną część ciała." },
    { "phrase": "Nogi", "hint": "Część ciała używana do chodzenia." },
    { "phrase": "Basen", "hint": "Miejsce do pływania." },
    { "phrase": "Pasta", "hint": "Masa do smarowania lub gotowania." },
    { "phrase": "Kleszcz", "hint": "Mały owad pasożytniczy." },
    { "phrase": "Smutek", "hint": "Przeciwność radości." },
    { "phrase": "Radość", "hint": "Stan szczęścia i zadowolenia." },
    { "phrase": "Rozum", "hint": "Zdolność logicznego myślenia." },
    { "phrase": "Emocje", "hint": "Intensywne uczucia." },
    { "phrase": "Młodzież", "hint": "Okres życia między dzieciństwem a dorosłością." },
    { "phrase": "Zeszyt", "hint": "Książka do zapisywania notatek." },
    { "phrase": "Samochód", "hint": "Pojazd napędzany silnikiem." },
    { "phrase": "Chomik", "hint": "Małe zwierzę domowe." },
    { "phrase": "Piasek", "hint": "Drobne ziarna, często na plaży." },
    { "phrase": "Kamień", "hint": "Twardy, nieorganiczny materiał." },
    { "phrase": "Oczy", "hint": "Narząd wzroku." },
    { "phrase": "Uszy", "hint": "Narząd słuchu." },
    { "phrase": "Ręcznik", "hint": "Płócienny materiał do osuszania ciała." },
    { "phrase": "Ręce", "hint": "Część ciała używana do wykonywania czynności." },
    { "phrase": "Internet", "hint": "Globalna sieć komputerowa." },
    { "phrase": "Śliwka", "hint": "Owoc często używany do wytwarzania dżemów." },
    { "phrase": "Książka", "hint": "Zbiór zapisanych słów." },
    { "phrase": "Ołówek", "hint": "Narzędzie do pisania lub rysowania." },
    { "phrase": "Taniec", "hint": "Forma ekspresji poprzez ruch." },
    { "phrase": "Igła", "hint": "Narzędzie do szycia lub nakłuwania." },
    { "phrase": "Ogień", "hint": "Płomień wytworzony przez spalanie." },
    { "phrase": "Ludzie", "hint": "Istoty ludzkie jako zbiorowość." },
    { "phrase": "Świat", "hint": "Planeta Ziemia i jej mieszkańcy." },
    { "phrase": "Włosy", "hint": "Włókna rosnące na skórze głowy." },
    { "phrase": "Mydło", "hint": "Środek czyszczący w formie stałej." },
    { "phrase": "Klawiatura", "hint": "Urządzenie do wprowadzania danych." },
    { "phrase": "Komputer", "hint": "Elektroniczne urządzenie przetwarzające dane." },
    { "phrase": "Ekran", "hint": "Powierzchnia wyświetlająca obraz." },
    { "phrase": "Monitor", "hint": "Urządzenie wyświetlające obraz z komputera." },
    { "phrase": "Ogon", "hint": "Część ciała niektórych zwierząt." },
    { "phrase": "Łza", "hint": "Wydzielina oka." },
    { "phrase": "Metka", "hint": "Etykieta informacyjna." },
    { "phrase": "Sklep", "hint": "Miejsce, gdzie dokonuje się zakupów." },
    { "phrase": "Praca", "hint": "Wykonywanie czynności w zamian za wynagrodzenie." },
    { "phrase": "Małpa", "hint": "Zwierzę z rodziny naczelnych." },
    { "phrase": "Zoo", "hint": "Miejsce, gdzie można oglądać zwierzęta." },
    { "phrase": "Wojna", "hint": "Konflikt zbrojny między narodami lub grupami." },
    { "phrase": "Historia", "hint": "Opowieść o przeszłości." },
    { "phrase": "Pytanie", "hint": "Coś, co stawiamy, gdy czegoś nie wiemy." },
    { "phrase": "Gra", "hint": "Forma rozrywki, czasem z zasadami." },
    { "phrase": "Ubrania", "hint": "Elementy garderoby." },
    { "phrase": "Szafka", "hint": "Mebel do przechowywania przedmiotów." },
    { "phrase": "Worek", "hint": "Pojemnik wykonany z materiału." },
    { "phrase": "Kabel", "hint": "Przewód do przesyłania sygnału lub energii." },
    { "phrase": "Ładowarka", "hint": "Urządzenie do ładowania akumulatorów." },
    { "phrase": "Zegar", "hint": "Urządzenie do mierzenia czasu." },
    { "phrase": "Czas", "hint": "Ciągła sekwencja zdarzeń." },
    { "phrase": "Uśmiech", "hint": "Wykrzywienie ust w wyrazie radości." },
    { "phrase": "Urodziny", "hint": "Rocznicowe święto narodzin." },
    { "phrase": "Kwiaty", "hint": "Organizmy roślinne o estetycznych kwiatach." },
    { "phrase": "Przyroda", "hint": "Środowisko naturalne obejmujące wszystkie istoty żywe." },
    { "phrase": "Kartka", "hint": "Arkusz papieru." },
    { "phrase": "Zajączek", "hint": "Małe zwierzę króliczka." },
    { "phrase": "Wielkanoc", "hint": "Chrześcijańskie święto upamiętniające zmartwychwstanie Jezusa Chrystusa." },
    { "phrase": "Piątek", "hint": "Jeden z dni tygodnia." },
    { "phrase": "Niedziela", "hint": "Jeden z dni tygodnia, często kojarzony z odpoczynkiem." },
    { "phrase": "Plecak", "hint": "Torba do noszenia rzeczy na plecach." },
    { "phrase": "Globus", "hint": "Trójwymiarowe odwzorowanie Ziemi." },
    { "phrase": "Magia", "hint": "Nadprzyrodzone działanie." },
    { "phrase": "Przyjaźń", "hint": "Silne uczucie łączące przyjaciół." },
    { "phrase": "Emocje", "hint": "Intensywne uczucia." }
];

var randomPhrase = words[Math.floor(Math.random() * words.length)];
var phrase = randomPhrase['phrase'];
var hint = randomPhrase['hint']
var hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
var phraseLength = hiddenPhrase.length;
var notMatched = 0;
var points = 0
var freeHint = true

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
        button.innerHTML = text;

    }

    buttonText("Reset Game")

    function hintClick() {
        let hintButton = document.getElementById("hint");
        hintButton.addEventListener("click", () => {
            if (freeHint === true) {
                alert("First hint is free!\n" + hint)
                freeHint = false
            }
            else {
                if (points >= 30) {
                    newPoints = points - 30
                    points = newPoints
                    alert(hint)
                    document.getElementById("points").innerHTML = newPoints
                }
                else {
                    alert("You need 30 points")
                }
            }
            
            
        });
    }

    hintClick()



    function resetWord() {
        let button = document.getElementById("newWord");
        button.innerHTML = "Reset Game";
        button.addEventListener("click", () => {
            notMatched = 0;
            gameOver = false;
            RandonPhrase = words[Math.floor(Math.random() * words.length)];
            phrase = RandonPhrase["phrase"];
            hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
            hint = RandonPhrase["hint"];
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

function addPoints(index) {
    var newPoints = points + index 
    document.getElementById("points").innerHTML = newPoints;
    points = newPoints

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
            addPoints(20)
        }
        addPoints(10)
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
            document.getElementById("points").innerHTML = 0
            points = 0
            freeHint = true
        }



    }
}

function setPhrase() {
    document.getElementById('guess').innerHTML = hiddenPhrase;
}









