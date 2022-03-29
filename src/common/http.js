import axios from 'axios';
import "./axiosMiddleware";
const get = (url,params={})=>{
  return new Promise((resolve,reject)=>{
      axios.get(url,params)
          .then(res=>{
            console.log('http_fetchGet_res',res)
            // let {success,message} = res.data
              let {success} = res.data
              if(success === true){
                  resolve(res.data)
              }
              reject(res.data.message)
          })
          .catch(error=>reject(error))
  })
}
const post = (url,params={})=>{
  return new Promise((resolve,reject)=>{
    axios.post(url,params)
    .then(res=>{
      let {success} = res.data
      console.log('http_fetchPost_res',res)
      if(success === true){
        resolve(res.data)
      }
      reject(res.data.message)

    })
    .catch(error=>reject(error))
  })
}
const requestMiddleware = (fn)=>{
  return async(url,params)=>{
    try{
      return fn(url,params)
    }catch(err){
      throw err
    }
  }
}
const fetchPost = requestMiddleware(post)
const fetchGet= requestMiddleware(get)

export {
  fetchGet,
  fetchPost

}