import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

interface ExploreHeaderProps {}

const ExploreHeader: React.FC<ExploreHeaderProps> = () => {
  return (
    <View style={styles.view_container}>
      <Icon name="add-a-photo" type="MaterialIcons" />
      <View>
        <Text>Add icon</Text>
      </View>
      <View>
        <Text>Logo</Text>
      </View>
      <View>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  view_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
