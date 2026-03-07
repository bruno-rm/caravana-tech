import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center bg-[#353535] hover:text-[#b4b4b4] text-white px-4 text-sm font-medium cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  );
}
