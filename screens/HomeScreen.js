import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React ,{useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import Banner from "../components/Banner";
// import Carousel from "react-native-snap-carousel";
const HomeScreen = () => {

 
  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <ScrollView style={{marginTop:40}}>
      <View
        style={{
          backgroundColor:"black",
          padding: 10,
          height: "100%",
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <Image
            style={{
              width: "90%",
              height: 220,
              marginTop: 20,

              marginBottom:80,
              borderRadius: 7,
            }}
            source={{
              uri: "https://e0.pxfuel.com/wallpapers/278/38/desktop-wallpaper-fitness-girl-gym-hands-look-sport-iphone-8-7-6-6s-background-female-gym.jpg",
            }}
          /> */}
      <Banner/>

          <Text style={{fontSize:34,color:'white'}}>Workouts</Text>
        </View>
        <FitnessCards/>
      </View>
    </ScrollView>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({});

