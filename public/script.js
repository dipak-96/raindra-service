// ==========================
// LOAD SERVICES FROM BACKEND
// ==========================
fetch("/api/service")
.then(res => res.json())
.then(data => {

  const list = document.getElementById("services");

  data.services.forEach(service => {
    let li = document.createElement("li");
    li.innerText = service;
    list.appendChild(li);
  });

})
.catch(err => {
  console.log("Error loading services:", err);
});


// ==========================
// WHATSAPP FORM
// ==========================
function sendWhatsApp(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let bike = document.getElementById("bike").value;
  let problem = document.getElementById("problem").value;

  let message =
    `Name: ${name}%0A` +
    `Bike: ${bike}%0A` +
    `Problem: ${problem}`;

  let url = `https://wa.me/919050866123?text=${message}`;

  window.open(url, "_blank");
}


// ==========================
// SMOOTH SCROLL (NAVBAR)
// ==========================
document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(e){

    let targetId = this.getAttribute("href");

    // agar valid section hai tab hi scroll kare
    if(targetId.startsWith("#")){
      e.preventDefault();

      let target = document.querySelector(targetId);

      if(target){
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }

  });

});


// ==========================
// SIMPLE FADE-IN ON SCROLL
// ==========================
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

  sections.forEach(sec => {
    let position = sec.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });

});