import { format, parseISO } from "date-fns";
import { nl } from "date-fns/locale";

const CURRENCY_FORMATTER = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
};

const formatDate = (date: Date | string) => {
  const formattedDate = format(parseISO(date.toString()), "eeee dd/MM/yyyy", {
    locale: nl,
  });
  return formattedDate;
};

const formatTime = (date: Date | string) => {
  return format(new Date(date), "HH:mm");
};

const formatDateTime = (date: Date | string) => {
  return format(new Date(date), "dd/MM/yyyy - HH:mm");
};

const formatMonthYear = (month: number, year: number) => {
  return format(new Date(year, month - 1), "MMMM yyyy", { locale: nl });
};

export {
  formatCurrency,
  formatDate,
  formatDateTime,
  formatTime,
  formatMonthYear,
};
