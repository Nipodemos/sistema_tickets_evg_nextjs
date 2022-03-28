import { Pane } from "evergreen-ui";
import { NextPage } from "next";
import { useMemo } from "react";

interface Column {
  Header: string;
  accessor: string;
}

const ListarTickets: NextPage = () => {
  const data = useMemo(
    () => [
      { col1: "Hello", col2: "wolrd" },
      { col1: "Hello", col2: "wolrd" },
      { col1: "Hello", col2: "wolrd" },
    ],
    []
  );

  const colums = useMemo<Column[]>(
    () => [
      { Header: "coluna 1", accessor: "col1" },
      { Header: "coluna 2", accessor: "col2" },
    ],
    []
  );
  return (
    <>
      <Pane>a</Pane>
    </>
  );
};
export default ListarTickets;
