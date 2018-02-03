import React from 'react';
import '../styles/Step.css';
import { Link } from 'react-router-dom';
import { setReduxValue, SET_PROPERTY_NAME, SET_PROPERTY_DESC } from '../redux/reducer';
import { connect } from 'react-redux';

function Step1(props) {
  const { setReduxValue, property_name, property_desc } = props

  return (
    <div className="Step">
      <button>Cancel</button>

      <h2>Step 1</h2>

      <div className="steppingStones">
        <div className="filled"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="form">
        <div>Property Name</div>
        <input value={property_name} onChange={(e) => setReduxValue(SET_PROPERTY_NAME, e.target.value)} />
        <div>Property Description</div>
        <input value={property_desc} onChange={(e) => setReduxValue(SET_PROPERTY_DESC, e.target.value)} />
      </div>

      <Link to="/step2"><button>Next Step</button></Link>

    </div>
  )
}

export default connect(null, { setReduxValue })(Step1)