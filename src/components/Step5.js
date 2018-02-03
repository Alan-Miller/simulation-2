import React from 'react';
import '../styles/Step.css';
import { Link } from 'react-router-dom';
import { setReduxValue, SET_DES_RENT, SET_PROPERTIES } from '../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

function Step5(props) {
  const { setReduxValue, des_rent } = props

  function complete() {
    const { users_id, property_name, property_desc, address, city, state, zip, img, loan_amt, mortgage, rec_rent, des_rent } = props
    const newProperty = { users_id, property_name, property_desc, address, city, state, zip, img, loan_amt, mortgage, rec_rent, des_rent }
    axios.post('/api/properties', newProperty).then(properties => {
      setReduxValue(SET_PROPERTIES, properties.data)
      props.history.push('/filter')
    })
  }

  return (
    <div className="Step">
      <button>Cancel</button>

      <h2>Step 5</h2>

      <div className="steppingStones">
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled"></div>
      </div>

      <div>
        Recommended Rent ${props.rec_rent}
      </div>

      <div className="form">
        <div>Desired Rent</div>
        <input value={des_rent} onChange={(e) => setReduxValue(SET_DES_RENT, +e.target.value)} />
      </div>

      <Link to="/step4"><button>Previous Step</button></Link>
      <button onClick={complete}>Complete</button>

    </div>
  )
}

export default connect(state => state, { setReduxValue })(Step5)