import { Summary } from "../Summary";
import { TransactionsTable } from "../TransanctionsTable";
import { Container } from "./style";

export function Dasboard() {
   return(
    <Container>
      <Summary />
      <TransactionsTable />  
    </Container>
   ) 
}