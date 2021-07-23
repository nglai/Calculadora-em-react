import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from 'react';

export default function Content(){
    const [calculo, setCalculo] = useState({
        a: "",
        b: "",
        resultado:0
    })

    console.log(calculo)
    
    const handleInputChange = (parametro, valor) => {
        setCalculo({
            ...calculo, [parametro]: valor
        })
    }

    const soma = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a + calculo.b)
        })
    }

    const subtracao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a - calculo.b)
        })
    }

    const multiplicacao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a * calculo.b)
        })
    }

    const divisao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a / calculo.b)
        })
    }

    const restoDivisao = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a % calculo.b)
        })
    }

    const exponencial = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a ** calculo.b)
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.resultado}>{calculo.resultado}</Text>
            <View style={styles.alinhamento}>
                <TextInput
                    style={styles.input}
                    placeholder="Valor A"
                    onChangeText={(valor)=>handleInputChange("a", Number(valor))}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Valor B"
                    onChangeText={(valor)=>handleInputChange("b", Number(valor))}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.alinhamento}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={soma}>
                    <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={subtracao}>
                    <Text>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={multiplicacao}>
                    <Text>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.alinhamento}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={divisao}>
                    <Text>/</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={restoDivisao}>
                    <Text>%</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={exponencial}>
                    <Text>**</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A8E4FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:"25%",
        marginTop:50,
        paddingTop:20,
        paddingBottom:20,
        borderWidth:2,
        width: 200,
        borderRadius:10,
      },

    resultado:{
        borderWidth:1,
        width:150,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,
        textAlign:"center",
        paddingTop:5,
        backgroundColor:"white",
    },

    input:{
        width:80,
        borderWidth:1,
        borderRadius: 20,
        marginLeft:5,
        textAlign:"center",
        height:40,
        backgroundColor:"white",
    },

    button:{
        backgroundColor:"#D0F7FF",
        borderWidth:1,
        width: 40,
        height: 40,
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft:5,
    },

    alinhamento:{
        flexDirection: "row",
    }
})