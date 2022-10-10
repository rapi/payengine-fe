import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { loadPayengine } from "payengine";

const TransactionList = ({ merchantId, hash, publicKey }) => {
  useEffect(() => {
    if (publicKey)
      loadPayengine({
        publicKey,
      });
  }, [publicKey]);
  return (
    <pay-engine
      id="pf-transactions"
      type="transactions"
      merchant-id={merchantId}
      default-filter="{}"
      hash={hash}
    ></pay-engine>
  );
};
TransactionList.propTypes = {
  merchantId: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  publicKey: PropTypes.string.isRequired,
};
export { TransactionList };
