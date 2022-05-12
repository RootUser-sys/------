/* const numberOfFilms = prompt('Count', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB)
document.write('Количество фильмов:' + numberOfFilms + 'Название последнего фильма:' + a + 'Оценка:' + b); */


let password = prompt('Введите пароль', '');
if (password == 333) {
    document.write('Вы вошли');
} else {
    document.write('Вы лошок');
}