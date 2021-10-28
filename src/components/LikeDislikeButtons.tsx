import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface LikeDislikeButtonsProps {}

const LikeDislikeButtons: React.FC<LikeDislikeButtonsProps> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btn_regular}>
          <Ionicons name="close" size={48} style={styles.dislike} />
        </View>
        <View style={styles.btn_small}>
          <Ionicons name="star" size={18} style={styles.superlike} />
        </View>
        <View style={styles.btn_regular}>
          <Ionicons name="heart" size={48} style={styles.like} />
        </View>
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
