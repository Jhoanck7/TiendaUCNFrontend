"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Readonly<Props>) {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("search") ?? "";

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          disabled={currentPage === i + 1}
          onClick={() =>
            router.push(`/products?page=${i + 1}&search=${search}`)
          }
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
