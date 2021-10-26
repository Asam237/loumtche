import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { COLOR } from "../../assets/themes/global.themes"
import { Layout } from "../layout/Layout.screen"

export const Signup = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Layout>

            </Layout>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.primaryColor
    }
})