import { RedocStandalone } from "redoc";
import myFile from "./business_api.yaml";
function App() {
  return (
    <div className="App">
      <RedocStandalone
        specUrl={myFile}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </div>
  );
}

export default App;
