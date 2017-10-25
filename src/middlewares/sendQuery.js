import { SEND_QUERY } from "../consts.js";
import { queryLoad, queryError } from "../actions/appActions.js";

function ajax(q, count, offset, loadStart) {
  var q = encodeURI(q);

  return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest(),
          req = "http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=dc6zaTOxFJmzC&limit=" + count + "&offset=" + offset + "&lang=" + searchLanguage;

      xhttp.open("GET", req, true);

      xhttp.onloadstart = loadStart;

      xhttp.onload = function() {
          if(this.readyState == 4 && this.status == 200) {
              resolve(JSON.parse(xhttp.response));
          }
      }

      xhttp.onerror = function(e) {
          console.log(e);
          reject(Error("Wystąpił błąd!"));
      }

      xhttp.send();
  });
}

const sendQuery = (store) => (next) => (action) => {

  switch(action.type) {

    case SEND_QUERY:
      let getSt = store.getState(),
          query = getSt.get("appReducer").get("query"),
          count = getSt.get("UIReducer").get("count"),
          offset = getSt.get("UIReducer").get("offset");

      ajax(query, count, offset, function() { next({...action, status: 1, data: null, error: null}); })
        .then(function(response) {
          action = {
            ...action,
            status: 2,
            data: response,
            error: null
          }
          next(action);
        })
        .catch(function(err) {
          action = {
            ...action,
            status: -1,
            data: null,
            error: err
          }
          next(action);
          console.log(err);
        })
      break;

    default:
      next(action);
      break;
  }

}

export default sendQuery;
