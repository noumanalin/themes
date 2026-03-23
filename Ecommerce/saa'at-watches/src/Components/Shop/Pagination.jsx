import { useShop } from "../../Context/ShopContext.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = useShop();

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePageClick = (page) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border hover:border-transparent border-slate-200 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            page === currentPage
              ? "bg-primary text-white"
              : page === "..."
              ? "cursor-default"
              : "hover:bg-primary/10"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border hover:border-transparent border-slate-200 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Pagination;
