import React from "react";
import { Picker, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Select = ({ selectedValue, onChange, items }) => {
  return (
    <Picker 
      selectedValue={selectedValue}
      onValueChange={itemValue => onChange(itemValue)}
    >
      {items.map(item => {
        return <Picker.Item label={item.label} value={item.value} />;
      })}
    </Picker>
  );
};

Select.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};

Select.defaultProps = {
  items: []
};

const styles = StyleSheet.create({

})
export default Select;
