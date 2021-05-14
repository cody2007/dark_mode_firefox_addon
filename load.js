function darkenSetState(state) {
  if (state === "4" || localStorage.getItem("darken_on") === "0") {
    document.documentElement.classList.toggle("nodarken", true);
    document.documentElement.classList.toggle("darkeni", false);
    if (localStorage.getItem("darken_on") === "0") {
    	    chrome.runtime.sendMessage({state: ""});
    }else{
	    chrome.runtime.sendMessage({state: state});
    }
  } else if (state === "1") {
    document.documentElement.classList.toggle("nodarken", false);
    document.documentElement.classList.toggle("darkeni", false);
    chrome.runtime.sendMessage({state: "1"});
  } else if (state === "2") {
    document.documentElement.classList.toggle("nodarken", false);
    document.documentElement.classList.toggle("darkeni", true);
    chrome.runtime.sendMessage({state: "2"});
  } else if (state === "3") {
    document.documentElement.classList.toggle("nodarken", true);
    document.documentElement.classList.toggle("darkeni", true);
    chrome.runtime.sendMessage({state: "3"});
  }
}

function darkenFromState() {
  var state = localStorage.getItem("darken-state");
  if (state === null) {
    state = localStorage.getItem("darken-default-state");
    chrome.runtime.sendMessage({setting: "need-default-state"}, function(response) {
      if (state != response) {
        state = response;
        localStorage.setItem("darken-default-state", state);
        darkenSetState(state)
      }
    });
  }
  
  darkenSetState(state);
};
darkenFromState();
