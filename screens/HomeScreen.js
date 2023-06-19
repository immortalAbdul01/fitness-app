import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import Banner from "../components/Banner";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };

  const { minutes, calories, workout } = useContext(FitnessItems);

  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View style={{ backgroundColor: "black", padding: 10, height: "100%", width: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Hello {auth.currentUser.displayName}
          </Text>
          <Button onPress={handleSignOut} title="Log out" style={{ width: 100 }} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>{workout}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>WORKOUTS</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>{calories}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>KCAL</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18 }}>{minutes}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>MINS</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Banner />
          <Text style={{ fontSize: 34, color: "white" }}>Workouts</Text>
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({});

