import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/loader/loader";
import { authServices } from "../services/services";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const { isPending, isError, data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["fetchUserDetails"],
    queryFn: authServices.profile,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  if (isPending || isLoading) return <Loader />;

  if (isError) {
    console.log(error);
    return navigate("../sign-in");
  }

  return (
    <UserContext.Provider value={data.data}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
