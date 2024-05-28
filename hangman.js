var letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

var words = [
    { "phrase": "Życie", "hint": "Droga doświadczeń i przygód.", "category": "Abstrakcyjne" },
    { "phrase": "Kot", "hint": "Często mruczy i lubi się drapać.", "category": "Zwierzęta" },
    { "phrase": "Pies", "hint": "Wierny przyjaciel człowieka.", "category": "Zwierzęta" },
    { "phrase": "Kredka", "hint": "Służy do rysowania i kolorowania.", "category": "Przedmioty" },
    { "phrase": "Masło", "hint": "Składnik wielu potraw i smarowidło na chleb.", "category": "Jedzenie" },
    { "phrase": "Telefon", "hint": "Urządzenie do komunikacji na odległość.", "category": "Technologia" },
    { "phrase": "Jabłko", "hint": "Owoc często kojarzony z lekcją historii.", "category": "Jedzenie" },
    { "phrase": "Pytanie", "hint": "Coś, co stawiamy, gdy czegoś nie wiemy.", "category": "Abstrakcyjne" },
    { "phrase": "Nuda", "hint": "Stan braku zajęcia.", "category": "Abstrakcyjne" },
    { "phrase": "Szkoła", "hint": "Miejsce, gdzie zdobywa się wiedzę.", "category": "Miejsca" },
    { "phrase": "Kartkówka", "hint": "Krótka praca domowa lub test.", "category": "Edukacja" },
    { "phrase": "Słowo", "hint": "Podstawowy element mowy.", "category": "Język" },
    { "phrase": "Stół", "hint": "Mebel do zasiadania i spożywania posiłków.", "category": "Meble" },
    { "phrase": "Tramwaj", "hint": "Środek transportu miejskiego.", "category": "Transport" },
    { "phrase": "Gra", "hint": "Forma rozrywki, czasem z zasadami.", "category": "Rozrywka" },
    { "phrase": "YouTube", "hint": "Popularna platforma do udostępniania i oglądania filmów.", "category": "Technologia" },
    { "phrase": "Kasa", "hint": "Miejsce, gdzie dokonuje się płatności.", "category": "Miejsca" },
    { "phrase": "Miłość", "hint": "Silne uczucie do kogoś lub czegoś.", "category": "Abstrakcyjne" },
    { "phrase": "Facebook", "hint": "Społecznościowy portal internetowy.", "category": "Technologia" },
    { "phrase": "Spam", "hint": "Niechciana poczta elektroniczna.", "category": "Technologia" },
    { "phrase": "Koszyk", "hint": "Pojemnik na zakupy.", "category": "Przedmioty" },
    { "phrase": "Paznokcie", "hint": "Część ciała, którą maluje się lakierem.", "category": "Ciało" },
    { "phrase": "Bluzka", "hint": "Element damskiej garderoby.", "category": "Ubrania" },
    { "phrase": "Spodnie", "hint": "Ubranie na dolną część ciała.", "category": "Ubrania" },
    { "phrase": "Kropka", "hint": "Mały symbol kończący zdanie.", "category": "Język" },
    { "phrase": "Koń", "hint": "Zwierzę hodowane przez człowieka.", "category": "Zwierzęta" },
    { "phrase": "Gruszka", "hint": "Owoc o charakterystycznym kształcie.", "category": "Jedzenie" },
    { "phrase": "Chipsy", "hint": "Przekąska w formie cienkich plastrów.", "category": "Jedzenie" },
    { "phrase": "RedBull", "hint": "Popularny napój energetyczny.", "category": "Jedzenie" },
    { "phrase": "Herbata", "hint": "Napój parzony z liści.", "category": "Jedzenie" },
    { "phrase": "Dziewczyna", "hint": "Osoba płci żeńskiej.", "category": "Ludzie" },
    { "phrase": "Polska", "hint": "Kraj w Europie Środkowej.", "category": "Miejsca" },
    { "phrase": "Ziemia", "hint": "Planeta, na której żyjemy.", "category": "Przyroda" },
    { "phrase": "Oceny", "hint": "Forma oceniania osiągnięć uczniów.", "category": "Edukacja" },
    { "phrase": "Szczoteczka", "hint": "Narzędzie do czyszczenia zębów.", "category": "Przedmioty" },
    { "phrase": "Wanna", "hint": "Pojemnik na wodę do kąpieli.", "category": "Meble" },
    { "phrase": "Gąbka", "hint": "Porażająco miękka i chłonna.", "category": "Przedmioty" },
    { "phrase": "Serce", "hint": "Symbol miłości i życia.", "category": "Abstrakcyjne" },
    { "phrase": "Łyżka", "hint": "Narzędzie do jedzenia lub miarkowania.", "category": "Przedmioty" },
    { "phrase": "Frytki", "hint": "Rodzaj przekąski z ziemniaków.", "category": "Jedzenie" },
    { "phrase": "Cenzura", "hint": "Kontrola treści lub wyrażeń.", "category": "Abstrakcyjne" },
    { "phrase": "Butelka", "hint": "Pojemnik na płyny.", "category": "Przedmioty" },
    { "phrase": "Woda", "hint": "Podstawa życia.", "category": "Przyroda" },
    { "phrase": "Spodnie", "hint": "Ubranie na dolną część ciała.", "category": "Ubrania" },
    { "phrase": "Nogi", "hint": "Część ciała używana do chodzenia.", "category": "Ciało" },
    { "phrase": "Basen", "hint": "Miejsce do pływania.", "category": "Miejsca" },
    { "phrase": "Pasta", "hint": "Masa do smarowania lub gotowania.", "category": "Jedzenie" },
    { "phrase": "Kleszcz", "hint": "Mały owad pasożytniczy.", "category": "Zwierzęta" },
    { "phrase": "Smutek", "hint": "Przeciwność radości.", "category": "Abstrakcyjne" },
    { "phrase": "Radość", "hint": "Stan szczęścia i zadowolenia.", "category": "Abstrakcyjne" },
    { "phrase": "Rozum", "hint": "Zdolność logicznego myślenia.", "category": "Abstrakcyjne" },
    { "phrase": "Emocje", "hint": "Intensywne uczucia.", "category": "Abstrakcyjne" },
    { "phrase": "Młodzież", "hint": "Okres życia między dzieciństwem a dorosłością.", "category": "Ludzie" },
    { "phrase": "Zeszyt", "hint": "Książka do zapisywania notatek.", "category": "Przedmioty" },
    { "phrase": "Samochód", "hint": "Pojazd napędzany silnikiem.", "category": "Transport" },
    { "phrase": "Chomik", "hint": "Małe zwierzę domowe.", "category": "Zwierzęta" },
    { "phrase": "Piasek", "hint": "Drobne ziarna, często na plaży.", "category": "Przyroda" },
    { "phrase": "Kamień", "hint": "Twardy, nieorganiczny materiał.", "category": "Przyroda" },
    { "phrase": "Oczy", "hint": "Narząd wzroku.", "category": "Ciało" },
    { "phrase": "Uszy", "hint": "Narząd słuchu.", "category": "Ciało" },
    { "phrase": "Uszy", "hint": "Narząd słuchu.", "category": "Ciało" },
    { "phrase": "Ręcznik", "hint": "Płócienny materiał do osuszania ciała.", "category": "Przedmioty" },
    { "phrase": "Ręce", "hint": "Część ciała używana do wykonywania czynności.", "category": "Ciało" },
    { "phrase": "Internet", "hint": "Globalna sieć komputerowa.", "category": "Technologia" },
    { "phrase": "Śliwka", "hint": "Owoc często używany do wytwarzania dżemów.", "category": "Jedzenie" },
    { "phrase": "Książka", "hint": "Zbiór zapisanych słów.", "category": "Przedmioty" },
    { "phrase": "Ołówek", "hint": "Narzędzie do pisania lub rysowania.", "category": "Przedmioty" },
    { "phrase": "Taniec", "hint": "Forma ekspresji poprzez ruch.", "category": "Rozrywka" },
    { "phrase": "Igła", "hint": "Narzędzie do szycia lub nakłuwania.", "category": "Przedmioty" },
    { "phrase": "Ogień", "hint": "Płomień wytworzony przez spalanie.", "category": "Przyroda" },
    { "phrase": "Ludzie", "hint": "Istoty ludzkie jako zbiorowość.", "category": "Ludzie" },
    { "phrase": "Świat", "hint": "Planeta Ziemia i jej mieszkańcy.", "category": "Przyroda" },
    { "phrase": "Włosy", "hint": "Włókna rosnące na skórze głowy.", "category": "Ciało" },
    { "phrase": "Mydło", "hint": "Środek czyszczący w formie stałej.", "category": "Przedmioty" },
    { "phrase": "Klawiatura", "hint": "Urządzenie do wprowadzania danych.", "category": "Technologia" },
    { "phrase": "Komputer", "hint": "Elektroniczne urządzenie przetwarzające dane.", "category": "Technologia" },
    { "phrase": "Ekran", "hint": "Powierzchnia wyświetlająca obraz.", "category": "Technologia" },
    { "phrase": "Monitor", "hint": "Urządzenie wyświetlające obraz z komputera.", "category": "Technologia" },
    { "phrase": "Ogon", "hint": "Część ciała niektórych zwierząt.", "category": "Ciało" },
    { "phrase": "Łza", "hint": "Wydzielina oka.", "category": "Ciało" },
    { "phrase": "Metka", "hint": "Etykieta informacyjna.", "category": "Przedmioty" },
    { "phrase": "Sklep", "hint": "Miejsce, gdzie dokonuje się zakupów.", "category": "Miejsca" },
    { "phrase": "Praca", "hint": "Wykonywanie czynności w zamian za wynagrodzenie.", "category": "Abstrakcyjne" },
    { "phrase": "Małpa", "hint": "Zwierzę z rodziny naczelnych.", "category": "Zwierzęta" },
    { "phrase": "Zoo", "hint": "Miejsce, gdzie można oglądać zwierzęta.", "category": "Miejsca" },
    { "phrase": "Wojna", "hint": "Konflikt zbrojny między narodami lub grupami.", "category": "Abstrakcyjne" },
    { "phrase": "Historia", "hint": "Opowieść o przeszłości.", "category": "Abstrakcyjne" },
    { "phrase": "Pytanie", "hint": "Coś, co stawiamy, gdy czegoś nie wiemy.", "category": "Abstrakcyjne" },
    { "phrase": "Gra", "hint": "Forma rozrywki, czasem z zasadami.", "category": "Rozrywka" },
    { "phrase": "Ubrania", "hint": "Elementy garderoby.", "category": "Ubrania" },
    { "phrase": "Szafka", "hint": "Mebel do przechowywania przedmiotów.", "category": "Meble" },
    { "phrase": "Worek", "hint": "Pojemnik wykonany z materiału.", "category": "Przedmioty" },
    { "phrase": "Kabel", "hint": "Przewód do przesyłania sygnału lub energii.", "category": "Technologia" },
    { "phrase": "Ładowarka", "hint": "Urządzenie do ładowania akumulatorów.", "category": "Technologia" },
    { "phrase": "Zegar", "hint": "Urządzenie do mierzenia czasu.", "category": "Przedmioty" },
    { "phrase": "Czas", "hint": "Ciągła sekwencja zdarzeń.", "category": "Abstrakcyjne" },
    { "phrase": "Uśmiech", "hint": "Wykrzywienie ust w wyrazie radości.", "category": "Abstrakcyjne" },
    { "phrase": "Urodziny", "hint": "Rocznicowe święto narodzin.", "category": "Abstrakcyjne" },
    { "phrase": "Kwiaty", "hint": "Organizmy roślinne o estetycznych kwiatach.", "category": "Przyroda" },
    { "phrase": "Przyroda", "hint": "Środowisko naturalne obejmujące wszystkie istoty żywe.", "category": "Przyroda" },
    { "phrase": "Kartka", "hint": "Arkusz papieru.", "category": "Przedmioty" },
    { "phrase": "Zajączek", "hint": "Małe zwierzę króliczka.", "category": "Zwierzęta" },
    { "phrase": "Wielkanoc", "hint": "Chrześcijańskie święto upamiętniające zmartwychwstanie Jezusa Chrystusa.", "category": "Święta" },
    { "phrase": "Piątek", "hint": "Jeden z dni tygodnia.", "category": "Czas" },
    { "phrase": "Niedziela", "hint": "Jeden z dni tygodnia, często kojarzony z odpoczynkiem.", "category": "Czas" },
    { "phrase": "Plecak", "hint": "Torba do noszenia rzeczy na plecach.", "category": "Przedmioty" },
    { "phrase": "Globus", "hint": "Trójwymiarowe odwzorowanie Ziemi.", "category": "Przedmioty" },
    { "phrase": "Magia", "hint": "Nadprzyrodzone działanie.", "category": "Abstrakcyjne" },
    { "phrase": "Przyjaźń", "hint": "Silne uczucie łączące przyjaciół.", "category": "Abstrakcyjne" },
    { "phrase": "Emocje", "hint": "Intensywne uczucia.", "category": "Abstrakcyjne" }
];

