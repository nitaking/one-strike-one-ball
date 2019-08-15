import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import { useStrikeNumber } from '../../hooks/number';


export default function Main() {
    const {
        strikeNumbers,
        inputNumbers,
        strikeCount,
        ballCount,
        isOut,
        setNumbers,
        checkStrike,
        isError,
    } = useStrikeNumber('294');

    // todo: ターン判定
    // todo: 履歴表示
    // todo: メモ（ナンバーのタッチで斜線）

    const input1 = React.useRef(null);
    const input2 = React.useRef(null);
    const input3 = React.useRef(null);

    const defaultProps = {
        style: styles.number,
        defaultValue: null,
        placeholder: "0",
        maxLength: 1,
    };

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 20 }}>Answer: {strikeNumbers}</Text>
            <Text style={{ fontSize: 20 }}>inputNumbers: {inputNumbers}</Text>
            <Text style={{ fontSize: 20 }}>strikeCount: {strikeCount}</Text>
            <Text style={{ fontSize: 20 }}>ballCount: {ballCount}</Text>
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
        fontSize: 30,
        fontWeight: "bold",
        color: '#353535',
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
    }
});
