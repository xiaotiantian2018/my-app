const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialData = {
 counter:0
}

export const incrementNum = () => {
  return {
    type: INCREMENT
  }
}

export const decrementNum = ()=> {
  return {
    type: DECREMENT
  }
}

const counterReducer = (state = initialData, action)=>{
  console.log(state, action)
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
    return state
  }
}
export default counterReducer