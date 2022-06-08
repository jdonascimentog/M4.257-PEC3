const name = "world";
console.log(`Hello ${name}!`);

openMenu = function () {
    var x = document.getElementById("nav");
    if (x.className === "header__nav") {
        x.className += " responsive";
    } else {
        x.className = "header__nav";
    }
};
