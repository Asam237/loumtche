import React from "react"
import { Image, SafeAreaView, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { COLOR, SPACING } from "../../assets/themes/global.themes"
import { MyButton } from "../../components/myButton/MyButton.component"
import { MyInput } from "../../components/myInput/MyInput.component"
import { MyText } from "../../components/myText/MyText.compoennt"
import { LANGUAGES } from "../../constants/languages"
import { Layout } from "../layout/Layout.screen"
import enter from "../../assets/img/enter.png"


export const Signup = (navigation: any) => {

    const toHome = () => {
        return navigation.navigation.navigate("home")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Layout>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={enter} style={{ width: 140, height: 140 }} />
                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ height: 45 }}>
                        <MyInput myPlaceHolder={LANGUAGES.signup.name} />
                    </View>
                    <View style={{ height: 45, marginTop: SPACING.xmedium }}>
                        <MyInput myPlaceHolder={LANGUAGES.signup.email} />
                    </View>
                    <View style={{ height: 45, marginTop: SPACING.xmedium }}>
                        <MyInput mySecureTextEntry={true} myPlaceHolder={LANGUAGES.signup.password} />
                    </View>
                    <View style={{ height: 45, marginTop: SPACING.xmedium }}>
                        <MyButton navigationName={() => null} myVariant="subTitle" myColor={COLOR.secondaryColor} myTitle={LANGUAGES.signup.signup} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: SPACING.medium }}>
                        <MyText myVariant="subTitle" myText="Vous avez deja un compte ?" />
                        <TouchableOpacity onPress={() => toHome()} style={{ marginLeft: SPACING.xsmall }}>
                            <MyText myVariant="subTitle" myColorText="red" myText="Inscrivez vous ici" />
                        </TouchableOpacity>
                    </View>
                </View>
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