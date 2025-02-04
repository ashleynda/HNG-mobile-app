import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from "react-native";

const links = [
  { title: "Flutter Developers", url: "https://hng.tech/hire/flutter-developers" },
  { title: "React Native Developers", url: "https://hng.tech/hire/react-native-developers" },
  { title: "Kotlin Developers", url: "https://hng.tech/hire/kotlin-developers" },
  { title: "Mobile UI/UX Developers", url: "https://hng.tech/hire/mobile-ui-ux-developers" },
  { title: "Android Developers", url: "https://hng.tech/hire/android-developers" },
  { title: "GitHub Repository", url: "https://github.com/ashleynda/HNG-mobile-app" }, 
];

export default function app() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>HNG Hire & GitHub Links</Text>
      {links.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#095AD3",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
