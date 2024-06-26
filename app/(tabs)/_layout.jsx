import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'
const TabIcon = ({ icon, color, focused, name }) => (
    <View className="items-center justify-center gap-2">
        <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
        />
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
            style={{ color: color }}
        >{name}</Text>
    </View>

)
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopColor: '#232533',
                        borderTopWidth: 1,
                        height: 84
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon
                                color={color}
                                icon={icons.home}
                                focused={focused}
                                name="Home"

                            />
                        )
                    }} />
                <Tabs.Screen
                    name='bookmarks'
                    options={{
                        title: 'Bookmarks',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon
                                color={color}
                                icon={icons.bookmark}
                                focused={focused}
                                name="Bookmark"

                            />
                        )
                    }} />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon
                                color={color}
                                icon={icons.plus}
                                focused={focused}
                                name="Create"

                            />
                        )
                    }} />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused, color }) => (
                            <TabIcon
                                color={color}
                                icon={icons.profile}
                                focused={focused}
                                name="Profile"

                            />
                        )
                    }} />
            </Tabs>
        </>
    )
}

export default TabsLayout