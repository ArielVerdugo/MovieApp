import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';



export function MovieDetails() {
    return (
      <View style={styles.container}>
        <Text style={[typography.title, styles.title, { color: colors.text }]}>
          {"Holis"}
        </Text>
      </View>
    );
  }