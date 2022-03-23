const CHANGE_DATA = 'CHANGE_DATA'
const CHANGE_NAME = 'CHANGE_NAME'

const initialData = {
  user: {
    id: 1,
    name: 'haiyang',
    company: '云知道',
    work: 'php',
    pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600961220628&di=0365e8569849a27c577d77c38090ec18&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F00%2F38%2F01300000241358127660380294217.jpg'
  },
  data: 'userinfo'
}

export const changeData = (value) => {
  return {
    type: CHANGE_DATA,
    value
  }
}

export const changeName = value => {
  return {
    type: CHANGE_NAME,
    value
  }
}

const userReducer = (state = initialData, action)=>{
  console.log(state, action)
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
        data: action.value
      }
      // break;
    case 'CHANGE_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.value
        }
      }
      // break;
    default:
    return state
  }
}
export default userReducer