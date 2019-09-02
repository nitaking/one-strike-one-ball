import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useStrikeNumber } from '../../hooks/number';
import { useUser } from '../../hooks/user';


const Title = (props) => <Text style={styles.title}>{props.children}</Text>

export default function Main(props) {
    const { userName, userNumber } = props.navigation.state.params;

  const {
    strikeNumbers,
    inputNumbers,
    strikeCount,
    ballCount,
    isOut,
    setNumbers,
    checkStrike,
    isError,
  } = useStrikeNumber(userNumber);

  // todo: ターン判定
  // todo: 履歴表示
  // todo: メモ（ナンバーのタッチで斜線）

  const input1 = React.useRef(null);
  const input2 = React.useRef(null);
  const input3 = React.useRef(null);



console.log({
  Main: {
      ...props.navigation.state.params,
  }
  })

  const defaultProps = {
    style: styles.number,
    defaultValue: null,
    placeholder: '0',
    maxLength: 1,
  };

  return (
        <View style={styles.container}>

            <Title>userName: {userName}</Title>
            <Title>Answer: {strikeNumbers}</Title>
            <Title>inputNumbers: {inputNumbers}</Title>
            <Title>strikeCount: {strikeCount}</Title>
            <Title>ballCount: {ballCount}</Title>
            {isOut && <Text style={{ fontSize: 30 }}>OUT !!</Text>}

            <TextInput
                ref={input1}
                {...defaultProps}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setNumbers({ value1: text });
                  Keyboard.dismiss();
                  input2.current.focus();
                }}
            />
            <TextInput
                ref={input2}
                {...defaultProps}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setNumbers({ value2: text });
                  Keyboard.dismiss();
                  input3.current.focus();
                }}
            />
            <TextInput
                ref={input3}
                {...defaultProps}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setNumbers({ value3: text });
                  Keyboard.dismiss();
                }}
            />

          <TouchableOpacity style={[styles.button, isError && { opacity: 0.7 }]} onPress={checkStrike} disabled={isError}>
              <Text style={styles.submit}>送信</Text>
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
    fontSize: 20
  },
  number: {
    fontSize: 30,
  },
  button: {
    backgroundColor: 'blue',
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
