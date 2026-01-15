import { useQuery } from "@tanstack/react-query";
import { fetchTechService } from "../services/fetchTechService";

export const useGetTechnologies = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["technologies"],
    queryFn: fetchTechService,
    staleTime: 60000,
  });
  return { data, isLoading, isError, error };
};
