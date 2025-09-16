import { StyleSheet, Text, View , Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/apis'
import { useState , useEffect } from 'react'

const search = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const { data: movies, loading: movieLoading, error: movieError , refetch:loadMovies , reset:reset } = useFetch(() => fetchMovies({
    query: searchQuery
  }))

  useEffect(() => {
    const func = async()=>{
      if(searchQuery.trim()){
        await loadMovies()
      }

      else{
        reset()
      }
    }
    func()
  
    
  }, [searchQuery])
  

  return (
    <View className='flex-1 bg-slate-900'>
      <Image className='w-full flex-1 absolute z-0' resizeMode='cover' source={images.bg} />

        <FlatList data={movies} 
        
        keyExtractor={(item)=>item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:"center",
          gap:16,
          marginVertical:16


        }}

        contentContainerStyle={{
          paddingBottom:100 
        }}

        ListHeaderComponent={
          <>
          
          <View className='flex-row w-full justify-center mt-20'> 

            <Image source={icons.logo} />

          </View>

          <View className='my-5'>
            <SearchBar placeholder='Search movies...' value={searchQuery} onChangeText={(text:string)=>setSearchQuery(text)}/>
          </View>

          {movieLoading && (
            <ActivityIndicator className='my-3' size={'large'} color="#0000ff" />
          )}

          {movieError && (

            <Text>Something Error Happened</Text>
          )}

          {!movieError && !movieLoading && searchQuery.trim()  && (
            <Text className='text-white font-bold'>Search reasult for {" "}
            <Text className='text-purple-500'>{searchQuery}</Text>
            </Text>
            
          )}
          
          </>
        }
        
        renderItem={({item})=>(
          <MovieCard {...item}
           />
        )} />

    </View>
  )
}


export default search


