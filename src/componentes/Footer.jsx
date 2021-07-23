import { View, Text, StyleSheet } from "react-native";
import React from 'react';

export default function Footer(){
    return(
        <View style={styles.viewFooter}>
            <Text>Todos os direitos reservados</Text>
            <Text>Desenvolvido por: Ng Lai</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter:{
        height:75,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#8DD8FA",
        marginTop: 50,
    },
})