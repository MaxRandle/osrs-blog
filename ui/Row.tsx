import { cx } from "tailwind-variants";

type Props = {
  justify?: "center" | "evenly";
};

const justifyVariants: Record<NonNullable<Props["justify"]>, string> = {
  center: "justify-center",
  evenly: "justify-evenly",
};

export const Row: React.FC<React.ComponentPropsWithoutRef<"div"> & Props> = ({
  justify = "evenly",
  ...props
}) => {
  return (
    <div
      className={cx("flex flex-row gap-4 items-center", justifyVariants[justify])}
      {...props}
    />
  );
};
