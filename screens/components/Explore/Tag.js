import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tag = ({ name }) => {
  return (
    <View style={styles.tagAnimationView}>
      <Text style={styles.tagText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagAnimationView: {
    minHeight: 20,
    minWidth: 40,
    padding: 5,
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 5,
  },
  tagText: {
    fontWeight: '700',
    fontSize: 10
  },
});

export default Tag;
