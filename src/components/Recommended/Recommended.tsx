import * as React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { IOccurrencesOperations } from '../../state/ducks/Occurrences/operations';
import { IAppState } from '../../state/ducks';
import { getOccurencesViewState } from '../../state/ducks/Occurrences/selectors';
import { occurrencesOperations } from '../../state/ducks/Occurrences';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ITags } from '../../state/ducks/Occurrences/types';
import RenderTagItem from './TagsItems';

const TAGS = 'RecommendedScreen.ts';

export interface IRecommendedScreenProps {
  occurrencesOperations: IOccurrencesOperations;
  tagsList: ITags[];
}

class RecommendedScreen extends React.Component<IRecommendedScreenProps> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.occurrencesOperations.getTagsAsync();
  }

  keyGen = (item) => {
    return item['@id'];
  };

  renderTags = ({ item }) => <RenderTagItem tag={item} />;

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.tagsList}
        keyExtractor={this.keyGen}
        renderItem={this.renderTags}
      />
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    tagsList: getOccurencesViewState(state.occurrences).tags,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    occurrencesOperations: bindActionCreators(occurrencesOperations, dispatch),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(RecommendedScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
