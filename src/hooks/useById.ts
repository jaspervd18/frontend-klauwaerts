import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getById } from "../api";

export default function useById<T>(endpoint: EndpointById, id: number) {
  return useQuery<T, AxiosError>({
    queryKey: [endpoint, id],
    queryFn: async () => await getById(endpoint, id),
  });
}
