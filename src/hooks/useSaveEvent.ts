import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { postNewEvent, putUpdatedEvent } from "../api";

const useSaveEvent = () => {
  const queryClient = useQueryClient();
  return useMutation<BasicEvent, AxiosError, SaveEvent, () => void>({
    mutationFn: async (event: SaveEvent) => {
      if (!event.id) return await postNewEvent(event);
      return await putUpdatedEvent(event);
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(["events", `${id}`]);
      queryClient.invalidateQueries(["events"]);
    },
    onError: () => {
      toast.error("Er is een fout opgetreden");
    },
  });
};

export default useSaveEvent;
