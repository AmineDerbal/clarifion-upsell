import React from 'react';
import { useSelector } from 'react-redux';
import { orderProgress } from '../../constants';

const OrderProgress = () => {
  const { screenWidth } = useSelector((state) => state.screen);

  return (
    <div className="mt-12">
      <div className="flex justify-between">
        {orderProgress.map((order) => (
          <div
            key={order.id}
            className="flex items-center gap-2"
          >
            {screenWidth === 'sm' || screenWidth === 'md' ? (
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="w-6 h-6 object-contain"
                  src={order.image}
                  alt={order.name}
                />
                <p className="text-center text-sm">
                  step
                  {' '}
                  {order.id}
                  {' '}
                  :
                  {' '}
                  {order.name}
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 object-contain"
                  src={order.image}
                  alt={order.name}
                />
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProgress;
