import React from 'react';
import '../styles/Step.css';
import { Link } from 'react-router-dom';
import { setReduxValue, SET_ADDRESS, SET_CITY, SET_STATE, SET_ZIP } from '../redux/reducer';
import { connect } from 'react-redux';

function Step2(props) {
  const { setReduxValue, address, city, state, zip } = props

  return (
    <div className="Step">
      <button>Cancel</button>

      <h2>Step 2</h2>

      <div className="steppingStones">
        <div className="filled checked"></div>
        <div className="filled"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="form">
        <div>Address</div>
        <input value={address} onChange={(e) => setReduxValue(SET_ADDRESS, e.target.value)} />
        <div>City</div>
        <input value={city} onChange={(e) => setReduxValue(SET_CITY, e.target.value)} />
        <div>State</div>
        <input value={state} onChange={(e) => setReduxValue(SET_STATE, e.target.value)} />
        <div>ZIP</div>
        <input value={zip} onChange={(e) => setReduxValue(SET_ZIP, +e.target.value)} />
      </div>

      <Link to="/step1"><button>Previous Step</button></Link>
      <Link to="/step3"><button>Next Step</button></Link>

    </div>
  )
}

export default connect(null, { setReduxValue })(Step2)