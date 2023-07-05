import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { postNewCompetition, putUpdatedCompetition } from "../api";

const useSaveCompetition = () => {
  const queryClient = useQueryClient();
  return useMutation<Competition, AxiosError, SaveCompetition, () => void>({
    mutationFn: async (comp: SaveCompetition) => {
      if (!comp.id) return await postNewCompetition(comp);
      return await putUpdatedCompetition(comp);
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["competitions", `${id}`]);
      queryClient.invalidateQueries(["competitions"]);
    },
    onError: () => {
      toast.error("Er is een fout opgetreden");
    },
  });
};

export default useSaveCompetition;
