import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icons.jsx";
import { LabelTableInput, LabelTableSelect } from "./Forms.jsx";
import SettingsFooterContainer from "../containers/SettingsFooterContainer.js";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.colorTimeout;

    this.toggleNav = this.toggleNav.bind(this);
    this.changeResultsNumber = this.changeResultsNumber.bind(this);
    this.changeStartTag = this.changeStartTag.bind(this);
    this.changeSizeUnit = this.changeSizeUnit.bind(this);
    this.changeSearchLang = this.changeSearchLang.bind(this);
    this.changeAppColor = this.changeAppColor.bind(this);
  }

  toggleNav() {
    this.props.actions.toggleNav();
  }

  changeResultsNumber(e) {
    let resultsNumber = parseInt(e.target.value);

    this.props.actions.changeResultsNumber(resultsNumber);
  }

  changeStartTag(e) {
    let tag = e.target.value;

    this.props.actions.changeStartTag(tag);
  }

  changeSizeUnit(e) {
    let unit = e.target.value;

    this.props.actions.changeSizeUnit(unit);
  }

  changeSearchLang(e) {
    let lang = e.target.value;

    this.props.actions.changeSearchLang(lang);
  }

  changeAppColor(e) {
    clearTimeout(this.colorTimeout);

    let color = e.target.value;

    this.colorTimeout = setTimeout(() => this.props.actions.changeAppColor(color), 250)
  }

  render() {
    let langsObj = {
      "none": "Brak",
      "ar": "Arabski",
      "bn": "Bengalski",
      "zh-CN": "Chiński (tradycyjny)",
      "zh-TW": "Chiński (uproszczony)",
      "cs": "Czeski",
      "da": "Duński",
      "tl": "Filipiński",
      "fi": "Fiński",
      "fr": "Francuski",
      "iw": "Hebrajski",
      "hi": "Hindi",
      "es": "Hiszpański",
      "id": "Indonezyjski",
      "ja": "Japoński",
      "ko": "Koreański",
      "ms": "Malajski",
      "nl": "Niderlandzki",
      "de": "Niemiecki",
      "no": "Norweski",
      "fa": "Perski",
      "pl": "Polski",
      "pt": "Portugalski",
      "ru": "Rosyjski",
      "ro": "Rumuński",
      "sv": "Szwedzki",
      "th": "Tajski",
      "tr": "Turecki",
      "uk": "Ukraiński",
      "hu": "Węgierski",
      "vi": "Wietnamski",
      "it": "Włoski"
    }

    let sizeUnitsArr = ["MB", "KB"];

    return (
      <div className="nav-toggle">
        <ToggleNavButton icon="bars" onClick={this.toggleNav}/>

        <nav
            className={this.props.navOpen? "flex open" : "flex"}
            style={ this.props.appColor !== "#087f5b"? {backgroundColor: this.props.appColor} : null }
        >
          <ToggleNavButton icon="close" onClick={this.toggleNav}/>
            <table className="settings-table">
              <tbody>
                <LabelTableInput
                  id="resultsNumber"
                  label="Wyników na stronę:"
                  type="text"
                  value={this.props.resultsNumber}
                  onChange={this.changeResultsNumber}
                />

                <LabelTableInput
                  id="startTag"
                  label="Tag startowy:"
                  type="text"
                  value={this.props.startTag}
                  onChange={this.changeStartTag}
                />

                <LabelTableSelect
                  id="sizeUnit"
                  label="Jednostka rozmiaru gifa:"
                  value={this.props.sizeUnit}
                  onChange={this.changeSizeUnit}
                >
                  { sizeUnitsArr }
                </LabelTableSelect>

                <LabelTableSelect
                  id="searchLanguage"
                  label="Domyślny język wyszukiwania:"
                  value={this.props.searchLang}
                  onChange={this.changeSearchLang}
                >
                  { langsObj }
                </LabelTableSelect>

                <LabelTableInput
                  id="appColor"
                  label="Kolorystka:"
                  type="color"
                  value={this.props.appColor}
                  onChange={this.changeAppColor}
                />

                <SettingsFooterContainer />
            </tbody>
          </table>
        </nav>
      </div>
    )
  }
}

Nav.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  resultsNumber: PropTypes.number,
  startTag: PropTypes.string,
  sizeUnit: PropTypes.string,
  searchLang: PropTypes.string,
  appColor: PropTypes.string,
  actions: PropTypes.object.isRequired
}

const ToggleNavButton = (props) => {
  return (
    <div onClick={props.onClick}>
      <Icon type={props.icon} />
    </div>
  )
}

export default Nav;
