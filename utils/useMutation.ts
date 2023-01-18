import Axios from './Axios';

export const useMutation = (method: string) => {
  const mutation = async (apiName: string, params?: object) => {
    if (method === 'patch') {
      try {
        const result = await Axios({
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${apiName}`,
          method: 'patch',
          data: params,
        });

        return result;
      } catch (error) {
        console.error(error);
      }
    }
    if (method === 'post') {
      try {
        const result = await Axios({
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${apiName}`,
          method: 'post',
          data: params,
        });
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    if (method === 'delete') {
      try {
        const result = await Axios({
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/${apiName}`,
          method: 'delete',
          data: params,
        });
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [mutation];
};
