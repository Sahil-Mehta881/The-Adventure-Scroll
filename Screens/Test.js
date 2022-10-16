import * as React from 'react';
import tw from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  AppRegistry,
  Dimensions,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const Test = () => {
  return (
    <View style = {tw `bg-gray-200`}>
      <Text style = {styles.test}>This is some wack ass text</Text>
      <Image style={styles.logo} source={require('../assets/Picture4.png')} />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({

 test: {
   backgroundColor: "#333366"
 }
});
