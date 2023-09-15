import { useState } from 'react';
import { useSelector } from 'react-redux';
import Claim from '../Claim';
import { claims } from '../../constants';

const HeaderTop = () => {
  const screenWidth = useSelector((state) => state.screen.screenWidth);
  const [currentClaim, setCurrentClaim] = useState(0);

  const increaseCurrentClaim = () => {
    if (currentClaim < claims.length - 1) setCurrentClaim(currentClaim + 1);
  };

  const decreaseCurrentClaim = () => {
    if (currentClaim > 0) setCurrentClaim(currentClaim - 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') decreaseCurrentClaim();
    if (event.key === 'ArrowRight') increaseCurrentClaim();
  };

  window.addEventListener('keydown', handleKeyDown);

  return (
    <div className="flex items-center justify-between gap-5 bg-header px-[5%] py-3 text-white text-xs">
      {screenWidth === 'sm' || screenWidth === 'md' ? (
        <>
          <button type="button" onClick={decreaseCurrentClaim} onKeyDown={handleKeyDown}>
            {' '}
            {'<'}
          </button>
          <Claim
            key={claims[currentClaim].id}
            claim={claims[currentClaim].claim}
            logo={claims[currentClaim].logo}
          />
          <button type="button" onClick={increaseCurrentClaim} onKeyDown={handleKeyDown}>
            {' '}
            {'>'}
          </button>
        </>
      ) : (
        claims.map((claim) => <Claim key={claim.id} claim={claim.claim} logo={claim.logo} />)
      )}
    </div>
  );
};

export default HeaderTop;
