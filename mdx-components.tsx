import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { Thead } from "@/ui/Thead";
import { Tbody } from "@/ui/Tbody";
import { Tr } from "@/ui/Tr";
import { Td } from "@/ui/Td";
import { Th } from "./ui/Th";

const components: MDXComponents = {
  thead: Thead,
  tbody: Tbody,
  th: Th,
  tr: Tr,
  td: Td,
  table: ({ ...props }) => <table className="mb-2" {...props} />,
  p: ({ ...props }) => <p className="mb-2" {...props} />,
  h1: ({ ...props }) => (
    <h1 className="text-3xl text-center mb-4 mt-4 first:mt-0" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-2xl mb-2 mt-2 first:mt-0" {...props} />
  ),
  h3: ({ ...props }) => <h2 className="text-xl mb-2" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc ml-6 mb-2" {...props} />,
  img: ({ alt, ...props }) => (
    <Image
      className="block w-20 shrink-0 mb-2"
      alt={alt ?? ""}
      width={160}
      height={160}
      {...(props as Omit<ImageProps, "alt">)}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 opacity-40" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
