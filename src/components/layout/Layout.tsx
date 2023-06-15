import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='heropattern-topography-green-500/10 flex min-h-full flex-col bg-gray-100'>
      <Header />
      <main className='mx-auto -mt-32 h-full w-full max-w-2xl flex-1 px-2 py-4 sm:px-4 sm:py-8 lg:max-w-7xl lg:px-6'>
        <div className='relative h-full overflow-x-hidden rounded-lg border border-gray-200 bg-white px-4 py-6 sm:px-6 md:p-8'>
          {children ? children : <Outlet />}
        </div>
      </main>
      <Footer />
      <ToastContainer position='bottom-left' autoClose={3000} />
    </div>
  );
};

export default Layout;
