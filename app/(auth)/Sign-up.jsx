import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import Formfield from '../../components/Formfield'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: '',
        password: ''

    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[82vh] mx-4 px-22 my-6">
                    <Image source={images.logo}
                        resizeMode='contain'
                        className="w-[138px] h-[35px]"
                    />
                    <Text className="text-2xl font-semibold font-psemibold text-white mt-10">
                        Sign up to Aora
                    </Text>

                    <Formfield
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => { setForm({ ...form, username: e }) }}
                        otherStyles="mt-7"
                        keyboardType="text"
                    />
                    <Formfield
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => { setForm({ ...form, email: e }) }}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <Formfield
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => { setForm({ ...form, password: e }) }}
                        otherStyles="mt-7"
                        keyboardType="password"
                    />

                    <CustomButton
                        title={"sign up"}
                        containerStyles={"mt-7"}
                        handlePress={() => { }}
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg font-pregular text-gray-100">Have an account already?</Text>
                        <Link href={'/Sign-in'} className='text-lg text-secondary font-psemibold'>Sign in</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({})