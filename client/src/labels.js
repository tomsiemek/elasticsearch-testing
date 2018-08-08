import cookie from 'react-cookies';

const polish = {
    addNewItem: 'Dodaj nowy przedmiot',
    add: 'DODAJ',
    changeYourPassword: 'ZMIEN HASLO',
    submit: 'WYSLIJ',
    welcome: 'Witejcie geroje!',
    homeSubtitle: 'Kup wszystko czego chcesz.',
    currency: 'PLN',
    amount: 'Ilosc',
    buy: 'KUP',
    loginPageTitle: 'STRONA LOGOWANIA',
    loginPageFailure: 'BLAD',
    loginPageUsername: 'login',
    loginPagePassword: 'haslo',
    noResultPageText: "NIC TU NIE MA:(",
    delete: 'USUN',
    noItemText: 'Nie ma takiego przedmiotu :(',
    itemDeletedMessage: 'Przedmiot zostal usuniety!',
    searchNoResult: 'BRAK WYNIKOW!',
    searchbarPlaceholder: 'Szukaj..',
    signUpTitle: 'REJESTRACJA',
    passwordMistake: 'HASLA SIE NIE ZGADZAJA',
    usernameTaken: 'NAZWA UZYTKOWNIKA ZAJETA',
    success: 'SUKCES',
    userlistNoAuth: 'NIE MASZ UPRAWNIEN ADMINISTRATORSKICH',
    loginCaps: 'LOGIN',
    id: 'ID',
    userLabel: 'Zalogowany jako:',
    home: "Strona glowna",
    tvs: "Telewizory",
    phones: "Telefony",
    watches: "Zegarki",
    addNew: "Dodaj nowy",
    login: "Zaloguj sie",
    signUp: "Zarejestruj sie",
    userList: "Uzytkownicy",
    profile: 'Profil',
    language: 'Jezyk',
    logOut: 'Wyloguj'
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
    loginPageFailure: 'FAILURE',
    loginPageUsername: 'username',
    loginPagePassword: 'password',
    noResultPageText: "NOTHING HERE :(",
    delete: 'DELETE',
    noItemText: 'No such item :(',
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
    logOut: 'Log out'
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