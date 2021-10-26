import React from "react"
import { View, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native"
import { COLOR, SPACING } from "../../assets/themes/global.themes"
import { MyButton } from "../../components/myButton/MyButton.component"
import { MyText } from "../../components/myText/MyText.compoennt"
import { LANGUAGES } from "../../constants/languages"
import { Layout } from "../layout/Layout.screen"
import magasin from "../../assets/img/magasin.png"

const WIDTH = 150;
const HEIGHT = 45;

export const Welcome = (navigation: any) => {
    const toHome = () => {
        return navigation.navigation.navigate("signup")
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.primaryColor} />
            <Layout>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image source={magasin} style={{ width: 180, height: 180 }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MyText myText={LANGUAGES.welcome.title} variant="title" myColorText={COLOR.secondaryColor} />
                    <MyText myText={LANGUAGES.welcome.subTitle} myLineHeight={SPACING.xlarge} myTextAlign="center" variant="subTitle" myColorText={COLOR.secondaryColor} />
                    <View style={{ flexDirection: 'row', height: HEIGHT, width: WIDTH, marginTop: SPACING.medium }}>
                        <MyButton navigationName={() => toHome()} myVariant="subTitle" myColor={COLOR.secondaryColor} myTitle={LANGUAGES.welcome.getStarted} />
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