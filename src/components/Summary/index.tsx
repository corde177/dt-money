import incomeImg from '../../assets/income.svg';
import autComeImg from '../../assets/autCome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./style";
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions }= useTransactions();
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount; 
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  });

    return(
      <Container>
        <div>
           <header>
             <p>Entradas</p>
             <img src={incomeImg} alt="Entradas" />
           </header> 
           <strong> 
             {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
             }).format(summary.deposits) }
          </strong>
        </div>
        <div>
           <header>
             <p>Saidas</p>
             <img src={autComeImg} alt="Saidas" />
           </header> 
           <strong>- 
           {new Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL'
             }).format(summary.withdraw) }
           </strong>
        </div>
        <div className='hightlight-background'>
           <header>
             <p>Total</p>
             <img src={totalImg} alt="Total" />
           </header> 
           <strong>
           {new Intl.NumberFormat('pt-BR', {
               style: 'currency',
               currency: 'BRL'
             }).format(summary.total) }
           </strong>
        </div>
      </Container>
    )
}