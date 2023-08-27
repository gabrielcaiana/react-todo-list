import { ListTasks } from './components/ListTasks';
import { Header } from './components/AppHeader';

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
