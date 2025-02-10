// Function to open the tab content for the selected site
function openSite(evt, siteName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(siteName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Example of other JavaScript functionalities
let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);
console.log(69 / 50 + 400);

let accessAllowed;
let age = prompt('How old are you?', '');

// if (age > 18) {
  accessAllowed = true;
// } else {
  accessAllowed = false;
}

// if (age > 18) {
 // alert('You now have access to the website');
}
audioElement.play();