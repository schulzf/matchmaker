import React, {useEffect, useState} from 'react';
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

export type Candidate = {
  name: string;
  age: number;
};

interface CandidateCardProps {
  nextCandidate: () => void;
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  nextCandidate,
}) => {
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
    opacity: 1 - Math.abs(translateX.value) / 2000,
  }));

  const like_threshold = screen_width / 1.8;
  const dislike_threshold = (screen_width / 1.8) * -1;

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX * 0.8;

      if (event.translationX < dislike_threshold) {
        runOnJS(setSentimentColor)('#de460a50');
      }
      if (event.translationX > like_threshold) {
        runOnJS(setSentimentColor)('#5abb8850');
      }
    },
    onEnd: event => {
      if (
        event.translationX > dislike_threshold &&
        event.translationX < like_threshold
      ) {
        translateX.value = withTiming(0, {duration: 600}, () => {
          runOnJS(setSentimentColor)('#FFF');
        });
      }
      if (event.translationX < dislike_threshold) {
        console.warn('DISLIKE');
        translateX.value = withTiming(
          screen_width * Math.sign(event.translationX),
          {duration: 200},
          () => {
            runOnJS(nextCandidate)();
            runOnJS(setSentimentColor)('#FFF');
          },
        );
      }
      if (event.translationX > like_threshold) {
        console.warn('LIKE');
        translateX.value = withTiming(
          screen_width * Math.sign(event.translationX),
          {duration: 200},
          () => {
            runOnJS(nextCandidate)();
            runOnJS(setSentimentColor)('#FFF');
          },
        );
      }
    },
  });

  useEffect(() => {
    translateX.value = 0;
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.wrapper, cardStyle]}>
        <View
          style={[styles.card_container, {backgroundColor: sentimentColor}]}>
          <View style={styles.card_photo}></View>
          <View style={[globalStyles.mt2, globalStyles.p1]}>
            <Text style={styles.text_candidate_name}>{candidate.name}</Text>
            <Text style={styles.text_candidate_age}>{candidate.age}</Text>
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
    position: 'absolute',
    width: '100%',
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
    shadowOpacity: 0.08,
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
