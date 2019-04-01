const registrationApi = {
  register: function(user, callback) {
    const xhttp = new XMLHttpRequest();
    const url = 'http://localhost:4000/auth'

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const json = JSON.parse(xhttp.responseText)
        callback(json)
      }
      else {console.log("This hasn't worked")}
    }

    const data = JSON.stringify(user)
    xhttp.send(data)
  }
}

export default registrationApi;