import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-svg';
import { useState } from 'react';
import { SvgUri } from 'react-native-svg';
import Logo from './assets/1296921.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableHighlight } from 'react-native';
import MyDetailsForm from './MyDetailsForm';
import { useCallback } from 'react';
import { useEffect } from 'react';
import * as SMS from 'expo-sms';

function HomeScreen({ navigation }) {
  const [countdown, setCountdown] = useState(null);

  const [smsAvailable, setSmsAvailable] = useState(false);
  // Pour la prod
  // const [phoneNumber, setPhoneNumber] = React.useState('');
  // const [message, setMessage] = React.useState('');

  const onComposeSms = useCallback(async () => {
    if (smsAvailable) {
      console.log('going for it!');
      // Pour la prod:
      // await SMS.sendSMSAsync(phoneNumber.toString(), message);
      await SMS.sendSMSAsync(
        '0603013922',
        'Je me suis fait chopé!',
      );
    }
  }, [smsAvailable]);

  useEffect(() => {
    SMS.isAvailableAsync().then(setSmsAvailable);
  }, []);


  const _handlePress = () => {
    setCountdown(10); // Start the countdown from 10 (change the initial value as needed)

    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(timer); // Stop the countdown when it reaches 1
          // alert("dead man switch triggered !")
          onComposeSms();
        }
        return prevCountdown - 1;
      });
    }, 1000); // Update the countdown value every second
  };

  return (
    <View style={styles.container}>
      {/* <Image src={assets/favicon.png}></Image> */}
    {/* <Logo width={120} height={40}></Logo> */}
    <SvgUri
    width="50%"
    height="10%"
    uri="https://svgsilh.com/svg/1296921.svg"
/>
    <Text style={{fontSize: 50, color: 'black'}}>Aca Bee</Text>
    <Text>Fighting for your rights</Text>
    <TouchableHighlight  style={styles.button} onPress={_handlePress}>
      <View style={styles.button}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold' }}>
            Help Me
        </Text>
      </View>
    </TouchableHighlight>
    {countdown !== null && countdown > 0 && <Text>Countdown: {countdown}</Text>}
    {smsAvailable
          ? <Text>SMS will be sent to your emergency contacts</Text>
          : <Text>Unfortunately, SMS is not available on this device</Text>
        }
    <StatusBar style="auto" />
    <Button
        title="My rights"
        onPress={() => navigation.navigate('My rights')}
      />
       <Button
        title="My reports"
        onPress={() => navigation.navigate('My reports')}
      />
       <Button
        title="My details"
        onPress={() => navigation.navigate('My details')}
      />
  </View>
  );
}


function MyRights() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My rights</Text>
    </View>
  );
}

function MyReports() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My reports</Text>
      
    </View>
  );
}

function MyDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My details</Text>
      <MyDetailsForm/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My rights" component={MyRights} />
        <Stack.Screen name="My reports" component={MyReports} />
        <Stack.Screen name="My details" component={MyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    margin:20,
    width: 100,
    height:100,
    borderRadius : 100,
  }
});
