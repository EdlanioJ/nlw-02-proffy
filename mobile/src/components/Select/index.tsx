import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-community/picker";
import { PickerProps } from "@react-native-community/picker/typings/Picker";

import styles from "./styles";

interface SelectProps extends PickerProps {
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerBox}>
        <Picker
          mode="dialog"
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue=""
          {...rest}
        >
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              value={option.value}
              label={option.label}
            />
          ))}
        </Picker>
      </View>
    </>
  );
};

export default Select;
