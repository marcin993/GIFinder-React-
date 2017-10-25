import { DELETE_TAG } from "../consts.js";

const deleteTag = (store) => (next) => (action) => {

  switch(action.type) {

    case DELETE_TAG:
      (function() {
        let searchHistory = JSON.parse(localStorage.getItem("searchHistory")),
            tagPosition = searchHistory.indexOf(action.tag);

        searchHistory.splice(tagPosition, 1);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      })();
      next(action);
      break;

    default:
      next(action);
      break;
  }
}

export default deleteTag;
