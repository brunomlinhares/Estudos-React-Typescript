import FooterBar from "./components/FooterBar";
import Header from "./components/Header";
import PostList from "./components/PostList";
import "./index.css";

function App() {
  return (
    <div className="bg-zinc-100">
      <Header />
      <PostList />
      <FooterBar />
    </div>
  );
}

export default App;
