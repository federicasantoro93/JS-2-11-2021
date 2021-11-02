//ARRAY

//L'Array è una collezione di dati ordinata
//La chiave è numerica
//Di default i dati vengono ordinati in ordine di arrivo
//L'indicizzazione parte sempre da 0
//Non ci sono restrizioni di tipi
//Tanti metodi nativi per la manipolazione
//Metodi distruttivi vs metodi immutabili

// [] rappresenta un array vuoto
// ogni valore è separato da una virgola ,

const names = ["mickey", "donald", "goofy"];
console.log(names); //Visualizzo l'intero arraY
console.log(names[0]); //Visualizzo il primo valore, ovvero l'elemento con indice 0

console.log("Array completo:", names); 
//Console Array completo: 
//(3) ['mickey', 'donald', 'goofy']
//0: "mickey"
//1: "donald"
//2: "goofy"
//length: 3

console.log("Numero di elementy nell'array:", names.length);   

//ARRAY MISTI
//Non è una buona pratica utilizzare gli array misti 

// Posso modificare un'elemento di un array
names[0] = "bugs bunny";
console.log(names);

//Posso aggiungere un'elemento di un'array
names[3] = "minnie";

// Posso creare una chiave n, ma tutte le chiavi prima saranno vuote (undefined)
// names[12] = 'spike';
// console.log(names);
// Console log: (13) ['bugs bunny', 'donald', 'goofy', 'minnie', empty × 8, 'spike']

//METODI DISTRUTTIVI O IMMUTABILI
//Push e pop per aggiungere e rimuovere all'inizio di un arrat
//Shift e unshift per aggiungere e rimuovere alla fine di un array
//L'array originale è stato modificato e i valori precendenti vengono persi

//METODI IMMUTABILI
//Il metodo concat restituisce un nuovo array che contiene un elemento in più, preservando l'array originale
//Per utilizzarlo dobbiamo passargli un array con gli elementi da aggiungere al primo array

names.concat(['rick']);
const newNames = names.concat(['rick']);
console.log(newNames); 

//CICLI
names.forEach((element, index) => {
    console.log(element, index);
    names[index] = element.toLocaleUpperCase();
});

//            callback
// Console log:
// bugs bunny 0
// donald 1
// goofy 2
// minnie 3

//forEach parte dal primo elemento arriva all'ultimo e ripete l'inerazione

console.log("Dopo il forEach:", names);
// Console:
// Dopo il forEach: 
// (4) ['BUGS BUNNY', 'DONALD', 'GOOFY', 'MINNIE']
// 0: "BUGS BUNNY"
// 1: "DONALD"
// 2: "GOOFY"
// 3: "MINNIE"
// length: 4
// [[Prototype]]: Array(0)

//OGGETTI
//Collezione di dati non ordinata
//Coppie chiave-valore
//Non cè indicizzazione
//Strutture annidate
//Attenzione alle <<mutazioni>>!
//La base della specifica JSON
//Gli oggetti sono anche l'entità strutturata più basilare di Javascript, di fatti Array e funzioni sono estenzioni degli oggetti


const movie = {
title: "Free Guy",
year: 2021, 
director: "Shaun Levy",
cast: ["Ryan Raynolds", "Jodie Comer"],
details: {
    cameos: true,
    isFunny: true,
    realistic: false,
},
genre: "comedy",
duraton: 115,
};

console.log(movie);
console.log('singola chiave:', movie.title);
// movie.director = "Shaun Levy"; //non è consigliabile
// console.log(movie);
// Console: {title: 'Free Guy', year: 2021, director: 'Shaun Levy'}

console.log("Singola chiave annidata:", movie.details.cameos);
console.log("Singolo array annidata:", movie.cast[0]);

//OBJECT vs JSON
//Il JSON è una variante dell'oggetto
//Javascript Object Notation
//Il Json ha un suo formato .json
//Il Json non vuole una virgola se dopo non c'è niente
//Il Json vuole i doppi apici nelle chiavi