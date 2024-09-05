import React from "react";
import { View, StyleSheet } from "react-native";
import { List as PaperList, Divider } from "react-native-paper";

const List = () => {
  return (
    <View style={styles.container}>
      <PaperList.Section>
        <PaperList.Item title="Teste 1" />
        <Divider />
        <PaperList.Item title="Teste 2" />
        <Divider />
        <PaperList.Item title="Teste 3" />
        <Divider />
      </PaperList.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default List;
