import React from "react";
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
  h1: ({ ...props }) => <h1 className="text-3xl" {...props} />,
  h2: ({ ...props }) => <h2 className="text-xl" {...props} />,
  h3: ({ ...props }) => <h2 className="text-lg" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc ml-6" {...props} />,

  img: ({ alt, ...props }) => (
    <Image
      className="block w-20 shrink-0"
      alt={alt ?? ""}
      width={160}
      height={160}
      {...(props as Omit<ImageProps, "alt">)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
