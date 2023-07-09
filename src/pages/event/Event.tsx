import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import useById from "../../hooks/useById";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import EventDetails from "../../components/training/EventDetails";

const Event = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data: event, error, isLoading } = useById<BasicEvent>("events", id);

  if (error || isLoading)
    return <ErrorIsLoading text='evenement' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={ClipboardDocumentIcon} text={event.title} />
      <EventDetails {...event} />
    </>
  );
};

export default Event;
