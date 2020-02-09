import axios from 'axios'

//创建axios的实例
export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',   //106.54.54.237
		timeout: 5000							//123.207.32.32
	})
	
	//axios的拦截器
	//2.1请求拦截的作用
	instance.interceptors.request.use(config => {
		return config
	}, err => {
		
	})
	
	//2.2响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {
		console.log(err);
	})
	
	//发送真正的网络请求
	return instance(config)
}