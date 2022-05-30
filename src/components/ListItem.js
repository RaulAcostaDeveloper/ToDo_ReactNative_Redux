import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export default ({description, onPress, completed}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {completed ? 
            <Text style={[styles.text, styles.strike]}>{description}</Text>
            : 
            <Text style={styles.text}>{description}</Text>
            }
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        height:60,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize:18,
    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
})