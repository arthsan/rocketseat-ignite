import { Summary } from '../Summary'
import { TransacationsTable } from '../TransactionsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransacationsTable />
    </Container>
  )
}