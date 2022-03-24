import React from 'react'
import { connect } from 'react-redux'
import { changeData, changeName } from '@/redux/reducers/userInfoReducer'


class UserInfo extends React.Component {
    render() {
        const props = this.props
        // 这里是把store的值，并入到props的里面
        // 如果是class组件，就是this.props
        console.log(props)
        return (
            <div>
                store里的data属性：{props.data.data}
                <br />
                store里的用户的名字：{props.data.user.name}
                <br />
                <button onClick={props.changeNowData}>
                    改变data的值
                </button>
                <button onClick={props.changeNowName}>
                    改变user-name的值
                </button>
                
            </div>
        )
    }
}

const stateToProps = state => {
    // store里的值, 这里是读取store的值给当前组件的props里
    console.log('stateToProps_state', state)
    return {
        data: state.userInfoReducer
    }
}

// 改变store的数据
const dispatchToProps = dispatch => {
    // changeNowData、changeNowName会加在当前的props里，然后diapatch去改变store的数据
    return {
        changeNowData(e) {
            dispatch(changeData('改变data的数据'))
        },
        changeNowName(e) {
            dispatch(changeName('改变user-name的数据'))
        }
    }
}

export default connect(stateToProps, dispatchToProps)(UserInfo)
