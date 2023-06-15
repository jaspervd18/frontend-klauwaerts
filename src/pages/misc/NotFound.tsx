import { Link } from "react-router-dom";

const NotFound = () => (
  <main className='min-h-full flex-1'>
    <div className="h-full w-full overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1487491491904-a48f73cd4078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVuY2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center">
      <div className='h-full w-full backdrop-brightness-50'>
        <div className='mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8'>
          <p className='text-base font-semibold leading-8 text-white'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
            Pagina niet gevonden
          </h1>
          <p className='mt-4 text-base text-white/70 sm:mt-6'>
            Sorry, we konden de pagina die u zoekt niet vinden.
          </p>
          <div className='mt-10 flex justify-center'>
            <Link to='/' className='text-sm font-semibold leading-7 text-white'>
              <span aria-hidden='true'>&larr;</span> Terug naar de homepagina
            </Link>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default NotFound;
