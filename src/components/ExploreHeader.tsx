import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {globalStyles, theme_color} from '../utils/globalStyles';

interface ExploreHeaderProps {}

const ExploreHeader: React.FC<ExploreHeaderProps> = () => {
  return (
    <View
      style={[
        styles.container,
        globalStyles.flex_row_space_between,
        globalStyles.bg_white,
        globalStyles.p2,
      ]}>
      {/* LEFT */}
      <View style={[globalStyles.flex_row_start, globalStyles.w_one_third]}>
        <MaterialIcon
          name="add-a-photo"
          size={24}
          style={globalStyles.main_color}
        />
        <Text
          style={[
            globalStyles.ml1,
            globalStyles.font_bold,
            globalStyles.main_color,
          ]}>
          Add photo
        </Text>
      </View>
      {/* CENTER */}
      <View style={[globalStyles.flex_row_center, globalStyles.w_one_third]}>
        <Text>Logo</Text>
      </View>
      {/* RIGHT */}
      <View style={[globalStyles.flex_row_end, globalStyles.w_one_third]}>
        <SimpleLineIcons name="equalizer" size={24} />
      </View>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
  },
});
