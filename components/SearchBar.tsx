import { View, Text , Image , TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { icons } from '@/constants/icons'
interface Props {
    placeholder:string,
    onPress?:()=>void
}
const SearchBar = ({placeholder , onPress}:Props) => {


  return (
    <View className='flex-row  items-center bg-slate-600 rounded-full px-5 py-4'>

      <Image source={icons.search} className='' resizeMode='contain' tintColor="#ffffff"></Image>


      <TextInput onPress={onPress} className='text-xl px-5 w-full font-normal' placeholder={placeholder} placeholderTextColor="white" />
    </View>
  )
}

export default SearchBar