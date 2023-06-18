import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getEventsByMonthYear } from "../api";
import { useEffect } from "react";

export default function useEvents(month: number, year: number) {
  const query = useQuery<
    {
      count: number;
      events: BasicEvent[];
    },
    AxiosError
  >({
    queryKey: ["events", "month", month, "year", year],
    queryFn: async () => await getEventsByMonthYear(month, year),
    keepPreviousData: true,
  });

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!query.isPreviousData) {
      queryClient.prefetchQuery({
        queryKey: [
          "events",
          "month",
          month == 12 ? 1 : month + 1,
          "year",
          month == 12 ? year + 1 : year,
        ],
        queryFn: async () => await getEventsByMonthYear,
      });
    }
  }, [query.data, query.isPreviousData, month, year, queryClient]);

  return query;
}
