export const Row: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  ...props
}) => {
  return (
    <div
      className="flex flex-row gap-4 items-center justify-evenly"
      {...props}
    />
  );
};
