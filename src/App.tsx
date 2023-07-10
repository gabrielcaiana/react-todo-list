import { ListTasks } from './components/ListTasks'
import { Header } from './components/header'

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <ListTasks />
      </main>
    </div>
  )
}

export default App
