import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export function Title(){
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>HEALTH NATIVE</Text>
        </View>
    )
}