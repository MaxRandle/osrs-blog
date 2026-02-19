export const Tr: React.FC<React.ComponentPropsWithoutRef<"tr">> = ({
  ...props
}) => {
  return <tr className="border-b" {...props} />;
};
