export const Col: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { noShrink?: boolean }
> = ({ noShrink, ...props }) => {
  return (
    <div className={`flex flex-col ${noShrink && "shrink-0"}`} {...props} />
  );
};
