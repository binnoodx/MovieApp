import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {

    const PillTabs = ({ focused, title, icon }: any) => {

        if (focused) {
            return (
                <>                   
                <ImageBackground
                        source={images.highlight}
                        className='flex flex-row w-full min-w-[102px] flex-1 mt-4 min-h-12 justify-center items-center rounded-full overflow-hidden'>
                        <Image source={icon} tintColor="#151312" className='size-5' />
                        <Text className='text-purple-700 ml-2 font-semibold'>{title}</Text>
                    </ImageBackground>
                </>
            )
        }
        else{
            return(
                <>
                <View className=' flex-1 items-center mt-3'>
                    <Image source={icon}></Image>
                </View>
                </>
            )
        }

    }


    return (
        <Tabs screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:"#0f0D23",
                
            }
        }}>

            
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <>
                            <PillTabs focused={focused} icon={icons.home} title="Home" />
                        </>
                    )
                }}
            />


            <Tabs.Screen
                name='search'
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: ({ focused }) => (
                        <>

                            <PillTabs focused={focused} icon={icons.search} title="Search" />

                        </>
                    )
                }}

            />
            <Tabs.Screen

                name='saved'
                options={{
                    headerShown: false,
                    title: "Saved",
                    tabBarIcon: ({ focused }) => (
                        <>

                            <PillTabs focused={focused} icon={icons.save} title="Saved" />

                        </>
                    )
                }}

            />
            <Tabs.Screen

                name='profile'
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <>

                            <PillTabs focused={focused} icon={icons.person} title="Profile" />

                        </>
                    )
                }}

            />


        </Tabs>
    )
}

export default _layout