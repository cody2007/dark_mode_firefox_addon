function darkenNextState() {
  var state = localStorage.getItem("darken-state");
  localStorage.setItem("darken_on", "1");
  
  if (state === null)
    state = localStorage.getItem("darken-default-state");
  if (state === "1" || state === null) {
    localStorage.setItem("darken-state", "2");
  } else if (state === "2" || state === null) {
    localStorage.setItem("darken-state", "3");
  } else if (state === "3" || state === null) {
    localStorage.setItem("darken-state", "4");
  } else {
    localStorage.setItem("darken-state", "1");
  }
}

darkenNextState();
darkenFromState();
