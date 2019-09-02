import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { useUser } from '../../hooks/user';

export default function UserInputA(props) {
  const {
    userName, userNumber, setUserName, setUserNumber, isValid,
  } = useUser({ name: '', number: '' });

  const submit = () => {
    console.log('isValid', isValid);
    console.log('values', {
      userName,
      userNumber,
      isValid,
    });
    if (isValid) {
      const navigateParams = { userName, userNumber };
      props.navigation.navigate('Main', navigateParams);
    }
  };

  return (
        <View style={styles.container}>
            <Text>あなたのなまえを教えて下さい。</Text>
            <TextInput
                placeholder="なまえ"
                onChangeText={(text) => setUserName(text)}
            />
            <Text>あなたのストライクナンバーは？</Text>
            <TextInput
                placeholder="3ケタの数字"
                maxLength={3}
                keyboardType="numeric"
                onChangeText={(text) => setUserNumber(text)}
            />
            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.buttonText}>決定</Text>
            </TouchableOpacity>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#353535',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  number: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#14be9b',
    borderRadius: 30,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  submit: {
    color: 'white',
    fontSize: 20,
  },
});
