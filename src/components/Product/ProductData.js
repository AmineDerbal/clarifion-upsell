import ProductSpecial from './ProductSpecial';
import ProductDescription from './ProductDescription';
import ProductSpec from './ProductSpec';
import ProductAction from './ProductAction';
import { percentVector, guarantee } from '../../assets';

const ProductData = () => (
  <div className="w-1/2 flex flex-1 flex-col justify-between gap-5 text-lead">
    <ProductSpecial />
    <ProductDescription />
    <ProductSpec />
    <div className="flex gap-5 items-center bg-grayBackground w-full p-3">
      <img src={percentVector} alt="percent vector" className="object-contain" />
      <p>
        Save
        {' '}
        <span className="text-blue">53%</span>
        {' '}
        and get
        {' '}
        <span className="text-blue">6 extra Clarifision</span>
        {' '}
        for only
        <span className="text-blue">$14 Each</span>
        .
      </p>
    </div>
    <ProductAction />
    <div className="flex items-center gap-1">
      <img src={guarantee} alt="guarantee" className="w-4/5 h-4/5 object-contain" />
      <p className="text-[16px]">
        If you are not completely thrilled with your Clarifion - We have a
        {' '}
        <span className="font-bold">30 day satisfaction guarantee</span>
        {' '}
        . Please refer to our
        return policy at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  </div>
);

export default ProductData;
