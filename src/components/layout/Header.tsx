import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import NavItem from "./NavItem";

const nav = [
  { name: "Kalender", to: "/" },
  { name: "Trainingen", to: "/trainingen" },
];

const userNav = [
  { name: "Account", to: "/account" },
  { name: "Overzicht", to: "/overzicht" },
  { name: "Uitloggen", to: "/logout" },
];

const Header = () => {
  return (
    <header className='rounded-b-3xl bg-green-600 pb-32 font-medium text-green-200'>
      <Disclosure as='nav' className='border-b border-green-400 md:border-none'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-4 md:px-8'>
              <div className='relative flex h-16 items-center justify-between md:border-b md:border-green-500'>
                <div className='flex items-center px-2 md:px-0'>
                  <DesktopNav />
                </div>
                <MobileMenuButton open={open} />
                <DesktopIcons />
              </div>
              <MobileNav />
            </div>
          </>
        )}
      </Disclosure>
    </header>
  );
};

const MobileNav = () => {
  return (
    <Disclosure.Panel className='md:hidden'>
      <div className='flex flex-col gap-y-1 py-3'>
        {nav.map((item) => (
          <NavItem key={item.name} {...item}>
            <Disclosure.Button as='span'>{item.name}</Disclosure.Button>
          </NavItem>
        ))}
      </div>
      <div className='border-t border-green-500 py-3'>
        <div className='mt-3 flex flex-col gap-y-1'>
          {userNav.map((item) => (
            <NavItem key={item.name} {...item}>
              <Disclosure.Button as='span'>{item.name}</Disclosure.Button>
            </NavItem>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

const DesktopIcons = () => {
  return (
    <div className='hidden md:ml-4 md:block'>
      <div className='flex items-center'>
        <Menu as='div' className='relative ml-4 flex-shrink-0'>
          <div>
            <Menu.Button className='flex text-sm hover:text-white'>
              <span className='sr-only'>Open gebruiker menu</span>
              <UserCircleIcon className='h-8 w-8' aria-hidden='true' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              {userNav.map(({ to, name }) => (
                <NavItem
                  key={name}
                  to={to}
                  className='block px-4 py-2 text-sm text-gray-700'
                >
                  <Menu.Item as='span'>{name}</Menu.Item>
                </NavItem>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

const MobileMenuButton = ({ open }: { open: boolean }) => (
  <div className='flex md:hidden'>
    <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-green-700 hover:bg-opacity-50 hover:text-white'>
      <span className='sr-only'>Open main menu</span>
      {open ? (
        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
      ) : (
        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
      )}
    </Disclosure.Button>
  </div>
);

const DesktopNav = () => (
  <div className='hidden md:ml-10 md:block'>
    <div className='flex gap-x-4'>
      {nav.map(({ to, name }) => (
        <NavItem key={name} to={to}>
          {name}
        </NavItem>
      ))}
    </div>
  </div>
);

export default Header;
