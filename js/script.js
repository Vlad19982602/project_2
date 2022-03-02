//const obj = {
//    name: "John",
//    age: 25,
//    isMerries: false
//};
//console.log(obj.name);
//let array = ['p lum.png', 'orange.jpg', 'apple.bmp'];
//alert('Hello');
//const result = confirm("Are you here?"); //булевое значение
//const answer = prompt("Вам есть 18?", ""); //склеивание результата
//console.log(typeof(answer));
//const answer = +prompt("Вам есть 18?", ""); //объединение резулльтата
//console.log(typeof(answer + 5));
//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Сколько вам лет?', '');
//answers[2] = prompt('Где вы работаете?', '');
//console.log(typeof(answers));
////////////////////////////////////////////////////////////
/////////////////Интерполяция
//const category = 'toys';
//console.log('https://someurl.com/' + category); //Concat
//console.log(`https://someurl.com/${category}`);
//const user = 'Vlad';
//alert(`Привет, ${user}`); //Кавычки с помощью тильды
//////////////////////////////////////////////////////////////
//console.log(4 + "5"); //45
//console.log(4 + +"5"); //9
//let inc = 10,
//    decr = 10;
//inc++;
//decr--;
//console.log(inc);
//console.log(decr);
//console.log(5%2);
//console.log(2*4 = 8); //Присваивание
//console.log(2*4 != 8); //Не равенство
//console.log(2*4 == 8); //Сравнивание
//console.log(2*4 === 8); //Строгое сравнивание
//const isChecked = true,
//    isClose = true;
//console.log(isChecked && isClose);
//console.log(isChecked || isClose);



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
   actors: {},
   genres: {},
   privat: false
};
//const   a = prompt('Один из послежних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из послежних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//for (let i = 0; i < 2; i++) {
//   const   a = prompt('Один из послежних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');
//
//    personalMovieDB.movies[a] = b;
//}

for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из послежних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');

    } else {
        console.log('Error');
        i--;
    }

    personalMovieDB.movies[a] = b;
}


if (personalMovieDB.count < 10) {
    console.log("Просмотренодовольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка!");
}
        



console.log(personalMovieDB);

try {
    function showFirstMessage() {
        console.log("Hello world!");
    }

    showFirstMessage();
}
finally {
    console.log("brikma");
}




//if (4 == 4) {
//   console.log('Ok');
//}
//if (4 == 9) {
//    console.log('Ok');
//} else {
//    console.log('Error');
//}
//const num = 50;
//if (num < 49) {
//    console.log('Error');
//} else if(num > 100) {
//    console.log('Много');
//} else {
//    console.log('Ok!');
//}
//(num == 50) ? console.log('Ok!') : console.log('Error'); //Террарный опер
//switch (num) {
//   case 49:
//       console.log('Не верно');
//       break;
//   case 50:
//       console.log('Верно');
//       break;
//   default:
//       console.log('Уляля!');
//       break;
//}
//newFunction();
//function newFunction() {
//    let num = 50;
//    while (num < 55) {
//        console.log(num);
//        num++;
//    }
//}
//secondFunction();
//function secondFunction() {
//  let num = 50;
//  do {
//      console.log(num);
//      num++;
//   }
//   while (num < 55);
//}
//for (let i = 1; i < 24; i++) {
//    if (i === 6 && i === 14 && i === 22) {
//        //break;
//        continue;
//    }

 //   console.log(i);
//}

