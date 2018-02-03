import React from 'react';
import '../styles/Step.css';
import { Link } from 'react-router-dom';
import { setReduxValue, SET_IMG } from '../redux/reducer';
import { connect } from 'react-redux';

function Step3(props) {
  const { setReduxValue, img } = props


  return (
    <div className="Step">
      <button>Cancel</button>

      <h2>Step 3</h2>

      <div className="steppingStones">
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled"></div>
        <div></div>
        <div></div>
      </div>

      <div className="form">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div>Image URL</div>
        <input value={img} onChange={(e) => setReduxValue(SET_IMG, e.target.value)} />
      </div>

      <Link to="/step2"><button>Previous Step</button></Link>
      <Link to="/step4"><button>Next Step</button></Link>

    </div>
  )
}

export default connect(state => state, { setReduxValue })(Step3)