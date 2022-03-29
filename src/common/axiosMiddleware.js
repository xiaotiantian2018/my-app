import axios from "axios";
import { Toast } from "antd-mobile";

axios.defaults.timeout = 5000;
// 超时重试次数和间隔
axios.defaults.maxRetryCount = 2;
axios.defaults.delay = 1000;

axios.interceptors.request.use(config => {
  Toast.show({
    icon: 'loading',
    content: config.loadText || "正在加载",
    duration:0,
  })
  if (window.localStorage.getItem("token")) {
    config.headers["x-access-token"] = window.localStorage.getItem("token");
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    Toast.clear();
    const data = response.data;
    if (data.code === 1) {
      Toast.show({
        icon: 'fail',
        content: data.msg,
        duration:1,
      })
    }
    return response;
  },
  error => {
    Toast.clear();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // store.dispatch(logout());
          break;
        case 500:
          Toast.show({
            icon: 'fail',
            content: error.response.data.msg || "服务器出错啦",
            duration:1,
          })
          break;
        default:
          break;
      }
      return Promise.reject(error);
    } else {
      // 请求超时重试机制
      Toast.clear();
      const config = error.config;
      config.loadText = "请求超时，正在重试";
      if (!config || !config.maxRetryCount) return Promise.reject(error);
      config.retryCount = config.retryCount || 0;
      if (config.retryCount >= config.maxRetryCount) {
        Toast.show({
          icon: 'fail',
          content: '还是超时，不请求了',
          duration:2,
        })
        
        return Promise.reject(error);
      }
      config.retryCount += 1;
      const request = new Promise(resolve => {
        setTimeout(() => resolve(), config.delay || 1);
      });
      return request.then(() => {
        axios(config);
      });
    }
  }
);
