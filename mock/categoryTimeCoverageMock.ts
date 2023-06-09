import mockjs from 'mockjs';

export default {
  'GET /api/companies': {
    list: mockjs.mock({
      'list|15': [{
        'type': '@word',
        'values': () => {
            const first = mockjs.Random.date('yyyy-MM-dd');
            const second = mockjs.Random.date('yyyy-MM-dd');
            return second > first ? `${first},${second}` : `${second},${first}`; 
        }
      }],
    }),
  },
};