import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadLine: {
    color: '#333',
    fontSize : 21,
    fontWeight: 'bold',
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:13,
  },

  avatarContainer: {
    borderRadius: 10,
    height: 89,
    width: 89,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 55,
    width: 55,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  }

});
