import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCompetitionsByMonthYear } from "../api";

export default function useCompetitions(month: number, year: number) {
  return useQuery<
    {
      count: number;
      competitions: Competition[];
    },
    AxiosError
  >({
    queryKey: ["competitions", "month", month, "year", year],
    queryFn: async () => await getCompetitionsByMonthYear(month, year),
  });
}
