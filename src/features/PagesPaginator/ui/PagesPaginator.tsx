import * as cls from "./PagesPaginator.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface PagesPaginatorProps {
  className?: string;
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number, after: string | null) => void;
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string | null;
  };
  prevCursor: string | null;
}

const PagesPaginator = (props: PagesPaginatorProps) => {
  const {
    className,
    totalCount,
    currentPage,
    onPageChange,
    pageInfo,
    prevCursor,
  } = props;

  const totalPages = Math.ceil(totalCount / 10);

  const handlePrevPage = () => {
    if (prevCursor) {
      onPageChange(currentPage - 1, prevCursor);
    }
  };

  const handleNextPage = () => {
    if (pageInfo.hasNextPage) {
      onPageChange(currentPage + 1, pageInfo.endCursor);
    }
  };

  return (
    <div className={classNames(cls.PagesPaginator, {}, [className])}>
      {currentPage > 1 && (
        <button onClick={handlePrevPage} className={cls.PageNumber}>
          Prev
        </button>
      )}

      {pageInfo.hasNextPage && currentPage < totalPages && (
        <button onClick={handleNextPage} className={cls.PageNumber}>
          Next
        </button>
      )}
    </div>
  );
};

export default PagesPaginator;
