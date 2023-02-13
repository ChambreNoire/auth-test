import { useMutation } from "@tanstack/react-query";

import { useAxios } from "./AxiosContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (dto) => {
      console.log("/auth/login");
      return await axios.post("/auth/login", dto);
    },
    onSuccess: () => {
      navigate("/home");
    },
    useErrorBoundary: false,
  });
};
