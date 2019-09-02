// Po 4 sekundach od uruchomienia: Node.js
// Po 1 sekundzie od uruchomienia: się
// Od razu po uruchomieniu wyświetl: Witam
// Po 6 sekundach od uruchomienia: i korzystam
// Po 5 sekundach od uruchomienia: w konsoli
// Po 7 sekundach od uruchomienia: z funkcji czasu!
// Po 2 sekundach od uruchomienia: z
// Po 3 sekundach od uruchomienia: programem

const text1 = setTimeout(() => {
    console.log('Node.js');
}, 4000);

const text2 = setTimeout(() => {
    console.log('się');
}, 1000);

const text3 = setTimeout(() => {
    console.log('Witam');
}, 0);

const text4 = setTimeout(() => {
    console.log('i korzystam');
}, 6000);

const text5 = setTimeout(() => {
    console.log('w konsoli');
}, 5000);

const text6 = setTimeout(() => {
    console.log('z funkcji czasu!');
}, 7000);

const text7 = setTimeout(() => {
    console.log('z');
}, 2000);

const text8 = setTimeout(() => {
    console.log('programem');
}, 3000);