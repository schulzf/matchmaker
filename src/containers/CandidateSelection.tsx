import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CandidateCard from '../components/CandidateCard';
import LikeDislikeButtons from '../components/LikeDislikeButtons';

interface CandidateSelectionProps {}

const CandidateSelection: React.FC<CandidateSelectionProps> = () => {
  return (
    <Fragment>
      <CandidateCard />
      <LikeDislikeButtons />
    </Fragment>
  );
};

export default CandidateSelection;

const styles = StyleSheet.create({});
