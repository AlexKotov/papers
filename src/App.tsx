import { Header } from "./Header";
import { List } from "./List";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <hr style={{ width: "100%", margin: "28px 0 18px 0" }} />
        <List />
      </main>
    </div>
  );
}

export default App;
