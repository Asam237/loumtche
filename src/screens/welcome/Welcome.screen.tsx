import React from "react"
import { View, Text } from "react-native"
import { MyText } from "../../components/myText/MyText.compoennt"

export const Welcome = () => {
    return (
        <View>
            <MyText variant="title" myText="My texte here !" />
        </View>
    )
}