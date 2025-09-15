import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View , Image , ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {

  const Router = useRouter()

  return (
    <View className="bg-slate-900 flex-1">

      <Image source={images.bg} className="absolute w-full z-0"></Image>

          <ScrollView className="flex-1 px-5 " showsHorizontalScrollIndicator={false} contentContainerStyle={{
            minHeight:"100%",paddingBottom:10
          }}>

            <Image source={icons.logo} className="mt-20 mx-auto mb-10 w-12 h-10"></Image>

            <View className="flex-1 mt-5">

              <SearchBar 
                  onPress={()=>Router.push("/search")}
                  placeholder = "Search for movie"
              
              />

            </View>


          </ScrollView>


    </View>
  );
}
  