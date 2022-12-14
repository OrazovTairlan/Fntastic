import logo from './logo.svg';
import './App.css';
import SideBar, {SideBarRight} from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ChannelBar from "./components/Content/Content";
import Messages from "./components/Messages/Messages";
import './index.css';
function App() {
  return (
      <div className="flex h-screen">
          <SideBar/>
          <ChannelBar/>
          <Messages/>
          <SideBarRight/>
      </div>
  );
}

export default App;
