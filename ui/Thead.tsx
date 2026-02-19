export const Thead: React.FC<React.ComponentPropsWithoutRef<"thead">> = ({
  ...props
}) => {
  return <thead className="border-t border-b" {...props} />;
};
