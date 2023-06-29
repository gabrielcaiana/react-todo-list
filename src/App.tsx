import { CreateTask } from './components/CreateTask'
import { Header } from './components/header'

function App() {
  return (
    <div>
       <Header />
       <main className="container">
       <CreateTask />
       </main>
    </div>
  )
}

export default App
