export const NoShrink: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  ...props
}) => {
  return <div className="shrink-0" {...props} />;
};
