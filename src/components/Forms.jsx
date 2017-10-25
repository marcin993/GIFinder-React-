import React from "react";
import PropTypes from "prop-types";

export const LabelTableInput = (props) => {
  return (
    <tr>
      <td>
        <label htmlFor={ props.id }>{ props.label }</label>
      </td>
      <td>
        <input type={ props.type }
              className="form-control"
              id={ props.id }
              value={ props.value? props.value : "" }
              onChange={ props.onChange }
        />
      </td>
    </tr>
  )
}

LabelTableInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func
}


export const LabelTableSelect = (props) => {
  let children = props.children,
      childIsArr = Array.isArray(children),
      childrenMap;

  if(!childIsArr) {
    childrenMap = Object.keys(children);
  }

  return (
    <tr>
      <td>
        <label htmlFor={ props.id }>{ props.label }</label>
      </td>
      <td>
        <select
          id={ props.id }
          value={ props.value }
          onChange={ props.onChange }
        >
          {
            childIsArr?
              children.map((elem, i) => <option key={ i }> { elem } </option>)
              :
              childrenMap.map((elem, i) => <option key={ i } value={ elem }> { children[elem] } </option>)
          }
        </select>
      </td>
    </tr>
  )
}

LabelTableSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}
