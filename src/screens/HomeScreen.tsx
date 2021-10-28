import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CandidateCard from '../components/CandidateCard';
import ExploreHeader from '../components/ExploreHeader';
import LikeDislikeButtons from '../components/LikeDislikeButtons';
import {globalStyles} from '../utils/globalStyles';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={globalStyles.fullheight_bg_w}>
      <View style={styles.container}>
        <ExploreHeader />
        <CandidateCard />
        <LikeDislikeButtons />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
