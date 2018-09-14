import cookie from 'react-cookies';

const polish = {
    addNewItem: 'Dodaj nowy przedmiot',
    add: 'DODAJ',
    changeYourPassword: 'ZMIEŃ HASLO',
    submit: 'WYŚLIJ',
    welcome: 'Witaj!',
    homeSubtitle: 'Kup wszystko czego chcesz.',
    currency: 'PLN',
    amount: 'Ilość',
    buy: 'KUP',
    loginPageTitle: 'STRONA LOGOWANIA',
    loginPageFailure: 'Błąd danych logowania.',
    loginPageUsername: 'login',
    loginPagePassword: 'hasło',
    noResultPageText: "NIC TU NIE MA",
    delete: 'USUŃ',
    noItemText: 'Nie ma takiego przedmiotu!',
    itemDeletedMessage: 'Przedmiot został usuniety!',
    searchNoResult: 'BRAK WYNIKÓW!',
    searchbarPlaceholder: 'Szukaj..',
    signUpTitle: 'REJESTRACJA',
    passwordMistake: 'HASŁA SIĘ NIE ZGADZAJĄ',
    usernameTaken: 'NAZWA UZYTKOWNIKA ZAJĘTA',
    success: 'SUKCES',
    userlistNoAuth: 'NIE MASZ UPRAWNIEŃ ADMINISTRATORSKICH',
    loginCaps: 'LOGIN',
    id: 'ID',
    userLabel: 'Zalogowany jako:',
    home: "Strona główna",
    tvs: "Telewizory",
    phones: "Telefony",
    watches: "Zegarki",
    addNew: "Dodaj nowy",
    login: "Zaloguj się",
    signUp: "Zarejestruj się",
    userList: "Użytkownicy",
    profile: 'Profil',
    language: 'Język',
    logOut: 'Wyloguj',
    logs: 'Logi'
}


let label;
const english = {
    addNewItem: 'Add new item',
    add: 'ADD',
    changeYourPassword: 'CHANGE YOUR PASSWORD',
    submit: 'SUBMIT',
    welcome: 'Welcome to our shop!',
    homeSubtitle: 'Get all the stuff you need.',
    currency: 'PLN',
    amount: 'Amount',
    buy: 'BUY',
    loginPageTitle: 'LOGIN PAGE',
    loginPageFailure: 'Login input failure.',
    loginPageUsername: 'username',
    loginPagePassword: 'password',
    noResultPageText: "NOTHING HERE",
    delete: 'DELETE',
    noItemText: 'No such item.',
    itemDeletedMessage: 'Item just got deleted!',
    searchNoResult: 'NO RESULT FOR THIS!',
    searchbarPlaceholder: 'Search..',
    signUpTitle: 'REGISTER PAGE',
    passwordMistake: 'PASSWORDS DOES NOT MATCH',
    usernameTaken: 'USERNAME ALREADY TAKEN',
    success: 'SUCCESS',
    userlistNoAuth: 'YOU ARE NOT ADMIN!',
    loginCaps: 'LOGIN',
    id: 'ID',
    userLabel: 'Logged as:',
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches",
    addNew: "Add new",
    login: "Login",
    signUp: "Sign Up",
    userList: "Users",
    profile: 'Profile',
    language: 'Language',
    logOut: 'Log out',
    logs: 'Logs'
}
let language = cookie.load('language');
console.log(language);
if(language === 'polish') {
    label = polish;
}

else {
    label = english;
}
export default label;