import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { connect, ActionCreator } from 'react-redux';
import { bindActionCreators, Action } from 'redux';
import { IAppState } from '../../state/ducks';

import { IUser } from '../../state/ducks/user/types';
import { getUserViewState } from '../../state/ducks/user/selectors';
import { IUserActions } from '../../state/ducks/user/actions';
import { userActions } from '../../state/ducks/user';

import { occurrencesOperations } from '../../state/ducks/Occurrences';
import { IOccurrence } from '../../state/ducks/Occurrences/types';
import { IOccurrenceActions } from '../../state/ducks/Occurrences/actions';
import { IOccurrencesOperations } from '../../state/ducks/Occurrences/operations';
import { getOccurencesViewState } from '../../state/ducks/Occurrences/selectors';
import RenderListItem from './OccurrencesListItem';

export interface IOccurrencesScreenProps {
  occurrencesOperations: IOccurrencesOperations;
  occurrencesList: IOccurrence[];
}

// interface IOccurencesListState {
// }

const TAG = 'OccurrencesScreen';

class OccurrencesScreen extends React.Component<IOccurrencesScreenProps> {
  constructor(props) {
    super(props);
    this.listItemRender = this.listItemRender.bind(this);
  }

  listItemRender = ({ item }) => <RenderListItem item={item} />;

  componentDidMount() {
    this.props.occurrencesOperations.asyncGetOccurrences();
  }

  keyAxtraxtoar = (item) => {
    return item['@id'];
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.occurrencesList}
          keyExtractor={this.keyAxtraxtoar}
          renderItem={this.listItemRender}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    occurrencesList: getOccurencesViewState(state.occurrences).occurrencesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    occurrencesOperations: bindActionCreators(occurrencesOperations, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OccurrencesScreen);
