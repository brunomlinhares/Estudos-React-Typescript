import Header from "./components/Header";
import PostList from "./components/PostList";
import SliderPost from "./components/SliderPost";
import "./index.css";

function App() {
  return (
    <div className="bg-zinc-100">
      <Header />
      <SliderPost />
      <PostList />
    </div>
  );
}

export default App;
