import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';

const { height, width } = Dimensions.get('window');

const Homes = ({ name, type, rating }) => {
  return (
    <View style={styles.homesSubView}>
      <View style={styles.homesSectionTop}>
        <Image style={styles.homesSectionImage} source={require('../../../assets/home.jpg')} />
      </View>
      <View style={styles.homesSectionBottom}>
        <Text style={{ fontSize: 10, color: '#b63838' }}>{type}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 10 }}>82$</Text>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homesSubView: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    marginTop: 25
  },
  homesSectionTop: {
    flex: 1,
  },
  homesSectionBottom: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  homesSectionImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});

export default Homes;
