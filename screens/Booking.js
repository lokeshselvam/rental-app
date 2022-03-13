import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
}from "react-native";

import { icons, images, COLORS, SIZES, FONTS } from "../constants";

const Booking = ({ route,navigation }) => {

    const scrollX = new Animated.Value(0);
    const [booking, setBooking] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);

    React.useEffect(()=>{
        let {item, currentLocation} = route.params;

        setBooking(item)
        setCurrentLocation(currentLocation)
    })

    function renderHeader() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', height:60 }}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:SIZES.padding*2,
                        paddingTop:SIZES.padding,
                        justifyContent:'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingRight:SIZES.padding*2,
                        paddingTop:SIZES.padding,
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderInfo() {
        return(
            <View>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll = {Animated.event([
                    {nativeEvent:{contentOffset: {x:scrollX}}}
                ], {useNativeDriver: false})}
            >
                {
                    booking?.menu.map((item, index) => (
                        <View
                            key={`menu-${index}`}
                            style={{ alignItems: 'center' }}
                        >
                            <View style={{ height: SIZES.height * 0.35}} >
                                <Image
                                    source={item.photo}
                                    resizeMode="contain"
                                    style={{
                                        width: SIZES.width,
                                        height: '100%'
                                    }}
                                >
                                </Image>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
            <View style={{height:50, justifyContent:'center', alignItems:'center'}}><Text style={{fontWeight:'bold', fontSize:20}}>{booking?.name}</Text></View>
            </View>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return(
            <View
                style={{height:30}}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        height: SIZES.padding
                    }}
                >
                    {booking?.menu.map((item,index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index-1, index, index+1],
                            outputRange: [0.3,1,0.3],
                            extrapolate: 'clamp'
                        })
                        const dotSize = dotPosition.interpolate({
                            inputRange: [index-1, index, index+1],
                            outputRange: [SIZES.base*0.8, 10, SIZES.base*0.8],
                            extrapolate: 'clamp'
                        })
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index-1, index, index+1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: 'clamp'
                        })

                        return(
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}

                </View>
            </View>
        );
    }

    function renderOrder() {
        return(
            <View>
                {
                    renderDots()
                }
 
                <View 
                    style={{
                        backgroundColor: COLORS.white,
                        borderTopLeftRadius: SIZES.radius,
                        borderTopRightRadius: SIZES.radius,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3,
                            borderBottomColor: COLORS.lightGray2,
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text style={{color: COLORS.black, fontWeight:'bold',...FONTS.h3}}>Item in Cart</Text>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            style = {{
                            width: 50,
                            backgroundColor: COLORS.lite,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: 25,
                            borderBottomLeftRadius: 25,
                            }}
                        >
                            <Text style={{fontWeight:'bold',color: COLORS.black,...FONTS.body1}}>-</Text>
                        </TouchableOpacity>
                        <View
                            style={{
                            width: 50,
                            backgroundColor: COLORS.lite,
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            <Text style={{color: COLORS.black, fontWeight: 'bold',...FONTS.h2}}>5</Text>
                        </View>
                        <TouchableOpacity
                            style = {{
                            width: 50,
                            backgroundColor: COLORS.lite,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopRightRadius: 25,
                            borderBottomRightRadius: 25,
                            }}
                        >
                            <Text style={{fontWeight:'bold',color: COLORS.black,...FONTS.body1}}>+</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: SIZES.padding * 2,
                            paddingHorizontal: SIZES.padding * 3
                        }}
                    >
                        <View
                            style={{flexDirection:'row'}}
                        >
                            <Image 
                                source={icons.pin}
                                resizeMode="contain"
                                style={{
                                    width:20,
                                    height:20,
                                    tintColor:COLORS.darkgray,
                                }}
                            />
                            <Text style={{fontWeight:'bold',color: COLORS.black,...FONTS.h3}}>Location</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.master_card}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding * 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: SIZES.width * 0.9,
                                padding: SIZES.padding,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                borderRadius: SIZES.radius
                            }}
                            onPress={() => navigation.navigate("OrderDelivery", {
                                booking: booking,
                                currentLocation: currentLocation
                            })}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderInfo()}
            {renderOrder()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Booking;