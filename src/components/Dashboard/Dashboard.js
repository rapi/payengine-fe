import { useEffect, useState } from "react";
import { getInfo } from "../../api/user";
import { Header } from "../Header/Header";
import { Onboarding } from "../Onboarding/Onboarding";
import { Route, Routes } from "react-router-dom";
import { Transfer } from "../Transfer/Transfer";

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
          {/*<Route element={<Layout />}>*/}
          <Route path="" element={<Transfer />} />
        </Routes>
      )}
    </>
  );
};
