import React from 'react';
import { orderProgress } from '../../constants';

const OrderProgress = () => (
  <div className="mt-10">
    <div className="flex justify-between">
      {orderProgress.map((order) => (
        <div key={order.id} className="flex items-center gap-2">
          <img className="w-7 h-7 object-contain" src={order.image} alt={order.name} />
          <p>
            step
            {' '}
            {order.id}
            {' '}
            :
            {' '}
            {order.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default OrderProgress;
