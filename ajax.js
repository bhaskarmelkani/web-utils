/*
 * ajax(url, method, data, callback)
 * 
 * url      : URL for ajax request.
 * method   : GET/POST
 * data     : Data to be send incase of POST.
 * callback : Funtion to be called on success.
 */

function ajax(url, method, data, callback) {
  var xhr;
  data = data ? JSON.stringify(data) : '';
  method = method || 'GET';
  if (typeof XMLHttpRequest !== 'undefined')
    xhr = new XMLHttpRequest();
  else {
    var versions = [ "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0",
      "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0",
    "Microsoft.XmlHttp" ]
    for (var i = 0, len = versions.length; i < len; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch (e) {
      }
    } 
  }
  xhr.onreadystatechange = ensureReadiness;
  function ensureReadiness() {
    if (xhr.readyState < 4) {
      return;
    }
    if (xhr.status !== 200) {
      return;
    }
    if (xhr.readyState === 4) {
      callback(xhr);
    }
  }
  xhr.open(method, url, true);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(data);
}jjjj
