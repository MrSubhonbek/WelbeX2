import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { FC, useState } from "react";
import { IExpenses, ILimit } from "../store/models/IExpenses";
import { useFetchSortDataMutation } from "../store/services/ExpensesService";
interface IProps {
  limit: ILimit;
  setData: (data: IExpenses[] | undefined) => void;
}
export const Sort: FC<IProps> = ({ limit, setData }) => {
  const sortOptions = ["name", "count", "distance"];

  const [sort, {}] = useFetchSortDataMutation();
  const handleSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortData = await sort({
      limit,
      sortColum: e.currentTarget.value,
    }).unwrap();
    setData(sortData);
  };

  return (
    <MDBRow>
      <MDBCol size={8} className="d-flex">
        <h5 className="mx-2">Sort By:</h5>
        <select onChange={handleSort}>
          <option>Select value</option>
          {sortOptions.map((columName, index) => (
            <option key={index} value={columName}>
              {columName}
            </option>
          ))}
        </select>
      </MDBCol>
    </MDBRow>
  );
};
