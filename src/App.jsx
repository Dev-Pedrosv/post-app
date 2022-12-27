import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import * as C from "./style";

function App() {
  return (
    <>
      <C.Screen>
        <Header />
        <C.ContainerPost>
          <Profile />
          <Posts />
        </C.ContainerPost>
      </C.Screen>
    </>
  );
}

export default App;
