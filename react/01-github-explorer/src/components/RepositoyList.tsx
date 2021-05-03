import { useEffect, useState } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from './RepositoryItem';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositioryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/arthsan/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
