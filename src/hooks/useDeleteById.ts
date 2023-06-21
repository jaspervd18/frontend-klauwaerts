import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteById } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useDeleteById<T>(
  endpoint: EndpointById,
  id: number,
  month: number,
  year: number
) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<AxiosError, () => void>({
    mutationFn: async () => {
      if (!id) toast.error("Er is een fout opgetreden");
      return await deleteById(endpoint, id);
    },
    onSuccess: (_) => {
      queryClient.invalidateQueries(["events", "month", month, "year", year]);
      navigate("/trainingen");
      toast.success("De training is verwijderd");
    },
    onError: () => {
      navigate("/trainingen");
      toast.error("Er is een fout opgetreden");
    },
  });
}
