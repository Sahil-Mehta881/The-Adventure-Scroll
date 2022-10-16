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
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const backgroundColor = '#282B3D';


let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const Activity = () => {
   const navigation = useNavigation();
  return (
    
    <View style={styles.normal}>
      <SafeAreaView contentInsetAdjustmentBehavior="never" style={tw`h-full`}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons
              name="arrow-back"
              size={32}
              color="#585F88"
              style={styles.filter}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Ionicons
              name="information-circle-outline"
              size={32}
              color="#585F88"
              style={styles.settings}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.activityTitle}>Reverse Paparrazi</Text>
          <Text style={styles.activityDescription}>Divide up into teams. On each team have one person wear a white T-shirt. Whoever can get the most strangers to sign their team’s T-shirt in 30 minutes wins!</Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate("HomePapImage")}
            style={styles.uploadImageButton}>
            <Text style={styles.uploadImageText}>Upload an Image</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  activityTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  activityDescription: {
    textAlign: 'center',
    color: 'white',
    padding: 20,
    fontSize: 18
  },
  uploadImageButton: {
    height: 50,
    width: 250,
    backgroundColor: '#585F88',
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center'

  },
  uploadImageText: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20
  },
  main: {
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  normal: {
    backgroundColor: backgroundColor,
    height: ScreenHeight,
    width: ScreenWidth,
  
  },

  filter: {
    margin: 15,
    marginRight: 0,
  },
  settings: {
    margin: 15,
    marginLeft: 0,
  },
  topBar: {
    marginTop: 8,
    justifyContent: 'space-between',

    flexDirection: 'row',
  },

});
