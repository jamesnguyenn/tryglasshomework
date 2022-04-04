import "./App.css";
import BaiTapThuKinh from "./components/BaiTapThuKinh";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-start items-center z-50 text-white gap-4 ">
        <h1 className="text-3xl font-bold p-10 bg-[#00000052] w-full text-center ">
          TRY GLASSES APP ONLINE
        </h1>
        <BaiTapThuKinh />
      </div>
    </div>
  );
}

export default App;
