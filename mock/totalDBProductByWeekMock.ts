import mockjs from 'mockjs';

export default {
  'GET /api/totalProducts': {
    list: mockjs.mock({
      'list|100': [{
        'Date': () => {
          return mockjs.Random.date('yyyy-MM-dd')
        },
        'count|1000-3000': 2000,
      }],
    }),
  },
};