export const Col: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  ...props
}) => {
  return <div className="flex flex-col gap-4" {...props} />;
};
