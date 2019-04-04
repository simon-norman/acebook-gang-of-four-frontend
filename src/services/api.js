const api = {
  call: function(data, verb, url, callback, headers) {
    const xhttp = new XMLHttpRequest();

    xhttp.open(verb, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");

    const xhttpWithHeaders = this.setHeaders(xhttp, headers)

    xhttpWithHeaders.onreadystatechange = function () {
      if (xhttpWithHeaders.readyState === 4 && xhttpWithHeaders.status.toString().charAt(0) === '2') {
        callback(xhttpWithHeaders)
      }
      else {console.log("This hasn't worked")}
    }
    xhttpWithHeaders.send(JSON.stringify(data))
  },

  setHeaders: function(xhttp, headers) {
    for (const headerKey in headers) {
      xhttp.setRequestHeader(headerKey, headers[headerKey]);
    }
    return xhttp
  }
}

export default api;