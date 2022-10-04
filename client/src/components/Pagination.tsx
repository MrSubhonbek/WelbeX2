import {
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import { FC, useState } from "react";
import { IExpenses, ILimit } from "../store/models/IExpenses";
import { useFetchLimitDataMutation } from "../store/services/ExpensesService";

interface IProps {
  limit: ILimit;
  setData: (data: IExpenses[] | undefined) => void;
  setLimit: (limit: ILimit) => void;
}

export const Pagination: FC<IProps> = ({ limit, setData, setLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [page, {}] = useFetchLimitDataMutation();
  const increase = limit.end;
  const handleNext = async () => {
    const data = await page({
      start: limit.start + increase,
      end: limit.end + increase,
    }).unwrap();
    if (data.length >= 1) {
      setData(data);
      setLimit({
        start: limit.start + increase,
        end: limit.end + increase,
      });
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = async () => {
    if (currentPage <= 1) {
      return;
    }
    const data = await page({
      start: limit.start - increase,
      end: limit.end - increase,
    }).unwrap();
    setData(data);
    setLimit({
      start: limit.start - increase,
      end: limit.end - increase,
    });
    setCurrentPage(currentPage - 1);
  };

  const renderPagination = () => {
    return (
      <MDBPagination className="mb-0">
        <MDBPaginationItem>
          <MDBBtn onClick={handlePrev}>Prev</MDBBtn>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{currentPage}</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBBtn onClick={handleNext}>Next</MDBBtn>
        </MDBPaginationItem>
      </MDBPagination>
    );
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "250px",
        alignContent: "center",
      }}
    >
      {renderPagination()}
    </div>
  );
};
