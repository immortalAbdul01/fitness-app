import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Image, StyleSheet,Dimensions } from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const Banner = () => {
  const carouselData = [
    { id: 1, image: require('./../assets/image3.webp') },
    { id: 2, image: require('./../assets/image2.jpg') },
    { id: 3, image: require('./../assets/image1.jpg') },
    { id: 4, image: require('./../assets/image4.jpg') },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  </View>
  );

  return (
    <Carousel
      data={carouselData}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={200}
    />
  );
};

Banner.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the left
        backgroundColor: 'black',
        borderRadius: 10,
        // margin: 30,
        height: 240,
        // padding: 10,
        width: Dimensions.get('window').width - 60, // Adjusted to occupy the whole horizontal screen with margins
      },
      imageContainer: {
        flexDirection: 'row', // Added to align images from left to right
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 10,
      },
});




export default Banner;
