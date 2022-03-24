import React from 'react'
import { connect } from 'react-redux'
import { incrementNum, decrementNum } from '@/redux/reducers/counterReducer'

class Counter extends React.Component {
    onIncreNowNum() {
        this.props.dispatch(incrementNum())
    }
    onDecreNowNum() {
        this.props.dispatch(decrementNum())
    }
    render() {
        const props = this.props
        // 这里是把store的值，并入到props的里面
        // 如果是class组件，就是this.props
        console.log('props',props)
        return (
            <div>
                store里的计数器数字counter的值：{props.data.counter}

                <br />
                {/* <button onClick={props.increNowNum}>
                   增加counter的值
                </button>
                <button onClick={props.decreNowNum}>
                    减少counter的值
                </button> */}
                <button onClick={() => this.onIncreNowNum()}>
                    增加counter的值1
                </button>
                <button onClick={() => this.onDecreNowNum()}>
                    减少counter的值1
                </button>
            </div>
        )
    }
}

const stateToProps = state => {
    // store里的值, 这里是读取store的值给当前组件的props里
    console.log('stateToProps_state', state)
    return {
        data: state.counterReducer
    }
}

//// 改变store的数据
// const dispatchToProps = dispatch => {
//     // increNowNum、decreNowNum会加在当前的props里，然后diapatch去改变store的数据
//     return {
//         increNowNum(e) {
//             dispatch(incrementNum())
//         },
//         decreNowNum(e) {
//             dispatch(decrementNum())
//         }
//     }
// }

export default connect(stateToProps)(Counter)
