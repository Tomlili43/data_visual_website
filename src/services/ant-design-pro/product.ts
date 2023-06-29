import request from 'umi-request';

export async function getProductInfo93(productId: string) {
    return request('/data/93database/findByProductId/', {
      method: 'POST',
      data: {
        product_id: productId,
      },
    });
}

export async function getSellerInfo93(sellerId: string) {
    return request('/data/93database/findBySellerId/', {
      method: 'POST',
      data: {
        seller_id: sellerId,
      },
    });
}

export async function getProductInfo148(productId: string) {
  return request('/data/148database/findByProductId/', {
    method: 'POST',
    data: {
      product_id: productId,
    },
  });
}

export async function getSellerInfo148(sellerId: string) {
  return request('/data/148database/findBySellerId/', {
    method: 'POST',
    data: {
      seller_id: sellerId,
    },
  });
}

export async function getProductInfo108(productId: string) {
    return request('/data/108database/findByProductId/', {
      method: 'POST',
      data: {
        product_id: productId,
      },
    });
}

export async function getSellerInfo108(sellerId: string) {
    return request('/data/108database/findBySellerId/', {
      method: 'POST',
      data: {
        seller_id: sellerId,
      },
    });
}