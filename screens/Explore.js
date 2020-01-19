import React, { useEffect } from 'react';
import {
  View, TextInput, StyleSheet, SafeAreaView, StatusBar,
  Platform, ScrollView, Text, Image, Dimensions, Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import Tag from './components/Explore/Tag';
import Homes from './components/Explore/Homes';

let startHeaderHeight = 110;
let endHeaderHeight = 50;
const { height, width } = Dimensions.get('window');
/* this.scrollY = new Animated.Value(0);

this.animatedHeaderHeight = scrollY.interpolate({
  inputRange: [0, 50],
  outputRange: [startHeaderHeight, endHeaderHeight],
  extrapolate: 'clamp'
}); */

const Explore = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      startHeaderHeight = 100 + StatusBar.currentHeight;
      endHeaderHeight = 50 + StatusBar.currentHeight;
    }
  }, [Platform.OS]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Animated.View style={styles.header}>
          <View style={styles.subHeader}>
            <Icon name='ios-search' size={20} style={styles.icon} />
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Try Victoria Island'
              placeholderTextColor='grey'
              style={styles.searchBar}
            />
          </View>
          <Animated.View style={styles.animatedView}>
            <Tag name='Guests' />
            <Tag name='Dates' />
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
        /* onScroll={Animated.event(
          [
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ]
        )} */
        >
          <View style={styles.finderContainer}>
            <Text style={styles.finder}>
              What can we help you find, Femi?
            </Text>
            <View style={styles.cardScroll}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category imageUri={require('../assets/home.jpg')} name='Home' />
                <Category imageUri={require('../assets/experiences.jpg')} name='Experiences' />
                <Category imageUri={require('../assets/restaurant.jpg')} name='Resturant' />
              </ScrollView>
            </View>
            <View style={styles.plusContainer}>
              <Text style={styles.plusText}>Introducing Airbnb Plus</Text>
              <Text style={styles.plusSubText}>A new selection of homes verified for quality & comfort</Text>
              <View style={styles.plusImageContainer}>
                <Image
                  style={styles.plusImage}
                  source={require('../assets/home.jpg')}
                />
              </View>
            </View>
          </View>
          <View style={styles.homes}>
            <Text style={styles.homesTitle}>Homes around the world</Text>
            <View style={styles.homesMainview}>
              <Homes name='The Cozy Place' type='PRIVATE ROOM - 2 BEDS' rating={4} />
              <Homes name='The Cozy Place' type='PRIVATE ROOM - 2 BEDS' rating={4} />
              <Homes name='The Cozy Place' type='PRIVATE ROOM - 2 BEDS' rating={4} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mainContainer: {
    flex: 1,
  },
  subHeader: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 1,
  },
  header: {
    height: startHeaderHeight,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
  },
  searchBar: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  finder: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20
  },
  finderContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  cardScroll: {
    height: 200,
    marginTop: 20,
  },
  plusContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  plusText: {
    fontSize: 24,
    fontWeight: '700',
  },
  plusSubText: {
    fontWeight: '100',
    marginTop: 10,
  },
  plusImageContainer: {
    width: -40,
    height: 200,
    marginTop: 20,
  },
  plusImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  animatedView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    position: 'relative',
    top: 10
  },
  homes: {
    marginTop: 40,
  },
  homesTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20
  },
  homesMainview: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
});

export default Explore;
