import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ExploreHeader from '../components/ExploreHeader';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView>
      <ExploreHeader />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
