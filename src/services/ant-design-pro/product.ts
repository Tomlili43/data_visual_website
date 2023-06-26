import request from 'umi-request';

export async function getProductInfo93(productId: string) {
    return request('/api/product93/', {
      method: 'POST',
      data: {
        product_id: productId,
      },
    });
}

export async function getSellerInfo93(sellerId: string) {
    return request('/api/seller93/', {
      method: 'POST',
      data: {
        seller_id: sellerId,
      },
    });
}

export async function getProductInfo108(productId: string) {
    return request('/api/product108/', {
      method: 'POST',
      data: {
        product_id: productId,
      },
    });
}

export async function getSellerInfo108(sellerId: string) {
    return request('/api/seller108/', {
      method: 'POST',
      data: {
        seller_id: sellerId,
      },
    });
}