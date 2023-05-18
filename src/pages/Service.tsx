import { request } from 'umi';

export async function submitForm() {
  return request('/monthAll/findByProductIdAndMonthAndYear', {
    method: 'POST',
    data: {
        "productId":"0000084034",
        "month":1,
        "year":2022
    },
  });
}
