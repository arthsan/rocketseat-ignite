import { Counter } from "./components/Counter";
import { RepositioryList } from "./components/RepositoyList";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <RepositioryList />
      <Counter />
    </>
  );
}
