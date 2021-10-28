import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ExploreHeader from '../components/ExploreHeader';
import CandidateSelection from '../containers/CandidateSelection';
import {globalStyles} from '../utils/globalStyles';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={globalStyles.fullheight_bg_w}>
      <View style={styles.container}>
        <ExploreHeader />
        <CandidateSelection />
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
