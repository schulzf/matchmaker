import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../utils/globalStyles';

interface CandidateCardProps {}

const CandidateCard: React.FC<CandidateCardProps> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card_container}>
        <View style={styles.card_photo}></View>
        <View style={[globalStyles.mt2, globalStyles.p1]}>
          <Text style={styles.text_candidate_name}>Name of Candidate</Text>
          <Text style={styles.text_candidate_age}>26</Text>
        </View>
      </View>
    </View>
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
    backgroundColor: '#FFFFFF',
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
