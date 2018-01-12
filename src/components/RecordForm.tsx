import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Divider,
  Tile,
  FormInput,
  FormLabel,
  FormValidationMessage,
  Button,
  Text,
  ButtonGroup,
} from 'react-native-elements';

import { recordFormUpdate } from '../actions';
import * as workoutImage from '../../img/crossfit_image.png';

class RecordForm extends React.Component<object, object> {

  state = {
    selectedIndex: 0,
  };

  updateIndex (selectedIndex: number) {
    this.setState({selectedIndex})
  }  

  render() {
    const buttons = ['Hello', 'World', 'Buttons'];

    return (
      <View style={{ flex: 1 }}>
        <Tile
          imageSrc={workoutImage}
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption={this.props.nickname}
        />

        <ButtonGroup 
          containerStyle={{ flex: 1}}
          onPress={this.updateIndex.bind(this)}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
        />

        <View style={styles.rowContainer}>
          <View style={styles.rowCell}>
            <FormLabel>Timestamp</FormLabel>
            <FormInput
              maxLength={10}
              onChangeText={input =>
                this.props.recordFormUpdate({ prop: 'nickname', value: input })
              }
            />
          </View>

          <View style={styles.rowCell}>
            <FormLabel>Timestamp</FormLabel>
            <FormInput
              onChangeText={input =>
                this.props.recordFormUpdate({ prop: 'nickname', value: input })
              }
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowCell}>
            <FormLabel>Timestamp</FormLabel>
            <Text>{new Date().getDate()}</Text>
          </View>

          <View style={styles.rowCell}>
            <FormLabel>Timestamp</FormLabel>
            <Text h2>{new Date().getDate()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  rowCell: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  const { nickname } = state.recordForm;

  return { nickname };
};

export default connect(mapStateToProps, { recordFormUpdate })(RecordForm);
