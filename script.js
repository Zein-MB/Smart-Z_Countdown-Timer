let hours = document.getElementById("hours"),
  mins = document.getElementById("mins"),
  secs = document.getElementById("secs"),
  playBtn = document.querySelector(".controls i:first-of-type"),
  pauseBtn = document.querySelector(".controls i:nth-of-type(2)"),
  stopBtn = document.querySelector(".controls i:last-of-type"),
  audio = document.querySelector("embed"),
  startTimer = null,
  inputs = document.querySelectorAll("input");

playBtn.addEventListener("click", () => {
  startTimer = setInterval(startCountDown, 1000);
  playBtn.classList.toggle("flipped");
  if (secs.value == 0 && mins.value == 0 && hours.value == 0) {
  }
  // Disable all inputs
  inputs.forEach((input) => {
    if (input.disabled == false) {
      input.disabled = true;
    } else {
      input.disabled = false;
    }
  });
});

pauseBtn.addEventListener("click", () => {
  clearInterval(startTimer);
  pauseBtn.classList.toggle("flipped");
  // Enable all inputs
  inputs.forEach((input) => {
    if ((input.disabled = true)) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  });
});

stopBtn.addEventListener("click", () => {
  secs.value = "00";
  mins.value = "00";
  hours.value = "00";
  clearInterval(startTimer);
  stopBtn.classList.toggle("flipped");
});

function startCountDown() {
  if (secs.value == 0 && mins.value == 0 && hours.value == 0) {
    secs.value = "00";
    mins.value = "00";
    hours.value = "00";
    audio.style.display = "block";
  } else if (secs.value != 0) {
    secs.value--;
    if (secs.value < 10) {
      secs.value = `0${secs.value}`;
    }
  } else if (mins.value != 0 && secs.value == 0) {
    secs.value = 59;
    mins.value--;
    if (mins.value < 10) {
      mins.value = `0${mins.value}`;
    }
  } else if (hours.value != 0 && mins.value == 0 && secs.value == 0) {
    mins.value = 59;
    secs.value = 59;
    hours.value--;
    if (hours.value < 10) {
      hours.value = `0${hours.value}`;
    }
  }
}

// Add zero when on input
// Add zero to hours
hours.oninput = () => {
  hours.value < 10 ? (hours.value = `0${hours.value}`) : hours.value;
};
// Add zero to minutes
mins.oninput = () => {
  mins.value < 10 ? (mins.value = `0${mins.value}`) : mins.value;
};
// Add zero to seconds
secs.oninput = () => {
  secs.value < 10 ? (secs.value = `0${secs.value}`) : secs.value;
};

// Add zero when off input
// Add zero to hours
hours.value < 10 ? (hours.value = `0${hours.value}`) : hours.value;
// Add zero to minutes
mins.value < 10 ? (mins.value = `0${mins.value}`) : mins.value;
// Add zero to seconds
secs.value < 10 ? (secs.value = `0${secs.value}`) : secs.value;
