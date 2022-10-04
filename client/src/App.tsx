import { MDBCol, MDBContainer, MDBRow, MDBTable } from "mdb-react-ui-kit";
import { FC, useEffect, useState } from "react";
import { BodyTable } from "./components/BodyTable";
import { HeadTable } from "./components/HeadTable";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { Sort } from "./components/Sort";
import { useFetchAllExpensesQuery } from "./store/services/ExpensesService";

export const App: FC = () => {
  const [limit, setLimit] = useState({
    start: 0,
    end: 6,
  });
  const { data, isLoading } = useFetchAllExpensesQuery(limit);
  const [currentData, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, []);
  return (
    <MDBContainer>
      <Search limit={limit} setData={setData} />
      <div style={{ marginTop: "50px" }}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <HeadTable />
              <BodyTable data={currentData} />
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <Pagination limit={limit} setData={setData} setLimit={setLimit} />
      </div>
      <Sort limit={limit} setData={setData} />
    </MDBContainer>
  );
};
