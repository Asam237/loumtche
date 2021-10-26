import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLOR, SPACING } from "../../assets/themes/global.themes";

export const MyInput = (props: any) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(e: any) => props.onChangeText!(e)} secureTextEntry={props.mySecureTextEntry} placeholder={props.myPlaceHolder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: SPACING.small,
        backgroundColor: COLOR.gray,
        shadowOpacity: SPACING.small
    }
})