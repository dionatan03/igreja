const dayNight = document.querySelector(".dayNight");
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");

const FuncDayNight = function () {
    body.classList.toggle("dark");
    dayNight.classList.toggle("active");
}

const FuncmenuToggle = function () {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

dayNight.addEventListener("click", FuncDayNight);
menuToggle.addEventListener("click", FuncmenuToggle);
