import { useEffect } from "react";
import { getInfo } from "../../api/user";
import { getToken } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const fetchInfo = async () => {
    if (!getToken()) {
      navigate("/login");
    }
    try {
      const info = await getInfo();
      console.log(info);
    } catch (e) {
      navigate("/login");
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return "Dashboard";
};
