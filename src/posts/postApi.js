const postApi = {
  getPosts: function(callback) {
    const xhttp = new XMLHttpRequest();
    const url = 'http://localhost:4000/auth'

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const json = JSON.parse(xhttp.responseText)
        callback(json)
      }
      else {console.log("Failed to get posts.")}
    }

    xhttp.send()
  }
}

export default postApi;