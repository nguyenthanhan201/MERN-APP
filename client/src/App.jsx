import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import * as actions from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  dispatch(actions.getPosts.getPostsRequest());

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
