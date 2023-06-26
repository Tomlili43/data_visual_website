import request from 'umi-request';

export async function getCategoryDistribution() {
    return request('/api/categoryDistribution/')
}
export async function getCategoryTimeCoverage() {
  return request('/api/categoryTimeCoverage/')
}
export async function getCategoryCounts() {
  return request('/api/categoryCounts/')
}
export async function getCategoryCountsJS() {
  return request('/api/categoryCountsJS/')
}
export async function getCategoryCountsDM() {
  return request('/api/categoryCountsDM/')
}
export async function getModifiedCount() {
  return request('/api/modifiedCount/')
}
export async function getUSImpTransactionCount() {
  return request('/api/USImpTransactionCount/')
}
export async function getUSImpTransactionCountCN() {
  return request('/api/USImpTransactionCountCN/')
}
export async function getUSImpTransactionValue() {
  return request('/api/USImpTransactionValue/')
}
export async function getUSImpTransactionValueCN() {
  return request('/api/USImpTransactionValueCN/')
}
export async function getUSImpTransactionWeight() {
  return request('/api/USImpTransactionWeight/')
}
export async function getUSImpTransactionWeightCN() {
  return request('/api/USImpTransactionWeightCN/')
}
export async function getUSImpTransactionVolume() {
  return request('/api/USImpTransactionVolume/')
}
export async function getUSImpTransactionVolumeCN() {
  return request('/api/USImpTransactionVolumeCN/')
}
