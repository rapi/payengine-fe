import { useEffect } from "react";
import { getInfo } from "../../api/user";

export const Dashboard = () => {
  const fetchInfo = async () => {
    const info = await getInfo();
    console.log(info);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return "Dashboard";
};
