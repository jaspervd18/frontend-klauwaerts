import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import useById from "../../hooks/useById";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import TrainingDetails from "../../components/training/TrainingDetails";

const Training = () => {
  const { id } = useParams() as unknown as { id: number };
  const {
    data: training,
    error,
    isLoading,
  } = useById<BasicEvent>("events", id);

  if (error || isLoading)
    return <ErrorIsLoading text='training' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={ClipboardDocumentIcon} text={`Training #${id}`} />
      <TrainingDetails {...training} />
    </>
  );
};

export default Training;
