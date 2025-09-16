import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/apis";
import React from "react";
import MovieCard from "@/components/MovieCard";

export default function Index() {

  const Router = useRouter()
  const { data: movies, loading: movieLoading, error: movieError } = useFetch(() => fetchMovies({
    query: ""
  }))

  return (
    <View className="bg-slate-900 flex-1">

      <Image source={images.bg} className="absolute w-full z-0"></Image>

      <ScrollView className="flex-1 px-5 " showsHorizontalScrollIndicator={false} contentContainerStyle={{
        minHeight: "100%", paddingBottom: 10
      }}>

        <Image source={icons.logo} className="mt-20 mx-auto mb-10 w-12 h-10"></Image>

        {movieLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"

          />
        ) : movieError ? (<Text>Error : {movieError?.message}</Text>) : (
          <View className="flex-1 mt-5">

            
            <>

              <Text className="text-lg text-white font-bold mt-5 mb-3 ">Trending Movies</Text>

            </>

            <FlatList

              data={movies}
              renderItem={({ item }) => (
                  <MovieCard

                  {...item}                  
                  
                />
              )}
              keyExtractor={(item)=>item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent:"flex-start",
                gap:20,
                paddingRight:5,
                marginBottom:10
              }}

              className="mt-2 pb-32"

              scrollEnabled={false}


            />




          </View>
        )}




      </ScrollView>


    </View>
  );
}
