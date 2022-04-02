import { Table } from "evergreen-ui";
import { NextPage } from "next";
import { useMemo } from "react";
import mockTickets from "../../mock_data/tickets";

const ListarTickets: NextPage = () => {
  const tickets = useMemo(() => mockTickets, []);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>ID</Table.TextHeaderCell>
          <Table.TextHeaderCell>Título</Table.TextHeaderCell>
          <Table.TextHeaderCell>Criado em</Table.TextHeaderCell>
          <Table.TextHeaderCell>Ações</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {tickets.map((ticket) => (
            <Table.Row key={ticket.id}>
              <Table.TextCell>{ticket.displayId}</Table.TextCell>
              <Table.TextCell>{ticket.title}</Table.TextCell>
              <Table.TextCell>{ticket.createdAt}</Table.TextCell>
              <Table.Cell>
                <button>Visualizar</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
export default ListarTickets;
