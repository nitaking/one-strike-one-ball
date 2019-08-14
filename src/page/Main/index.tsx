import React from "react";
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from "react-native";
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
    } = useStrikeNumber('294');

    // todo: ターン判定

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 20 }}>Answer: {strikeNumbers}</Text>
            <Text style={{ fontSize: 20 }}>inputNumbers: {inputNumbers}</Text>
            <Text style={{ fontSize: 20 }}>strikeCount: {strikeCount}</Text>
            <Text style={{ fontSize: 20 }}>ballCount: {ballCount}</Text>
            {isOut && <Text style={{ fontSize: 30 }}>OUT !!</Text>}

            <TextInput
                style={styles.number}
                keyboardType="number-pad"
                defaultValue="0"
                maxLength={1}
                onChangeText={(text) => setNumbers({ value1: text })}
            />
            <TextInput
                style={styles.number}
                keyboardType="number-pad"
                defaultValue="0"
                maxLength={1}
                onChangeText={(text) => setNumbers({ value2: text })}
            />
            <TextInput
                style={styles.number}
                keyboardType="number-pad"
                defaultValue="0"
                maxLength={1}
                onChangeText={(text) => setNumbers({ value3: text })}
            />

          <TouchableHighlight
            style={styles.button}
              onPress={checkStrike}>
              <Text style={styles.submit}>送信</Text>
          </TouchableHighlight>
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
