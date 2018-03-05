import * as React from 'react';
import { Text, FlatList, StyleSheet, View, Picker } from 'react-native';
import { IOccurrencesOperations } from '../../state/ducks/Occurrences/operations';
import { IAppState } from '../../state/ducks';
import { getOccurencesViewState } from '../../state/ducks/Occurrences/selectors';
import { occurrencesOperations } from '../../state/ducks/Occurrences';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ITags, IOccurrence } from '../../state/ducks/Occurrences/types';
import RenderTagItem from './TagsItems';

const TAGS = 'RecommendedScreen.ts';

export interface IRecommendedScreenProps {
  occurrencesOperations: IOccurrencesOperations;
  recommendedList: IOccurrence[];
  tagsList: ITags[];
  searchTagsList: string[];
}

class RecommendedScreen extends React.Component<IRecommendedScreenProps> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.occurrencesOperations.getTagsAsync();
  }

  keyGen = item => {
    return item['@id'];
  };

  renderTags = ({ item }) => <RenderTagItem tag={item} />;

  addToSearchList = ({ item }) => {
    this.props.searchTagsList.push(item.name);
    this.props.searchTagsList.forEach(tag => {
      this.props.occurrencesOperations.asyncGetOccurrences();
    });
  };

  render() {
    const tagListName = this.props.tagsList.map((t, i) => {
      return <Picker.Item key={i} value={t.name} label={t.name} />;
    });
    return (
      <View style={styles.container}>
        <Picker
          style={{ flex: 0.2 }}
          selectedValue={this.props.tagsList}
          onValueChange={this.addToSearchList}
        >
          {tagListName}
        </Picker>

        <FlatList
          style={{ flex: 0.8 }}
          data={this.props.tagsList}
          keyExtractor={this.keyGen}
          renderItem={this.renderTags}
          numColumns={3}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    tagsList: getOccurencesViewState(state.occurrences).tags,
  };
};

const mapDistpatchToProps = dispatch => {
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
