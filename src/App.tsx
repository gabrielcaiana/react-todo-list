import { ListTasks } from './components/ListTasks';
import { Header } from './components/Header';

export function App() {

  return (
    <div>
      <Header />
      <main className="container">
          <ListTasks  />
      </main>
    </div>
  );
}
