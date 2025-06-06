"use client";

import NextImage, { ImageProps } from "next/image";

interface EnhancedImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

export default function Image({ src, ...props }: EnhancedImageProps) {
  const processedSrc =
    src.startsWith("/") && !src.startsWith("http") ? getAssetPath(src) : src;

  return <NextImage src={processedSrc} {...props} />;
}

export function getAssetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${__XR_ENV_BASE__}${normalizedPath}`;
}
