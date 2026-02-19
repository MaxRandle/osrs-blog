export const Tbody: React.FC<React.ComponentPropsWithoutRef<"tbody">> = ({
  ...props
}) => {
  return <tbody className="border-b" {...props} />;
};
