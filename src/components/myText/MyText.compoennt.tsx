import React from "react"
import { StyleSheet, Text } from "react-native"

const TEXT_STYLE = {
    header: "header",
    title: "title",
    subTitle: "subTitle"
}

const changeByVariant = (variant: any) => {
    if (variant === TEXT_STYLE.header) {
        return styles.header
    }
    if (variant === TEXT_STYLE.title) {
        return styles.title
    }
    if (variant === TEXT_STYLE.subTitle) {
        return styles.subTitle
    }
}

export const MyText = (props: any) => {
    const myStyles = changeByVariant(props.variant)
    return <Text style={[myStyles]}>{props.myText}</Text>

}

const styles = StyleSheet.create({
    header: {},
    subTitle: {},
    title: {}
})