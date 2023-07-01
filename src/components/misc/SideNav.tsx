import { BanknotesIcon, UserIcon } from "@heroicons/react/24/outline";
import { IconHoverEffect } from "./IconHoverEffect";
import { Link } from "react-router-dom";

export function SideNav() {
  return (
    <nav className='sticky top-0 px-2 py-4'>
      <ul className='flex flex-col items-start gap-2 whitespace-nowrap'>
        <li>
          <Link to={"/beheer/"}>
            <IconHoverEffect>
              <span className='flex items-center gap-4'>
                <UserIcon className='h-8 w-8' />
                <span className='hidden text-lg md:inline'>Leden</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        <li>
          <Link to={`/beheer/`}>
            <IconHoverEffect>
              <span className='flex items-center gap-4'>
                <BanknotesIcon className='h-8 w-8' />
                <span className='hidden text-lg md:inline'>Tarieven</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
