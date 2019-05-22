import React from "react";
import PropTypes from "prop-types";

const classNamesForItemIcons = {
  file: "fas fa-file",
  dir: "fas fa-folder"
};

const classNamesForItemNames = {
  file: "btn disabled text-left",
  dir: "btn btn-link text-left"
};

const DiscItem = props => (
  <div>
    <i className={classNamesForItemIcons[props.type]} />
    <button
      className={classNamesForItemNames[props.type]}
      onClick={props.click}
    >
      {props.name}
    </button>
    {props.size ? (
      <>
        <small className="text-muted">{props.size}</small>{" "}
        <small className="text-muted">KB</small>
      </>
    ) : null}
  </div>
);

DiscItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  click: PropTypes.func
};

export default DiscItem;
