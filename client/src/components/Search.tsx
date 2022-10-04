import { MDBBtn } from "mdb-react-ui-kit";
import React, { FC, useState } from "react";
import { IExpenses, ILimit } from "../store/models/IExpenses";
import {
  useFetchLimitDataMutation,
  useFetchSearchDataMutation,
} from "../store/services/ExpensesService";
interface IProps {
  limit: ILimit;
  setData: (data: IExpenses[] | undefined) => void;
}
export const Search: FC<IProps> = ({ limit, setData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchExpenses, {}] = useFetchSearchDataMutation();
  const [reset, {}] = useFetchLimitDataMutation();
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const handleReset = async () => {
    await reset(limit);
  };
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = await searchExpenses({ limit, searchValue }).unwrap();
    setData(search);
    setSearchValue("");
  };
  return (
    <form className="d-flex input-group w-auto my-2" onSubmit={handleSearch}>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Search ..."
        value={searchValue}
        onChange={handleChangeValue}
      />
      <MDBBtn className="m-2" type="submit" color="dark">
        Search
      </MDBBtn>
      <MDBBtn className="m-2" color="info" onClick={handleReset}>
        Reset
      </MDBBtn>
    </form>
  );
};
