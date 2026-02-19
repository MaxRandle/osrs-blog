export const Th: React.FC<React.ComponentPropsWithoutRef<"th">> = ({
  ...props
}) => {
  return (
    <th
      className="p-2 first:border-l border-r text-left align-bottom"
      {...props}
    />
  );
};
