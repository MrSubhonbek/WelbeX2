import { MDBTableBody } from "mdb-react-ui-kit";
import { IExpenses } from "../store/models/IExpenses";
interface IProps {
  data: Array<IExpenses> | undefined;
}
export function BodyTable(props: IProps) {
  const showDataHandler = props.data?.map((expenses) => (
    <MDBTableBody key={expenses._id}>
      <tr>
        <th scope="row">{expenses._id}</th>
        <td>{expenses.name}</td>
        <td>{expenses.date}</td>
        <td>{expenses.count}</td>
        <td>{expenses.distance}</td>
      </tr>
    </MDBTableBody>
  ));
  return (
    <>
      {props.data?.length === 0 ? (
        <MDBTableBody className="align-center mb-0">
          <tr>
            <td colSpan={8} className="text-center mb-0">
              No data found
            </td>
          </tr>
        </MDBTableBody>
      ) : (
        showDataHandler
      )}
    </>
  );
}
