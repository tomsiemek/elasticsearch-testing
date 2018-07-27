module.exports = function User(login, password, salt) {
   this.login = login;
   this.password = password;
   this.salt = salt;

}