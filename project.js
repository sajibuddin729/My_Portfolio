var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks ){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Automatically open the first tab when the page loads

// window.onload = function() {
//     opentab("home");
// }

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0px";
}

function closemenu(){
    sidemeu.style.right = "-250px";
}






const scriptURL = 'https://script.google.com/macros/s/AKfycbyHazXs6QxzBZ9TYlf4lNVlRbn1xH2R-W9fAZ4cKq2b_RDr_4Taof9IIJw5sxcBO2TF/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Success"
        setTimeout(function() {
            msg.innerHTML=""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })