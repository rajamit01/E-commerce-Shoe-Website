let sun = document.getElementById("sun");
let moon = document.getElementById("moon");


function darkMode(){
     document.body.classList.add('dark-mode');
      sun.style.display = "block";
       moon.style.display = "none";
}
function lightMode(){
     document.body.classList.remove('dark-mode');
     sun.style.display = "none";
       moon.style.display = "block";
}                                                        