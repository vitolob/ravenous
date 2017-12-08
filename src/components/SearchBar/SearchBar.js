import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: sortByOptions['Best Match']
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  /*
   * Adds correct class to Search Bar Sorting Option (Is it active or not?)
   */
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  /*
   * Event handler for a click on a Sorting Option
   */
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  /*
   * Updates the Search Term in the Component state
   */
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  /*
   * Updates the Location in the Component state
   */
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  /*
   * Dynamically render the Sorting Options in the correct order (and correct highlighting aswell)
   */
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
                 className={this.getSortByClass(sortByOptionValue)}
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
