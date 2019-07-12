// Default DevCorner JavaScript Setting
// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Beat settings
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#e67e22",
    "#e74c3c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e"
  ];

  //console.log(sounds[0]);

  // sound
  pads.forEach((pad, index) =>{
    pad.addEventListener("click", function() {
      // Reset the time to able to click repeatedly
      sounds[index].currentTime = 0;
      sounds[index].play();

      createNote(index);
    });
  });

  // Visaul effect
  const createNote = index => {
    const note = document.createElement("div");
    visual.appendChild(note);
    note.style.color = colors[index];
    note.style.animation = "jump 1s ease";
    note.addEventListener("animationend", function(){
      visual.removeChild(this);
    });
  };
});
