import { StyleSheet, Text, View, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'

import { useState } from 'react'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { fetchMovieDetails } from '@/services/apis'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const Details = () => {

  const [movie, setMovie] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const { id } = useLocalSearchParams()



  useEffect(() => {

    const getData = async () => {
      setLoading(true)

      const data = await fetchMovieDetails(id.toString())
      setMovie(data)
      setLoading(false)

    }
    getData()


  }, [])



  return (
    <ScrollView className='flex-1 bg-slate-900'>

      <Image source={images.bg} className='w-full absolute z-0' />

      {movie && !loading ? <View className='mt-5 px-5'>
        <Image source={{
          uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://placehold.co/600x400/1a1a1a/ffffff.png"
        }}
          className='w-full h-[550px] rounded-lg'
          resizeMode='contain' />

        <Text className='text-xl font-bold text-white mt-5 mb-3'>{movie.title}</Text>
        <View>
          <FlatList

            data={movie.genres}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className=' flex-1  w-full mr-2 items-center justify-center'>
                <Text className='text-white  px-5 py-2 rounded-md  text-sm bg-green-600  font-semibold'> {item.name}</Text>
              </View>
            )}
          />

        </View>
        <View className='flex-row justify-start items-center mt-2'>

          <Text className='text-white font-semibold'>{Math.round(movie.runtime / 60)} hrs  .  {movie.release_date}  .  {movie.original_language.toUpperCase()}</Text>
        </View>

        <View className='flex-row mt-2 justify-center items-center gap-2 bg-slate-800 w-full px-5 py-2 rounded-md'>
          <Image source={icons.star} className='' />
          <Text className='text-white font-semibold'>{Math.round(movie.vote_average)} / 10</Text>
          <Text className='text-white font-semibold'>({movie.vote_count / 1000}K)</Text>
        </View>
        <View className='text-white mt-5'>

          <Text className='text-slate-400 italic'>Overview</Text>
          <Text className='text-white mt-1 font-semibold'>{movie.overview}</Text>

        </View>

        <Text className='text-slate-400 italic mt-5'>More Details : </Text>

        <View className='text-white mt-2'>

          <Text className='text-white mt-1 font-semibold'>Status : {movie.status}</Text>
          <Text className='text-white mt-1 font-semibold'>Original Language : {movie.original_language.toUpperCase()}</Text>
          <Text className='text-white mt-1 font-semibold'>Original Title : {movie.original_title}</Text>
          <Text className='text-white mt-1 font-semibold'>Popularity : {movie.popularity}</Text>
          <Text className='text-white mt-1 font-semibold'>Production Compmpany : {movie.p_name}</Text>

          <Text className='text-white  font-semibold mt-10'>Production Companies : </Text>
         <FlatList
            data={movie.production_companies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className='flex-row flex-1 gap-10 '>
                <Text className='text-white mt-1 mb-2 font-semibold'> {item.name}</Text>

                <Image source={{
                  uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${item.logo_path}` : "https://placehold.co/600x400/1a1a1a/ffffff.png"
                }}
                  className='w-20  ml-5 rounded-lg'
                  resizeMode='cover' />
              </View>
            )}
          />
          <Text className='text-white  font-semibold mt-10'>Production Countries : </Text>
          <FlatList

            data={movie.production_countries}
            keyExtractor={(item) => item.iso_3166_1.toString()}
            renderItem={({ item }) => (
              <View className='flex-row flex-1 gap-10'>
                <Text className='text-white mt-1 font-semibold'> {item.name}</Text>

                <Image source={{
                  uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${item.logo_path}` : "https://placehold.co/600x400/1a1a1a/ffffff.png"
                }}
                  className='w-20  ml-5 rounded-lg'
                  resizeMode='cover' />
              </View>
            )}
          />
          <Text className='text-white mt-5 font-semibold'>Budget : {movie.budget == 0 ? "Not Available" : movie.budget}</Text>
          <Text className='text-white mt-1 font-semibold'>Revenue : {movie.revenue}</Text>
          <Text className='text-white mt-1 font-semibold'>Tagline : {movie.tagline}</Text>
        </View>
      </View> : <ActivityIndicator size='large' color="#ffffff" />}
    </ScrollView>

  )
}

export default Details

const styles = StyleSheet.create({})