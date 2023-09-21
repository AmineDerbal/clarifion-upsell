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
            <div
              className={
                screenWidth === 'sm' || screenWidth === 'md'
                  ? 'flex flex-col gap-2 items-center justify-center'
                  : 'flex items-center gap-2'
              }
            >
              <img
                className={
                  screenWidth === 'sm' || screenWidth === 'md'
                    ? 'w-6 h-6 object-contain'
                    : 'w-8 h-8 object-contain'
                }
                src={order.image}
                alt={order.name}
              />
              <p
                className={
                  screenWidth === 'sm' || screenWidth === 'md'
                    ? 'text-center text-sm'
                    : null
                }
              >
                step
                {' '}
                {order.id}
                {' '}
                :
                {' '}
                {order.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProgress;
