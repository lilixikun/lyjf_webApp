import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { color } from '../../utils'

export default class HotelCard extends PureComponent {

    static defaultProps = {
        item: {}
    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.shopCard}>
                <Image style={styles.img} source={{ uri: item.goodsImg || "" }} />
                <View style={styles.cardContent}>
                    <Text style={styles.catName}>{item.goodsName}</Text>
                    <View>
                        <Text style={{ color: color.red, fontSize: 18 }}>{item.shopCredit}玩呗</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text style={{ color: color.base, fontSize: 14 }}>约 ¥{item.shopPrice}</Text>
                            <View style={{ flexDirection: "row", fontSize: 12 }}>
                                <Text style={{ color: color.theme }}>{item.virtualSales}</Text>
                                <Text>已售</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shopCard: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        height: 150,
        padding: 20,
    },
    img: {
        width: 110,
        height: 110,
        marginRight: 15,
        borderRadius: 4,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
    },
    catName: {
        color: color.black,
        fontSize: 16,
    }
});