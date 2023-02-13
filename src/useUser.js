import { useQuery } from "@tanstack/react-query";

import { useAxios } from "./AxiosContext";

export const useUser = () => {
  const axios = useAxios();

  const getCurrentUser = async () => {
    console.log("/users/current");
    return await axios.get("/users/current");
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    suspense: true,
    staleTime: Infinity,
    useErrorBoundary: (error) => error.response?.status !== 401,
  });
};
