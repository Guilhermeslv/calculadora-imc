import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { ResultImc } from "../ResultImc"
import { styles } from "./style";

export function Form(){

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular Imc")

    function imcCalculator(){
        let valid = validationImc()
        if (valid){
            setImc((weight/(height*height)).toFixed(2))            
            setMessageImc("Seu imc é igual a:")
            setTextButton("Calcular novamente")
        }else{
            setImc(null)
            setTextButton("Calcular Imc")
            setMessageImc("Você precisa preencher o peso e altura")
        }
        setHeight('')
        setWeight('')
    }

    function validationImc(){
        if(weight != '' && height!= ''){
            return true
        }else{
            return false
        }
    }

    return (
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>                    
                    <TextInput
                    style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                    ></TextInput>

                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                    style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 75.365"
                        keyboardType="numeric"
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={()=>imcCalculator()}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
    )
}