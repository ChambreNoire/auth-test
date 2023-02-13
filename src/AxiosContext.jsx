import axios from "axios";
import { useContext, createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AxiosContext = createContext(undefined);

const AxiosProvider = ({ children }) => {
  const navigate = useNavigate();

  const axiosInstance = useMemo(() => {
    const _axios = axios.create({
      withCredentials: true,
      baseURL: "http://localhost:9001/resources",
      headers: {
        "Content-Type": "application/json",
      },
    });
    _axios.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (401 === error.response?.status) {
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
    return _axios;
  }, [navigate]);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

const useAxios = () => {
  const context = useContext(AxiosContext);
  if (context === undefined) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};

export { AxiosProvider, useAxios };
