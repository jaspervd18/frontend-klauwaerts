import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getEventsByMonthYear } from "../api";

export default function useEvents(month: number, year: number) {
  return useQuery<
    {
      count: number;
      events: BasicEvent[];
    },
    AxiosError
  >({
    queryKey: ["events", "month", month, "year", year],
    queryFn: async () => await getEventsByMonthYear(month, year),
  });
}
