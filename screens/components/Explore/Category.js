import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Category = ({ imageUri, name }) => {
  return (
    <View style={styles.scrollView}>
      <View style={styles.cardTop}>
        <Image source={imageUri} style={styles.home} />
      </View>
      <View style={styles.cardBottom}>
        <Text style={styles.homeContainer}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: 180,
    width: 230,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  cardTop: {
    flex: 2
  },
  cardBottom: {
    flex: 1,
  },
  home: {
    flex: 1,
    width: null,
    resizeMode: 'cover',
  },
  homeContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '500'
  },
});

export default Category;
