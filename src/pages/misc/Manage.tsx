import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import Title from "../../components/misc/Title";
import { SideNav } from "../../components/misc/SideNav";

const Manage = () => {
  return (
    <>
      <Title Icon={SquaresPlusIcon} text={"Beheer"} />
      <SideNav />
    </>
  );
};

export default Manage;
