import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Card from "@/components/Card";
import PaperButton from "@/components/IconButton";
import List from "@/components/List";
import ProgressBar from "@/components/ProgressBar";
import RadioButtonComponent from "@/components/RadioButton";
import MyMenu from "@/components/Menu";
import MySnackbar from "@/components/Snackbar";

const HomeScreen = () => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const showSnackbar = () => {
    setSnackbarVisible(true);
  };

  const hideSnackbar = () => {
    setSnackbarVisible(false);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Componentes solicitados:</Text>

      <View style={styles.section}>
        <Text style={styles.componentTitle}>IconButton</Text>
        <PaperButton icon={"camera"} onPress={() => console.log("teste")} />
      </View>

      <View style={styles.section}>
        <Card title={"Componente Card"} content={"Teste componente"} />
      </View>

      <View style={styles.section}>
        <Text style={styles.componentTitle}>Componente Lista</Text>
        <List />
      </View>

      <View style={styles.section}>
        <Text style={styles.componentTitle}>Componente Progress Bar</Text>
        <ProgressBar progress={0.4} />
      </View>

      <View style={styles.section}>
        <Text style={styles.componentTitle}>RadioButton</Text>
        <RadioButtonComponent />
      </View>
      <View style={styles.section}>
        <Text style={styles.componentTitle}>Menu</Text>
        <MyMenu />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Testar SnackBar" onPress={showSnackbar} />

        <MySnackbar
          visible={snackbarVisible}
          onDismiss={hideSnackbar}
          actionLabel="Fechar"
          message="Teste de snackbar"
          onActionPress={() => {
            hideSnackbar();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});

export default HomeScreen;
