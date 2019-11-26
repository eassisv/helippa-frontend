import React from "react";
import { Picker } from "react-native";
import PropTypes from "prop-types";

const Select = ({ onClick, keys, names }) => {
  return <Picker />;
};

Select.propTypes = {
  onClick: PropTypes.func,
  keys: PropTypes.arrayOf(PropTypes.string),
  names: PropTypes.arrayOf(PropTypes.string)
};

Select.defaultProps = {
  onClick: () => {},
  keys: [],
  names: []
};
export default Select;
