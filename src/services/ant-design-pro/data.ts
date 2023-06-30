import request from 'umi-request';

export async function getVisualizationData(tableName: string) {
  return request('/data/visualization/visualizationData/', {
    method: 'POST',
    data: {
      tableName: tableName,
    },
  });
}
export async function getCategoryCountsDM() {
  return request('/api/categoryCountsDM/')
}

export async function getCategoryCountsDM2() {
  return request('/api/categoryCountsDM2/')
}

