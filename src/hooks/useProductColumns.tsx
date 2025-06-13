import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import type { Item } from '@/types/type';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo, type ReactNode } from 'react';

const columnHelper = createColumnHelper<Item & { actions: ReactNode }>();

export const useProductColumns = () => {

  const { handleDelete} = useProducts();
  

  const columns = useMemo(() => [
    columnHelper.accessor("id", {
      header: "ID",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("name", {
      header: "NAME",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("category", {
      header: "CATEGORY",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("gender", {
      header: "GENDER",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("price", {
      header: "PRICE",
      cell: info => info.getValue()
    }),
    columnHelper.accessor("actions", {
      header: "Actions",
      cell: ({ row }) => {
        const item = row.original;
        return (
          <div className="flex gap-2">
            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
          </div>
        );
      }
    }),
  ], [handleDelete]);

  return columns;
};
