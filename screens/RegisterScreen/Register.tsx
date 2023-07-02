import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Register() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function RegisterHandle() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_Container}>
        <Text style={styles.login_Text}>Register</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.input_Container}>
          <Text style={styles.text3}>Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />
        </View>
        <View style={styles.input_Container}>
          <Text style={styles.text1}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.input_Container}>
          <Text style={styles.text2}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <Button text="Register" onSelect={RegisterHandle} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_Container: {
    position: 'absolute',
    marginTop: '30%',
    marginLeft: 40,
  },
  login_Text: {
    fontSize: 40,
    fontWeight: '700',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
  },
  input_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text1: {
    marginRight: '72%',
    margin: 10,
  },
  text2: {
    marginRight: '64%',
    margin: 10,
  },
  text3: {
    marginRight: '65%',
    margin: 10,
  },
});
