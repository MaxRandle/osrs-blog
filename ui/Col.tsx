export const Col: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { noShrink?: boolean }
> = ({ noShrink, ...props }) => {
  return (
    <div
      className={`flex flex-col gap-4 ${noShrink && "shrink-0"}`}
      {...props}
    />
  );
};
