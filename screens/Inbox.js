import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Inbox;
