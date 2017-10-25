import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icons.jsx";
import { ClearButton } from "./Buttons.jsx";

const SettingsFooter = (props) => {
  return (
    <tr>
      <td colSpan="2">

        <ClearButton onClick={ props.actions.setDefaultSettings }>
          <Icon type="wrench" /> Przywróć domyślne ustawienia
        </ClearButton>

        <ClearButton onClick={ props.actions.clearSearchHistory }>
          <Icon type="history" /> Wyczyść historię wyszukiwania
        </ClearButton>

      </td>
    </tr>
  )
}

SettingsFooter.propTypes = {
  actions: PropTypes.object.isRequired
}

export default SettingsFooter;
