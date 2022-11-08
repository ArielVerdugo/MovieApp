import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import { strings } from '@/localization';

import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { typography } from '@/theme';
import { UseGetAllmovies } from '@/actions/UserActions';

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);
  //const{data,isLoading} = UseGetAllmovies();

  //console.log(data);
  return (
    <View style={styles.container}>
      
    </View>
  );
}

/*
{isLoading ? (
        <Text>Loading...</Text>
      ) : results ? (
        data.map((movie,key) =>{
          return(
            <View>
               <Text>{movie.originalTitle}</Text>
            </View>
          );
        })
      ): (
        <Text>No movies</Text>
      ) }
      */