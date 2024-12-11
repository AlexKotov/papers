import { Header } from "./Header";
import { List } from "./List";

import "./App.css";

/**
 * TODO написать добавление / удаление группы
 * TODO подумать над экспортом текстов в файлы
 */
function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <hr style={{ margin: "6px 0 18px 0" }} />
        <List />
      </main>
    </div>
  );
}

export default App;
