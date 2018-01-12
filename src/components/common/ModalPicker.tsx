import * as React from 'react';
import { StyleSheet, View, Modal, Text, ModalProperties, ViewStyle, TextStyle } from 'react-native';

let componentIndex = 0;

export interface ModalPickerProps extends ModalProperties {
    data:                      Array<any>,
    onChange:                  () => void,
    initValue:                 string,
    style:                     ViewStyle,
    selectStyle:               ViewStyle,
    selectTextStyle:           TextStyle,
    optionStyle:               ViewStyle,
    optionTextStyle:           TextStyle,
    optionContainerStyle:      ViewStyle,
    sectionStyle:              ViewStyle,
    sectionTextStyle:          TextStyle,
    cancelContainerStyle:      ViewStyle,
    cancelStyle:               ViewStyle,
    cancelTextStyle:           TextStyle,
    overlayStyle:              ViewStyle,
    cancelText:                string,
    disabled:                  boolean,
    backdropPressToClose:      boolean,
}

const defaultProps: ModalPickerProps = {
    data:                      [],
    onChange:                  () => {},
    initValue:                 'Select me!',
    animationType:             'slide',
    style:                     {},
    selectStyle:               {},
    selectTextStyle:           {},
    optionStyle:               {},
    optionTextStyle:           {},
    optionContainerStyle:      {},
    sectionStyle:              {},
    sectionTextStyle:          {},
    cancelContainerStyle:      {},
    cancelStyle:               {},
    cancelTextStyle:           {},
    overlayStyle:              {},
    cancelText:                'cancel',
    disabled:                  false,
    backdropPressToClose:      false,
};

class ModalPicker extends React.Component<Object, Object> {

    static defaultProps = defaultProps;

    render() {
        return (
            <View>
                <Modal animationType ='slide' transparent={true} >
                    <Text>
                        dsaojdasoijdasokdpoaskdpoaksopdkap
                    </Text>
                </Modal>
            </View>
        );
    }
}

export default ModalPicker;
