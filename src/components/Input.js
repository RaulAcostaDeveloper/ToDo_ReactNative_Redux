import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
export default ({onChange, value, onSubmit}) => {
    return (
        <TextInput
            style= {styles.input}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={onSubmit}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height:44,
        alignSelf:'stretch',
        padding:10,
    }
})