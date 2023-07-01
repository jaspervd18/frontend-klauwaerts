import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import useById from "../../hooks/useById";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import { SideNav } from "../../components/misc/SideNav";

const Manage = () => {
  // const { id } = useParams() as unknown as { id: number };
  // const {
  //   data: training,
  //   error,
  //   isLoading,
  // } = useById<BasicEvent>("events", id);

  // if (error || isLoading)
  //   return <ErrorIsLoading text='training' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={SquaresPlusIcon} text={"Beheer"} />
      <SideNav />
    </>
  );
};

export default Manage;
