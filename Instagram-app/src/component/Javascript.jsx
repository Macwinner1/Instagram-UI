import sunImage from "../assets/sun.png"

function Javascript() {
        let darkmoon = document.getElementById("darkmoon");
       darkmoon.onclick = function() {
      document.body.classlist.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        darkmoon.src  = {sunImage}
      }
       }
}

export default Javascript
