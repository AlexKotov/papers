import { Header } from "./Header";
import { List } from "./List";

import "./App.css";
import { useState } from "react";

/**
 * TODO прикрутить MUI
 * TODO подумать над экспортом текстов в файлы
 */
function App() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="App">
      <main className="main">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <hr style={{ margin: "6px 0 18px 0" }} />
        <List currentTab={currentTab} />
      </main>
    </div>
  );
}

export default App;
