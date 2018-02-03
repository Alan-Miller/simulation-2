import React from 'react';
import '../styles/Step.css';
import { Link } from 'react-router-dom';
import { setReduxValue, SET_LOAN_AMT, SET_MORTGAGE } from '../redux/reducer';
import { connect } from 'react-redux';

function Step4(props) {
  const { setReduxValue, loan_amt, mortgage } = props

  function setLoan(e) {
    if (!+e.target.value) return
    setReduxValue(SET_LOAN_AMT, +e.target.value)
  }

  function setMortgage(e) {
    if (!+e.target.value) return
    setReduxValue(SET_MORTGAGE, +e.target.value)
  }

  return (
    <div className="Step">
      <button>Cancel</button>

      <h2>Step 4</h2>

      <div className="steppingStones">
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled checked"></div>
        <div className="filled"></div>
        <div></div>
      </div>

      <div className="form">
        <div>Loan Amount</div>
        <input value={loan_amt} onChange={(e) => setLoan(e)} />
        <div>Monthly Mortgage</div>
        <input value={mortgage} onChange={(e) => setMortgage(e)} />
      </div>

      <Link to="/step4"><button>Previous Step</button></Link>
      <Link to="/step5"><button>Next Step</button></Link>

    </div>
  )
}

export default connect(state => state, { setReduxValue })(Step4)