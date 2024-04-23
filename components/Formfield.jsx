import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Formfield = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`${otherStyles} space-y-2`}>
            <Text className="text-base font-pmedium text-gray-100">{title}</Text>

            <View className="border-2 border-black-200 w-full h-16 rounded-2xl px-4 items-center 
            focus:border-secondary-200 flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor={"#7b7b8b"}
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
            </View>
        </View>
    )
}

export default Formfield