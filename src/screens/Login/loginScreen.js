import React from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Colors from "../../Utils/Colors";

export default function loginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>EV</Text>
        <Image
          source={require("./../../../assets/Images/l1.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>STATION</Text>
      </View>
      <Image
        source={require("./../../../assets/Images/c1.png")}
        style={styles.bgImage}
      />

      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={styles.heading}>
          Your Ultimate EV charging Station Finder App
        </Text>

        <Text style={styles.desc}>
          Find EV charging station near you, plan trip and so much more in just
          one click
        </Text>
      </View>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 80,
    alignItems: "center",
    flexDirection: "row",
  },
  logoText: {
    fontFamily: "outfit-bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
  logoImage: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontFamily: "outfit-bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: "outfit",
    textAlign: "center",
    color:Colors.GRAY,
  },
  button: {
    backgroundColor:Colors.PRIMARY,
    padding: 16,
    display: "flux",
    borderRadius: 99,
    marginTop: 40,
  },
  buttonText:{
    color:Colors.WHITE,
    textAlign:'center',
    fontFamily:'outfit',
    fontSize:17
  }
});