randomElement = Math.floor(Math.random() * words.length)
var randomPhrase = words[randomElement];
var phrase = randomPhrase['phrase'];
var hint = randomPhrase['hint'];
var category = randomPhrase['category'];
var hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
var phraseLength = hiddenPhrase.length;
words.splice(randomElement, 1);
var notMatched = 0;
var points = 0;
var freeHint = true;
var hitnIsActive = false;
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

    function setCategory () {
        let setCategory = document.getElementById("category")
        setCategory.innerHTML = category
    }

    setCategory()

    function buttonText(text) {
        let button = document.getElementById("newWord");
        button.innerHTML = text;

    }

    buttonText("Reset Game")

    function hintClick() {
        let hintButton = document.getElementById("hint");
        hintButton.addEventListener("click", () => {
            if (freeHint === true) {
                alert("First hint is free!\n" + hint);
                freeHint = false;
                hitnIsActive = true;
            }
            else {
                if (hitnIsActive === true) {
                    alert(hint);
                }
                else {
                    if (points >= 30) {
                        newPoints = points - 30;
                        points = newPoints;
                        alert(hint);
                        document.getElementById("points").innerHTML = newPoints;
                        hitnIsActive = true;
                    }
                    else {
                        alert("You need 30 points")
                    }
                }

            }


        });
    }

    hintClick()



    function resetWord() {
        let button = document.getElementById("newWord");
        button.innerHTML = "Reset Game";
        button.addEventListener("click", () => {
            debugger;
            notMatched = 0;
            gameOver = false;
            newElement = Math.floor(Math.random() * words.length)
            RandonPhrase = words[newElement];
            phrase = RandonPhrase["phrase"];
            hiddenPhrase = phrase.replace(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '_');
            category = RandonPhrase["category"]
            hint = RandonPhrase["hint"];
            words.splice(newElement, 1);
            document.getElementById("hanged-man").innerHTML = '<img src="" alt="" style="width: 350; height: 500;"></img>';
            hitnIsActive = false
            word()
            setCategory()
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
        document.getElementById(element).style.border = '1px solid #00C000';
        document.getElementById(element).style.cursor = 'default';
        document.getElementById(element).style.pointerEvents  = 'none';
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
        document.getElementById(element).style.border = '1px solid #C00000';
        document.getElementById(element).style.cursor = 'default';
        document.getElementById(element).setAttribute("onclick", ";");
        document.getElementById(element).style.pointerEvents  = 'none';
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









