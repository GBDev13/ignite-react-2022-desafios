import { ComponentProps } from "react";
import { ProductSkeletonContainer, SkeletonItem } from "./styles";

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>;

export function ProductSkeleton({ ...props }: ProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  );
}
