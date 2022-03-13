import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
}from "react-native";

import { icons, images, SIZES, COLORS, FONTS  } from "../constants";

const Home = ({ navigation }) => {

    const initialCurrentLocation = {
        streetName: "Karapakkam",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rent",
            icon: icons.rent,
        },
        {
            id: 2,
            name: "Sale",
            icon: icons.sale,
        },
    ]

    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const WheelChairData = [
        {
            id: 1,
            name: "With Oxygen For Rental",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.witho21,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "with O2",
                    photo: images.witho21
                },
                {
                    menuId: 2,
                    name: "with O2",
                    photo: images.withouto21
                },
                {
                    menuId: 3,
                    name: "with O2",
                    photo: images.witho21
                },
                {
                    menuId: 4,
                    name: "with O2",
                    photo: images.witho21
                }
            ]
        },
        {
            id: 2,
            name: "Without Oxygen For Rental",
            rating: 4.8,
            categories: [1],
            priceRating: expensive,
            photo: images.withouto21,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "with O2",
                    photo: images.withouto2
                },
                {
                    menuId: 2,
                    name: "with O2",
                    photo: images.withouto2
                },
                {
                    menuId: 3,
                    name: "with O2",
                    photo: images.withouto2
                },
                {
                    menuId: 4,
                    name: "with O2",
                    photo: images.withouto2
                }
            ]
        },
        {
            id: 3,
            name: "With Oxygen For Sale",
            rating: 4.8,
            categories: [2],
            priceRating: expensive,
            photo: images.witho21,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "with O2",
                    photo: images.witho21
                },
                {
                    menuId: 2,
                    name: "with O2",
                    photo: images.witho21
                },
                {
                    menuId: 3,
                    name: "with O2",
                    photo: images.witho21
                },
                {
                    menuId: 4,
                    name: "with O2",
                    photo: images.witho21
                }
            ]
        },
        {
            id: 4,
            name: "Without Oxygen For Sale",
            rating: 4.8,
            categories: [2],
            priceRating: expensive,
            photo: images.withouto21,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 1,
                    name: "with O2",
                    photo: images.withouto21
                },
                {
                    menuId: 2,
                    name: "with O2",
                    photo: images.withouto21
                },
                {
                    menuId: 3,
                    name: "with O2",
                    photo: images.withouto21
                },
                {
                    menuId: 4,
                    name: "with O2",
                    photo: images.withouto21
                }
            ]
        },
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [wheelchairs, setwheelchairs] = React.useState(WheelChairData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category){
        //filter options
        
        let wheelChairList = WheelChairData.filter(a => a.categories.includes(category.id))
        
        setwheelchairs(wheelChairList)
        setSelectedCategory(category)
    }

    function renderHeader() {
        return (
            <View style={{flexDirection: 'row', height: 50, }}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft: SIZES.padding*2,
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={icons.nearby}
                            resizeMode="contain"
                            style={{
                                width:30,
                                height:30
                            }}>

                        </Image>

                </TouchableOpacity>
                <View style={{ flex:1, alignItems:'center', justifyContent:'center',paddingTop:10}}>
                    <View 
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text style={{ fontWeight:'bold',color:COLORS.black,...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingRight: SIZES.padding*2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height:30
                        }}
                    >

                    </Image>

                </TouchableOpacity>

            </View>
        )
    }

    function renderMainCategories(){
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity
                    style={{
                        padding:SIZES.padding,
                        paddingBottom: SIZES.padding*2,
                        backgroundColor: (selectedCategory?.id == item.id)?COLORS.primary:COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems:'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 100,
                            height: 75,
                            borderRadius:25,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor: (selectedCategory?.id == item.id)?COLORS.white:COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width:50,
                                height:50
                            }}
                        >

                        </Image>
                    </View>
                    <Text
                        style={{
                            //marginTop: SIZES.padding,
                            fontWeight:'bold',
                            color: (selectedCategory?.id == item.id)?COLORS.white:COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding*2}}>
                <Text style={{fontWeight:'bold',color:COLORS.black,...FONTS.h1}} >Main</Text>
                <Text style={{fontWeight:'bold',color:COLORS.black,...FONTS.h1}} >Categories</Text>
                
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem = {renderItem}
                    contentContainerStyle={{paddingVertical:SIZES.padding*2}}
                />
            </View>
        )
    }

    function renderWheelChairList(){
        const renderItem = ({item}) => (
            <TouchableOpacity
                style={{
                    marginBottom: SIZES.padding*2,
                }}
                onPress={() => navigation.navigate("Booking", {
                    item,
                    currentLocation,
                })}
            >
                <View
                    style={{
                        marginBottom:SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width:"100%",
                            height:200,
                            borderRadius:SIZES.radius,
                        }}
                    ></Image>
                    <View
                        style = {{
                            position:'absolute',
                            bottom:0,
                            height:50,
                            width:SIZES.width*0.3,
                            backgroundColor:COLORS.white,
                            borderTopRightRadius:SIZES.radius,
                            borderBottomLeftRadius:SIZES.radius,
                            alignItems:'center',
                            justifyContent:'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{fontWeight:'bold',color:COLORS.black,...FONTS.h4}}>{item.duration}</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'bold',color:COLORS.black,...FONTS.body2}}>{item.name}</Text>

                <View
                    style={{
                        marginTop:SIZES.padding,
                        flexDirection:"row"
                    }}
                >
                    <Image
                        source={icons.star}
                        style={{
                            height:20,
                            width:20,
                            tintColor:COLORS.primary,
                            marginRight:10
                        }}
                    ></Image>
                    <Text style={{fontWeight:'bold',color:COLORS.black,...FONTS.body3}}>{item.rating}</Text>

                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={wheelchairs}
                keyExtractor={item => `${item.id}`}
                renderItem ={renderItem}
                contentContainerStyle = {{
                    paddingHorizontal:SIZES.padding*2,
                    paddingBottom: 30,
                }}
            >

            </FlatList>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderWheelChairList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;