import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
} from 'react-native';
import { connect, ActionCreator } from 'react-redux';
import { bindActionCreators, Action } from 'redux';

import { IAppState } from '../state/ducks';
import { ICommonOperations } from '../state/ducks/common/operations';
import { commonOperations } from './../state/ducks/common';
import { getCommonViewState } from '../state/ducks/common/selectors';
import { navigateToRouteWithDispatch } from '../state/navigation/navigationHelper';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IUserOperations } from '../state/ducks/user/operations';
import { userOperations } from './../state/ducks/user';

const TAG = 'LoginScreen';

export interface ILoginScreenProps {
  commonOperations: ICommonOperations;
  userOperations: IUserOperations;
  networkCalls: number;
  navigation: {
    dispatch(action: Action);
    navigate(route: string);
  };
}

interface ILoginState {
  username: string;
  password: string;
}

class LoginScreen extends React.Component<ILoginScreenProps, ILoginState> {
  animatedValue: Animated.Value;

  state: ILoginState = {
    username: '',
    password: '',
  };

  constructor(props) {
    super(props);

    this.onScreenChange = this.onScreenChange.bind(this);
    this.animatedValue = new Animated.Value(0);
  }

  onLoginPressed = () => {
    this.props.userOperations.loginAsync(
      this.state.username,
      this.state.password
    );
  };

  onScreenChange = (text) => {
    switch (text) {
      case 'Register': {
        this.props.navigation.navigate(text);
        break;
      }
      case 'FacebookConnect': {
        alert('Facebook connecT!');
        break;
      }
      default:
        alert('no such route');
        return;
    }
  };

  onPasswordInputChange = (pass) => {
    this.setState({ password: pass });
  };

  onUsernameInputChange = (name) => {
    this.setState({ username: name });
  };

  repeatAni() {
    console.log('Im fucking spinning m8!');
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 4000,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 4000,
      }),
    ]).start(() => {
      this.repeatAni();
    });
  }

  componentDidMount() {
    // this.repeatAni(); // uncomment for legitness
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });
    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }],
    };
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.flexContainer}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.logoContent}>
          <Animated.View style={animatedStyle}>
            <Image
              source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
              style={styles.flexLogo}
            />
          </Animated.View>
          <Text style={styles.mainTitle}>Venture Aarhus!!</Text>
          <View style={{ flex: 0 }}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              placeholder="User name"
              onChangeText={this.onUsernameInputChange}
              value={this.state.username}
            />

            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={this.onPasswordInputChange}
              value={this.state.password}
            />

            <TouchableOpacity style={styles.btnContainer}>
              <Text
                style={styles.loginBtn}
                // tslint:disable-next-line:jsx-no-lambda
                onPress={this.onLoginPressed}
              >
                {' '}
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer}>
              <Text
                style={styles.FacebookBtn}
                // tslint:disable-next-line:jsx-no-lambda
                onPress={() => this.onScreenChange('FacebookConnect')}
              >
                {' '}
                CONNECT WITH FACEBOOK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer}>
              <Text style={{ color: 'white' }}>
                Don't have an account?{'\t'}
                <Text
                  style={styles.signUpBtn}
                  // tslint:disable-next-line:jsx-no-lambda
                  onPress={() => this.onScreenChange('Register')}
                >
                  {' '}
                  -{'\t'}sign up here!
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state: IAppState, ownProps) => {
  return {
    networkCalls: getCommonViewState(state.common).numberOfCalls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commonOperations: bindActionCreators(commonOperations, dispatch),
    userOperations: bindActionCreators(userOperations, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B8057',
    padding: 20,
  },
  flexLogo: {
    borderRadius: 30,
    width: 100,
    height: 100,
  },
  logoContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    width: 200,
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  flexText: {
    textAlign: 'center',
    margin: 1,
  },
  input: {
    minWidth: 300,
    flexWrap: 'wrap',
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 10,
    borderRadius: 5,
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 2,
  },
  loginBtn: {
    backgroundColor: '#0d422d',
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  FacebookBtn: {
    backgroundColor: '#308bdb',
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  signUpBtn: {
    color: '#4fa59e',
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
