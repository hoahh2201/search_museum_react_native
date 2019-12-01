import { SearchBar } from 'react-native-elements';

export default class SearchBar extends React.Component {
  state = {
    term: '',
  };

  updateSearch = term => {
    this.setState({ term });
  };

  render() {
    const { term } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={term}
      />
    );
  }
}






 
