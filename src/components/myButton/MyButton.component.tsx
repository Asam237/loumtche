import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SPACING } from "../../assets/themes/global.themes";
import { MyText } from "../myText/MyText.compoennt";

export const MyButton = (props: any) => {
    return (
        <View style={[styles.container, { backgroundColor: props.myColor }]}>
            <TouchableOpacity style={styles.container__opacity} onPress={() => props.navigationName()}>
                <MyText myText={props.myTitle} variant={props.myVariant} myColorText={props.myColorText} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: SPACING.medium
    },
    container__opacity: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SPACING.full
    }
})