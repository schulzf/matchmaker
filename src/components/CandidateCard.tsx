import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {globalStyles} from '../utils/globalStyles';

interface CandidateCardProps {}

const CandidateCard: React.FC<CandidateCardProps> = () => {
  const [sentimentColor, setSentimentColor] = useState<
    '#FFF' | '#5abb8850' | '#de460a50'
  >('#FFF');

  const {width: screen_width} = Dimensions.get('window');

  const translateX = useSharedValue(0);
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotateZ: `${translateX.value / 15}deg`,
      },
      {
        scale: 1 - Math.abs(translateX.value) / 1000,
      },
    ],
    opacity: 1 - Math.abs(translateX.value) / 500,
  }));

  const like_threshold = screen_width / 2.4;
  const dislike_threshold = (screen_width / 2.4) * -1;

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
      if (
        event.translationX > dislike_threshold &&
        event.translationX < like_threshold
      ) {
        runOnJS(setSentimentColor)('#FFF');
      }
      if (event.translationX < dislike_threshold) {
        runOnJS(setSentimentColor)('#de460a50');
      }
      if (event.translationX > like_threshold) {
        runOnJS(setSentimentColor)('#5abb8850');
      }
    },
    onEnd: event => {
      if (event.translationX < dislike_threshold) {
        console.warn('DISLIKE');
      }
      if (event.translationX > like_threshold) {
        console.warn('LIKE');
      }
      translateX.value = withTiming(0);
      runOnJS(setSentimentColor)('#FFF');
    },
  });

  useEffect(() => {
    console.log(translateX.value);
  }, [translateX.value]);

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.wrapper, cardStyle]}>
        <View
          style={[styles.card_container, {backgroundColor: sentimentColor}]}>
          <View style={styles.card_photo}></View>
          <View style={[globalStyles.mt2, globalStyles.p1]}>
            <Text style={styles.text_candidate_name}>Name of Candidate</Text>
            <Text style={styles.text_candidate_age}>26</Text>
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default CandidateCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    height: '75%',
  },
  card_container: {
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 6,
  },
  card_photo: {
    height: '80%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#000',
  },
  text_candidate_name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_candidate_age: {
    fontSize: 14,
    fontWeight: '300',
  },
});
