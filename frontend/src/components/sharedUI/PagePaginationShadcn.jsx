import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PagePaginationShadcn = (props) => {
  const numbers = Array.from({ length: props.numOfPages }, (_, i) => i + 1);
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];

  console.log("numbers=", numbers);

  return (
    <Pagination>
      <PaginationContent>
        {props.page === firstNumber || (
          <PaginationItem onClick={props.decreasePageNumberHandler}>
            <PaginationPrevious className="hover:bg-primary/20" />
          </PaginationItem>
        )}

        {numbers.map((num) => (
          <PaginationItem
            key={num}
            onClick={() => props.handlePageSetNumber(num)}
          >
            {num === props.page ? (
              <PaginationLink
                to="#"
                isActive
                className="bg-primary/80 text-white hover:bg-primary/20"
              >
                {num}
              </PaginationLink>
            ) : (
              <PaginationLink to="#" className="hover:bg-primary/20">
                {num}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {props.page === lastNumber || (
          <PaginationItem onClick={props.increasePageNumberHandler}>
            <PaginationNext className="hover:bg-primary/20" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PagePaginationShadcn;
