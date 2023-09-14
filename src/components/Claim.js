import PropTypes from 'prop-types';

const Claim = ({ claim, logo }) => (
  <div className="flex gap-1 items-center">
    <img className="w-7 h-7 object-contain" src={logo} alt={claim} />
    <p className="text-white">{claim}</p>
  </div>
);

Claim.propTypes = {
  claim: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Claim;
