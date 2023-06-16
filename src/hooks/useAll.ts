import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getAll } from "../api";

export default function useAll<T>(endpoint: EndpointAll) {
  return useQuery<T[], AxiosError>({
    queryKey: [endpoint],
    queryFn: async () => await getAll(endpoint),
  });
}
