import { MDBTableHead } from "mdb-react-ui-kit";
export const HeadTable = () => {
  return (
    <MDBTableHead dark>
      <tr>
        <th scope="col"> # </th>
        <th scope="col"> Name </th>
        <th scope="col"> Date </th>
        <th scope="col"> Count </th>
        <th scope="col"> Distance </th>
      </tr>
    </MDBTableHead>
  );
};
