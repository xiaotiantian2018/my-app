import React from 'react'
import axios from 'axios'
import { fetchGet, fetchPost } from '@/common/http'
class AxiosStudy extends React.Component {
    componentDidMount() {
        this.getList()
        this.getStudentList()
        this.getUserList()
    }
    getList() {
        // 方法1：
        // axios.get('/api/get/student?ID=12345')
        //     .then(function (response) {
        //         console.log('axios.get_response', response);
        //     })
        //     .catch(function (error) {
        //         console.log('axios.get_error', error);
        //     });
        //axios.get 方法二：
        axios.get('/api/get/student', {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log('axios.get_response', response);
            })
            .catch(function (error) {
                console.log('axios.get_error', error);
            });

        axios.post('/api/get/user', {
            ID: 4567
        })
            .then(function (response) {
                console.log('axios.post_response', response);
            })
            .catch(function (error) {
                console.log('axios.post_error', error);
            });


    }
    // async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
   async getStudentList() {
        const res = await fetchGet('/api/get/student', {params: {
            ID: 12345
        }})
        console.log('fetchGet_getStudentList_res',res)
    }
    async getUserList(){
        const res = await fetchPost('/api/get/user',{id:456})
        console.log('fetchPost_getUserList_res',res)

    }
    render() {
        return (
            <div>
                <h1>Axios学习</h1>
            </div>
        )
    }
}

export default AxiosStudy
