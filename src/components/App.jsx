import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import HeaderContainer from "../containers/HeaderContainer.js";
import Main from "./Main.jsx";
import SearchContainer from "../containers/SearchContainer.js";
import ResultsContainer from "../containers/ResultsContainer.js";
import FooterContainer from "../containers/FooterContainer.js";

class App extends React.Component {
  loadSettingsFromLS() {
    let LS = window.localStorage,
        resultsNumber = parseInt(LS.getItem("resultsNumber")),
        startTag = LS.getItem("startTag"),
        sizeUnit = LS.getItem("sizeUnit"),
        searchLang = LS.getItem("searchLang"),
        appColor = LS.getItem("appColor"),
        searchHistory = JSON.parse(LS.getItem("searchHistory")),
        props = this.props.store.get("appReducer"),
        propsSettings = this.props.store.get("settingsReducer"),
        propsUIReducer = this.props.store.get("UIReducer");
    return this.props.actions.applyLSSettings({
      query: startTag? startTag : propsSettings.get("startTag"),
      searchHistory: searchHistory? searchHistory : props.get("searchHistory"),
      settingsReducer: {
        searchLang: searchLang? searchLang : propsSettings.get("searchLang"),
        sizeUnit: sizeUnit? sizeUnit : propsSettings.get("sizeUnit"),
        appColor: appColor? appColor : propsSettings.get("appColor"),
        startTag: startTag? startTag : propsSettings.get("startTag")
      },
      UIReducer: {
        count: resultsNumber? resultsNumber : propsUIReducer.get("count"),
        offset: propsSettings.get("offset")
      }
    });
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.loadSettingsFromLS();
  }

  render() {
    let appReducer = this.props.store.get("appReducer");
    let settingsReducer = this.props.store.get("settingsReducer");

    return (
      <Router>
        <div>
          <HeaderContainer />
          <Main>
            <SearchContainer />
            { appReducer.get("response").status === 0 && settingsReducer.get("startTag") !== ""? <Redirect to={ "/find/" + appReducer.get("query") } /> : null }
            <Route path="/find/:query" component={ ResultsContainer } />
          </Main>
          <FooterContainer />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  store: ImmutablePropTypes.mapContains({
    appReducer: ImmutablePropTypes.mapContains({
      query: PropTypes.string,
      response: PropTypes.shape({
        error: PropTypes.object,
        payload: PropTypes.object,
        status: PropTypes.oneOf([-1, 0, 1, 2]).isRequired
      }),
      searchHistory: PropTypes.oneOfType([
        PropTypes.array,
        ImmutablePropTypes.list
      ]).isRequired
    }).isRequired,
    settingsReducer: ImmutablePropTypes.mapContains({
      appColor: PropTypes.string,
      searchLang: PropTypes.string,
      sizeUnit: PropTypes.string.isRequired,
      startTag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }).isRequired,
    UIReducer: ImmutablePropTypes.mapContains({
      hintsOpen: PropTypes.bool.isRequired,
      navOpen: PropTypes.bool.isRequired,
      count: PropTypes.number.isRequired,
      offset: PropTypes.number.isRequired
    }).isRequired
  })
}

export default App;
