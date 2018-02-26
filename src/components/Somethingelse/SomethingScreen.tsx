import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IAppState } from '../../state/ducks';
import { IUser } from '../../state/ducks/user/types';
import { getUserViewState } from '../../state/ducks/user/selectors';
import { IUserActions } from '../../state/ducks/user/actions';
import { userActions } from '../../state/ducks/user';

export interface ISomethingScreenProps {
  user: IUser;
  userActions: IUserActions;
}

const TAG = 'SomethingScreen';

class SomethingScreen extends React.Component<ISomethingScreenProps> {
  render() {
    return (
      <View>
        <Text> Im Something Else </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  user: getUserViewState(state.user),
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(dispatch, userActions),
});

export default connect(mapStateToProps, mapDispatchToProps)(SomethingScreen);
