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

    const aElev = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a * calculo.a)
        })
    }

    const bElev = () => {
        setCalculo({
            ...calculo, resultado: (calculo.b * calculo.b)
        })
    }

    const ac = () => {
        setCalculo({
            ...calculo, resultado: (calculo.a="",calculo.b="")
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
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={subtracao}>
                    <Text style={styles.textButton}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={multiplicacao}>
                    <Text style={styles.textButton}>*</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.alinhamento}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={divisao}>
                    <Text style={styles.textButton}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={restoDivisao}>
                    <Text style={styles.textButton}>%</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={exponencial}>
                    <Text style={styles.textButton}>a^b</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.alinhamento}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={aElev}>
                    <Text style={styles.textButton}>a²</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={bElev}>
                    <Text style={styles.textButton}>b²</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ac}>
                    <Text style={styles.textButton}>AC</Text>
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
        marginLeft:"15%",
        marginTop:"20%",
        marginBottom: "30%",
        paddingTop:"5%",
        paddingBottom:20,
        borderWidth:2,
        width: "70%",
        borderRadius:10,
      },

    resultado:{
        borderWidth:1,
        width:"70%",
        height: "14%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,
        textAlign:"center",
        paddingTop:"7%",
        backgroundColor:"white",
    },

    input:{
        width:"40%",
        borderWidth:1,
        borderRadius: 20,
        marginLeft:5,
        marginRight:5,
        textAlign:"center",
        height:40,
        backgroundColor:"white",
        color:"purple",
    },

    button:{
        backgroundColor:"#D0F7FF",
        borderWidth:1,
        width: 60,
        height: 60,
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
    },

    textButton:{
        fontSize: 20,
    },

    alinhamento:{
        flexDirection: "row",
    }
})