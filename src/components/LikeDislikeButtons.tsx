import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface LikeDislikeButtonsProps {}

const LikeDislikeButtons: React.FC<LikeDislikeButtonsProps> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn_regular}
          onPress={() => console.warn('DISLIKE')}>
          <Ionicons name="close" size={48} style={styles.dislike} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_small}
          onPress={() => console.warn('SUPERLIKE')}>
          <Ionicons name="star" size={18} style={styles.superlike} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_regular}
          onPress={() => console.warn('LIKE')}>
          <Ionicons name="heart" size={48} style={styles.like} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeDislikeButtons;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
  },
  btn_regular: {
    zIndex: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btn_small: {
    width: 33,
    height: 33,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  like: {
    color: '#5abb88',
  },
  superlike: {
    color: '#0a9fde',
  },
  dislike: {
    color: '#De460a',
  },
});
