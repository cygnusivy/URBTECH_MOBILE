import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface Item {
  label: string;
  value: number;
}

export function Dropdown({ changeValue, isOpen }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(7);
  const [items, setItems] = useState<Item[]>([
    { label: "Estações de locação", value: 1 },
    { label: "Estações de reparo", value: 2 },
    { label: "Acidentes", value: 3 },
  ]);

  useEffect(() => {
    isOpen(open);
  }, [open]);

  const handleValueChange = (newValue: number | null) => {
    if (newValue !== undefined) {
      setValue(newValue);
      changeValue(newValue);
    }
  };

  return (
    <View>
      <DropDownPicker
        placeholder="Rotas e estações"
        open={open}
        value={value}
        items={items}
        zIndex={999}
        onChangeValue={handleValueChange}
        setOpen={setOpen}
        setValue={setValue}
        style={styles.container}
        dropDownContainerStyle={styles.dropDownContainer}
        setItems={setItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownContainer: {
    width: "80%",
    borderWidth: 0,
    alignSelf: "center",
    elevation: 6,
    position: "absolute",
    backgroundColor: "#F3FCE7",
  },
  container: {
    width: "80%",
    height: 56,
    alignSelf: "center",
    backgroundColor: "#F3FCE7",
    elevation: 6,

    marginBottom: 100,
    borderWidth: 0,
  },
});

export default Dropdown;
