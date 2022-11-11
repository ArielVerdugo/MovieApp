import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View,ActivityIndicator, FlatList,Image, TouchableHighlight} from 'react-native';
import { useSelector } from 'react-redux';

import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';

import { getMovies } from '@/controllers/MovieController';
import { useQuery } from '@tanstack/react-query';
import { IMAGE_URL, routes } from '@/controllers/routes';
import { NAVIGATION } from '@/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






export function Home({ navigation }) {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  const{isLoading,data} = useQuery(['allMovies'],getMovies);
 
  if (isLoading) {
    return <ActivityIndicator />
  }
 

  const onMovie = ( { item} ) => (
    <TouchableHighlight /*onPress={() => navigation.navigate(NAVIGATION.login)}*/>
      <View style={ styles.item }>
        <View style={ styles.avatarContainer } >
          <Image  style={ styles.avatar } source={{uri: `${IMAGE_URL + item.backdropPath}`}} />
        </View>
        <Text style={ styles.name } >{item.originalTitle}</Text>
      </View>
    </TouchableHighlight>
    
  );

  const headerComponent = () => (
    <Text style={styles.listHeadLine}>Películas</Text>
  );

  const emptyComponent = () => (
    <Text>No hay pelis disponibles capo</Text>
  );

  const itemSeparator = () => (
    <View style ={styles.separator} />
  );



  return (
     <View>
       <FlatList
          ListHeaderComponentStyle = { styles.listHeader }
          ListHeaderComponent = { headerComponent }
          data = {data.data.results}
          renderItem = { onMovie }
          ItemSeparatorComponent = { itemSeparator }
          ListEmptyComponent = { emptyComponent }
       />
     </View>
   );

 
}

