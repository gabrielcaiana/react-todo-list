// import { useQuery } from 'react-query';
import { ListTasks } from './components/ListTasks';
import { Header } from './components/Header';

export function App() {
  const baseUrl = "http://localhost:3333"
  // const { isLoading, error, data } = useQuery('repoData', async () => {
  //   const response = await fetch(`${baseUrl}/todos`);
  //   return response.json();
  // });

  // if (isLoading) return 'Loading...';
  // if (error) return 'An error has occurred: ' + error;

  const result = fetch(`${baseUrl}/todos`).then(res => {
    res.json()
  })

  console.log(result)

  return (
    <div>
      <Header />
      <main className="container">
          <ListTasks />
      </main>
    </div>
  );
}
