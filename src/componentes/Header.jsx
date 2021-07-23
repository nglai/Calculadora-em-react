import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react';

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../imagens/calculadora.gif')}
                />
            </View>
            <View>
                <Text style={styles.text}>MyCalculator</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        height:75,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#8DD8FA"
    },

    logo:{
        height:70,
        width:70,
    },

    text:{
        color: "black",
        fontSize: 20,
        marginLeft:10
    }
})