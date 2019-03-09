import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { color } from '../../utils'

export default class TravelCard extends PureComponent {

    static defaultProps = {
        item: {}
    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.travelcard}>
                <Image style={styles.img} source={{ uri: item.imageList[0].url }} />
                <View style={styles.cardContent}>
                    <Text style={styles.travelName}>{item.travelName}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ color: color.red, fontSize: 18 }}>{item.singleCost}玩呗</Text>
                            <Text style={{ color: color.base, fontSize: 16 }}>约¥{item.singleCost}</Text>
                        </View>
                        <View style={{ flexDirection: "row", fontSize: 14 }}>
                            <Text>需提前</Text>
                            <Text style={{ color: color.theme }}>{item.preBuyDays}</Text>
                            <Text>天</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    travelcard: {
        flex: 1,
        flexDirection: "column",
        height: 382,
        paddingHorizontal: 20,
        marginTop: 16,
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 8,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
    },
    cardContent: {
        flex: 1,
        justifyContent: "space-around",
        paddingVertical: 15,
        fontSize: 16,
        // alignItems: "center",
    },
    travelName: {
        color: color.black,
        fontSize: 16,
    },
    address: {
        fontSize: 12,
        color: color.color6B2
    }
});