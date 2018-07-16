

module.exports = function get(url, method) {
    
    fetch(url)
        .then(method)
        .catch(e => console.log(e));

}