import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from "./style";
import logo from "../../../img/logo.png";

type Props = {
    valor: any,
    data: any
}

export default function QuotationsItems({ valor, data }: Props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logo} source={logo}/>
                    <Text style={styles.dayCotation}>{ data }</Text>
                </View>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$ { valor }</Text>
            </View>
        </View>
    )
}