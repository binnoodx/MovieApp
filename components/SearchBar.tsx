import { View, Text , Image , TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { icons } from '@/constants/icons'
interface Props {
    placeholder:string,
    onPress?:()=>void,
    value:string,
    onChangeText:(text:string)=>void
}
const SearchBar = ({placeholder , onPress , value , onChangeText}:Props) => {


  return (
    <View className='flex-row  items-center bg-slate-600 rounded-full px-5 py-4'>

      <Image source={icons.search} className='' resizeMode='contain' tintColor="#708090"></Image>


      <TextInput onPress={onPress} value={value} onChangeText={onChangeText} className='text-xl text-slate-300 px-5 w-full font-normal' placeholder={placeholder} placeholderTextColor="slate" />
    </View>
  )
}

export default SearchBar