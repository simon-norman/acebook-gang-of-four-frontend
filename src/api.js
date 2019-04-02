const api = {
  call: function(data, verb, url, callback) {
    const xhttp = new XMLHttpRequest();

    xhttp.open(verb, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        callback(xhttp)
      }
      else {console.log("This hasn't worked")}
    }

    xhttp.send(JSON.stringify(data))
  }
}

export default api;