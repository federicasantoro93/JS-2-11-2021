//ESERCIZIO 2 NOVEMBRE
// Obbligatorio: dato il seguente array di oggetti
// utilizzare il metodo .forEach() per creare un array o sovrascrivere lo stesso, che contenga solamente i campi name ed email, quest'ultimo dovrà contenere testi esclusivamente in minuscolo.

const rubrica = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me"
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz"
  }
]

const newRubrica = [];
rubrica.forEach((element) => {
    return newRubrica.push({ name: element.name.toLowerCase(), email: element.email.toLowerCase()});   
});

console.log(newRubrica);


//Console:
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {name: 'leanne graham', email: 'sincere@april.biz'}1: {name: 'ervin howell', email: 'shanna@melissa.tv'}2: {name: 'clementine bauch', email: 'nathan@yesenia.net'}3: {name: 'patricia lebsack', email: 'julianne.oconner@kory.org'}4: {name: 'chelsey dietrich', email: 'lucio_hettinger@annie.ca'}5: {name: 'mrs. dennis schulist', email: 'karley_dach@jasper.info'}6: {name: 'kurtis weissnat', email: 'telly.hoeger@billy.biz'}7: {name: 'nicholas runolfsdottir v', email: 'sherwood@rosamond.me'}8: {name: 'glenna reichert', email: 'chaim_mcdermott@dana.io'}9: {name: 'clementina dubuque', email: 'rey.padberg@karina.biz'}length: 10[[Prototype]]: Array(0)
