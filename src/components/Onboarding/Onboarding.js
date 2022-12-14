import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { loadPayengine } from "payengine";

const Onboarding = ({ merchantId, hash, publicKey }) => {
  useEffect(() => {
    if (publicKey)
      loadPayengine({
        publicKey,
      });
  }, [publicKey]);
  return (
    <pay-engine
      type="boarding"
      merchant-id={merchantId}
      hash={hash}
    ></pay-engine>
  );
};
Onboarding.propTypes = {
  merchantId: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  publicKey: PropTypes.string.isRequired,
};
export { Onboarding };
