import { LoremIpsum } from "lorem-ipsum";

interface Ticket {
  id: string;
  displayId: number;
  title: string;
  createdAt: number;
}

const lorem = new LoremIpsum();

function criarTicket() {
  const ticket: Ticket = {
    createdAt: Date.now(),
    id: (Date.now() + Math.ceil(Math.random() * 200)).toString(),
    displayId: Math.ceil(Math.random() * 200),
    title: lorem.generateWords(10),
  };
  return ticket;
}

export default Array.from(Array(10).keys()).map((_) => criarTicket());
