import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, album}) => {
    const {buttonStyle, textStyle} = styles;

    return(
        <TouchableOpacity 
            onPress = {onPress}
            style = {buttonStyle}>
            <Text style = {textStyle}>Buy {album.title} by {album.artist}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#333',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;