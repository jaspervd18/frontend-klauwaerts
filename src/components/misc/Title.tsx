interface TitleProps {
  Icon?: React.ElementType;
  text: string;
}

const Title = ({ Icon, text }: TitleProps) => {
  return (
    <h1 className='mb-4 flex shrink-0 items-center gap-2 text-green-600'>
      {Icon && <Icon className='h-10 w-10 shrink-0 stroke-1' />}
      <span className='truncate text-2xl font-light'>{text}</span>
    </h1>
  );
};

export default Title;
