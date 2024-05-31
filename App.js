import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.group1Header}>Hello,Devs</Text>
            <Text style={styles.group1Text}>14 Tasks Today</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  body: {
   
    marginHorizontal: 12
  },
  subContainer: {
    padding: 3,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  group1Header: {
    fontSize: "32px",
    lineHeight: "38.4px",
    fontWeight: "700",
    width: "170px",
    height:"37px"
  },
  group1Text: {
    fontSize: "12px",
    lineHeight:"14.4px",
    fontWeight:"500"
  },
});
