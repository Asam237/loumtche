import React from "react"
import { View, Text } from "react-native"
import { MyButton } from "../../components/myButton/MyButton.component"
import { MyText } from "../../components/myText/MyText.compoennt"

export const Welcome = () => {
    return (
        <View>
            <MyText variant="title" myText="My texte here !" />
            <View style={{ height: 40, width: 100 }}>
                <MyButton myColor="red" myTitle="continuer" myVariant="subTitle" myColorText="white" />
            </View>
        </View>
    )
}