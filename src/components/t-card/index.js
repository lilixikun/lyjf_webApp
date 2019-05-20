import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { color, screen, adapterUtil } from '../../utils'
const baseFont = adapterUtil.unitWidth;
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
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                        <View>
                            <Text style={{ color: color.red, fontSize: 18 }}>{item.creditPirce}玩贝</Text>
                        </View>
                        <View style={{ flexDirection: "row", fontSize: 14 }}>
                            <Text>需提前</Text>
                            <Text style={{ color: color.theme }}>{item.preBuyDays}</Text>
                            <Text>天</Text>
                        </View>
                    </View>
                    <Text style={{ color: color.base, fontSize: 16 }}>约¥{item.singleCost}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    travelcard: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 10,
        marginTop: 20,
    },
    img: {
        width: '100%',
        height: baseFont * 266,
        borderRadius: 8,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
    },

    travelName: {
        marginTop: 10,
        color: color.black,
        fontSize: 16,
    },
    address: {
        fontSize: 12,
        color: color.color6B2
    }
});