import React from "react"
import { View, StyleSheet } from "react-native"
import { SPACING } from "../../assets/themes/global.themes"

export const Layout = (props: any) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.small
    }
})