import axios, { AxiosRequestConfig } from 'axios';
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 300000,
});
declare module 'axios' {
  export interface AxiosRequestConfig {
    fileUpload?: boolean;
  }
}
Axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    console.log('config');
    console.log(config);
    const token: string | any =
      localStorage.getItem('accessToken') === null
        ? ''
        : localStorage.getItem('accessToken');
    config.headers = {
      'Authorization': token,
      'Content-type': config?.fileUpload
        ? 'multipart/form-data'
        : 'application/json; charset=utf-8',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('엑시오스 모듈 에러가 났습니다');
    console.log(error);
    if (
      error.response.status === 400 &&
      error.response.data.code === 'ACCESS_TOKEN_EXPIRED'
    ) {
      const originalRequest = error.config;
      let accessToken: string = '';
      let refreshToken: string = '';
      if (typeof window !== 'undefined') {
        accessToken = localStorage.getItem('accessToken') as string;
        refreshToken = localStorage.getItem('refreshToken') as string;
      }
      try {
        console.log('재요청 리퀘스트 해야합니다');
        const { data } = await axios.post(
          '/api/v1/oauth/reissue',
          {},
          {
            headers: {
              'ACCESS-TOKEN': accessToken,
              'REFRESH-TOKEN': refreshToken,
            },
          }
        );
        const { result } = data;
        const reAccessToken = result.accessToken;
        console.log('reAccessToken');
        console.log(reAccessToken);
        localStorage.setItem('accessToken', reAccessToken);
        originalRequest.headers = {
          Authorization: reAccessToken,
        };
        console.log('재요청 리퀘스트액세스 토큰이 만료됐습니다');
        console.log(originalRequest);
        return axios(originalRequest);
      } catch (error: any) {
        console.log('리프레쉬 토큰 발급 에러', error);
      }
    } else if (
      error.response.status === 400 &&
      error.response.data.code === 'ACCESS_TOKEN_NOT_VALID'
    ) {
      localStorage.clear();
      console.log('로그아웃 후 재로그인 하세요');
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default Axios;