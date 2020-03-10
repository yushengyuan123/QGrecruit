import axios from 'axios';

let baseUrl: string = ''

if (process.env.NODE_ENV === 'production') {
    // 生产环境下使用真实路径
    baseUrl = 'http://recruit.qgailab.com/api';
} else {
    // 非生产环境下，都使用代理服务器
    baseUrl = '/api';
}

// @ts-ignore
const _Request = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * 统一对请求进行处理
 */
_Request.interceptors.request.use((config) => {
    // 当存在token的时候，将token加到请求头上面

    return config
}, error => {
    //403
    //500 做出相应的错误提示
})

/**
 * 统一对返回的数据进行过滤
 */
_Request.interceptors.response.use((result: any) => {
    // 当没有前面的问题的时候，返回请求对象的数据
    //拿取头部证书
    return result.data;
}, (error) => {
    //  console.log(error)
    // 请求发生错误的时候
    let status = error.response.status;


    return error;
});

export class Request {
    //这个东西不知道有什么用
    commonUrl = '';

    get(url: string) {
        return _Request.get(this.commonUrl + url);
    }

    post(url: string, data: any) {
        return _Request.post(this.commonUrl + url, JSON.stringify(data));
    }

    upload(url: string, data: any) {
        return _Request.post(this.commonUrl + url, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }

    put(url: string, data: any) {
        return _Request.put(this.commonUrl + url, data);
    }

    delete(url: string, data: any) {
        return _Request.delete(this.commonUrl + url);
    }
}
