import { useEffect, useState } from "react";
import { getInfo } from "../../api/user";
import { Header } from "../Header/Header";
import { Onboarding } from "../Onboarding/Onboarding";
import { Route, Routes } from "react-router-dom";
import { Transfer } from "../Transfer/Transfer";
import { TransactionList } from "../TransactionList/TransactionList";

export const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchInfo = async () => {
    const { data } = await getInfo();
    setUserData({
      hash: data.hash,
      merchantId: data.merchantId,
      publicKey: data.publicKey,
      firstName: data.firstName,
      lastName: data.lastName,
      status: data.status,
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  if (loading) return null;
  return (
    <>
      <Header
        status={userData.status}
        firstName={userData.firstName}
        lastName={userData.lastName}
      ></Header>
      {userData.status !== "active" && (
        <Onboarding
          publicKey={userData.publicKey}
          merchantId={userData.merchantId}
          hash={userData.hash}
        />
      )}
      {userData.status === "active" && (
        <Routes>
          <Route
            path="/transaction-list"
            element={
              <TransactionList
                merchantId={userData.merchantId}
                hash={userData.hash}
                publicKey={userData.publicKey}
              />
            }
          />
          <Route path="/" exact element={<Transfer />} />
        </Routes>
      )}
    </>
  );
};
