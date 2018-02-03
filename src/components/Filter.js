import React from 'react';
import '../styles/Filter.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { setReduxValue, SET_PROPERTIES } from '../redux/reducer';
import axios from 'axios';
import Listing from '../components/Listing';

class Filter extends React.Component {
  constructor() {
    super()
    this.state = {
      desiredRent: ''
    }
    this.setRent = this.setRent.bind(this)
  }

  componentWillMount() {
    axios.get('/api/properties').then(properties => {
      this.props.setReduxValue(SET_PROPERTIES, properties.data)
    })
  }

  setRent(e) {
    this.setState({ desiredRent: e.target.value })
  }

  render() {
    return (
      <div className="Filter">

        <Link to="/step1"><div className="add_button">Add new property</div></Link>

        <div>
          <span>List properties with desired rent greater than: $</span>
          <input type="text" value={this.state.desiredRent} onChange={this.setRent} />
          <button>Filter</button>
          <button>Reset </button>
          <hr />
          <h2>Home Listings</h2>
        </div>
        {this.props.properties.map(property => (
          <Listing key={property.id} property={property} />
        ))}

      </div>
    )
  }
}

export default connect(state => state, { setReduxValue })(Filter);