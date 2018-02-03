const initialState = {
  properties: [],
  property_name: '',
  property_desc: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  loan_amt: 0,
  mortgage: 0,
  rec_rent: 0,
  des_rent: 0
}

export const SET_PROPERTIES = 'SET_PROPERTIES'
export const SET_PROPERTY_NAME = 'SET_PROPERTY_NAME'
export const SET_PROPERTY_DESC = 'SET_PROPERTY_DESC'
export const SET_ADDRESS = 'SET_ADDRESS'
export const SET_CITY = 'SET_CITY'
export const SET_STATE = 'SET_STATE'
export const SET_ZIP = 'SET_ZIP'
export const SET_IMG = 'SET_IMG'
export const SET_LOAN_AMT = 'SET_LOAN_AMT'
export const SET_MORTGAGE = 'SET_MORTGAGE'
export const SET_REC_RENT = 'SET_REC_RENT'
export const SET_DES_RENT = 'SET_DES_RENT'

export function setReduxValue(type, payload) {
  return {
    type,
    payload
  }
}

export default function reducer(state = initialState, action) {
  const reduxProp = action.type.replace('SET_', '').toLowerCase()
  
  if (state.hasOwnProperty(reduxProp)) {
    const newState = Object.assign({}, state, { [reduxProp]: action.payload });
    if (reduxProp === 'mortgage') Object.assign(newState, { rec_rent: action.payload * 1.25 });
    return newState;
  }
  else return state;
}