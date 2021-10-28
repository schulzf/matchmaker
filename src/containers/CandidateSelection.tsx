import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CandidateCard, {Candidate} from '../components/CandidateCard';
import CardStack from '../components/CardStack';
import LikeDislikeButtons from '../components/LikeDislikeButtons';
import {fakeCandidates} from '../utils/fakeCandidates';

interface CandidateSelectionProps {}

const CandidateSelection: React.FC<CandidateSelectionProps> = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(fakeCandidates);
  const nextCandidate = () => {
    let temp = candidates;
    temp.shift();
    setCandidates([...temp]);
  };

  return (
    <View style={styles.container}>
      {candidates[0] && (
        <CandidateCard
          nextCandidate={nextCandidate}
          candidate={candidates[0]}
        />
      )}
      {candidates[1] && <CardStack candidate={candidates[1]} />}
      <LikeDislikeButtons nextCandidate={nextCandidate} />
    </View>
  );
};

export default CandidateSelection;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
});
