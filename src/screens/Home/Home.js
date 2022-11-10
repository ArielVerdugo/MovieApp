import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View,ActivityIndicator, FlatList,Image} from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';

import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';

import { UserController } from '@/controllers';
import { getMovies } from '@/controllers/MovieController';
import { useQuery } from '@tanstack/react-query';
import { IMAGE_URL, routes } from '@/controllers/routes';


const getManualMovies = () => async(dispatch, _, {networkService }) =>{

  const { data : { results } } = await getMovies();
  console.log(results);
  return results;
};


export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  const{isLoading,data} = useQuery(['allMovies'],getMovies);
  //<Text>{data.data.results[0].id}</Text>
 
  if (isLoading) {
    return <ActivityIndicator />
  }
 

  const onMovie = ( { item} ) => (
    <View style={ styles.item } >
      <View style={ styles.avatarContainer } >
        <Image  style={ styles.avatar } source={{uri: `${IMAGE_URL + item.backdropPath}`}} />
      </View>
      <Text style={ styles.name } >{item.originalTitle}</Text>
    </View>
    
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

