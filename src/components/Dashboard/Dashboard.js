import { useEffect, useState } from "react";
import { getInfo } from "../../api/user";
import { loadPayengine } from "payengine";
import { Header } from "../Header/Header";

export const Dashboard = () => {
  const [publicKey, setPublicKey] = useState("");
  const [hash, setHash] = useState("");
  const [merchantId, setMerchantId] = useState("");
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState(true);
  const [lastName, setLastName] = useState(true);
  const fetchInfo = async () => {
    const { data } = await getInfo();
    setHash(data.hash);
    setMerchantId(data.merchantId);
    setPublicKey(data.publicKey);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setLoading(false);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  useEffect(() => {
    console.log(publicKey);
    loadPayengine({
      publicKey,
    });
  }, [publicKey]);
  if (loading) return null;
  return (
    <>
      <Header firstName={firstName} lastName={lastName}></Header>
      <pay-engine
        type="boarding"
        merchant-id={merchantId}
        hash={hash}
      ></pay-engine>
    </>
  );
};
