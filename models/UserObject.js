module.exports = function User(login, password, salt, role = 'user') {
   this.login = login;
   this.password = password;
   this.salt = salt;
   this.role = role;

}