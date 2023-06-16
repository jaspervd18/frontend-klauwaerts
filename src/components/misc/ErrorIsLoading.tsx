type ErrorIsLoadingProps = {
  text: string;
  isLoading: boolean;
};

const ErrorIsLoading = ({ text, isLoading }: ErrorIsLoadingProps) => {
  if (!isLoading)
    throw new Response(null, {
      status: 500,
      statusText: `fout bij ophalen van ${text}`,
    });

  return (
    <div className='flex h-80 items-center justify-center gap-10'>
      <div className='aspect-1 bg-greend-600 h-10 animate-[bounce_1s_infinite_100ms] rounded-full' />
      <div className='aspect-1 bg-greend-600 h-10 animate-[bounce_1s_infinite_200ms] rounded-full delay-1000' />
      <div className='aspect-1 bg-greend-600 h-10 animate-[bounce_1s_infinite_300ms] rounded-full' />
    </div>
  );
};

export default ErrorIsLoading;
