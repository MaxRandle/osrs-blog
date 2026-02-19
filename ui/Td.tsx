export const Td: React.FC<React.ComponentPropsWithoutRef<"td">> = ({
  ...props
}) => {
  return <td className="p-2 first:border-l border-r" {...props} />;
};
