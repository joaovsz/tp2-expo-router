import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

const RadioButtonComponent = () => {
  const [checked, setChecked] = useState("masculino");

  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setChecked(value)}
        value={checked}
      >
        <RadioButton.Item label="Masculino" value="masculino" />
        <RadioButton.Item label="Feminino" value="feminino" />
        <RadioButton.Item label="Prefiro não dizer" value="not" />
      </RadioButton.Group>
    </View>
  );
};

export default RadioButtonComponent;
