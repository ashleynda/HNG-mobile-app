import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const app = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Text>Welcome to HNG Mobile App</Text>
      <Button title="Visit GitHub" onPress={() => Linking.openURL('https://github.com/ashleynda/HNG-mobile-app')} />
      <Button title="Visit HNG Hire" onPress={() => Linking.openURL('https://hng.tech/hire')} />
    </View>
  );
};

export default app;