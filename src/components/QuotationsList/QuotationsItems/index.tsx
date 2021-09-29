import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from "./style";
import logo from "../../../img/logo.png";

export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logo} source={logo}/>
                    <Text style={styles.dayCotation}>29/09/2021</Text>
                </View>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 2235.221</Text>
            </View>
        </View>
    )
}