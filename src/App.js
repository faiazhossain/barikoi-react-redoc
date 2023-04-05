import { RedocStandalone } from "redoc";
import myFile from "./business_api.yaml";
function App() {
  const themeColor = "green";
  const themeColorRed = "red";
  const rightPanelColor = "#19376D";
  const codeBlockColor = "#0B2447";
  return (
    <div className="App">
      <RedocStandalone
        specUrl={myFile}
        options={{
          nativeScrollbars: true,
          // theme: {
          //   colors: {
          //     accent: { main: themeColorRed },
          //     primary: { main: themeColor },
          //     border: { dark: themeColor },
          //   },
          //   codeBlock: {
          //     backgroundColor: codeBlockColor,
          //     borderRadius: "100px",
          //   },
          //   rightPanel: {
          //     backgroundColor: rightPanelColor,
          //   },
          //   sidebar: { backgroundColor: "#A5D7E8", activeTextColor: "red" },
          // },

          theme: {
            breakpoints: {
              small: "10rem",
              medium: "40rem",
              large: "85rem",
            },
            colors: {
              primary: {
                main: "rgba(246, 20, 63, 1)",
                light: "rgba(246, 20, 63, 0.42)",
              },
              success: {
                main: "rgba(28, 184, 65, 1)",
                light: "#81ec9a",
                dark: "#083312",
                contrastText: "#000",
              },
              text: {
                primary: "rgba(0, 0, 0, 1)",
                secondary: "#4d4d4d",
              },
              http: {
                get: "rgba(0, 200, 219, 1)",
                post: "rgba(28, 184, 65, 1)",
                put: "rgba(255, 187, 0, 1)",
                delete: "rgba(254, 39, 35, 1)",
              },
            },
            typography: {
              fontSize: "16px",
              fontFamily: "Fira Sans, Roboto, sans-serif",
              optimizeSpeed: true,
              smoothing: "antialiased",
              headings: {
                fontWeight: "bold",
                lineHeight: "1em",
              },
              code: {
                fontWeight: "600",
                color: "rgba(92, 62, 189, 1)",
                wrap: true,
              },
              links: {
                color: "rgba(246, 20, 63, 1)",
                visited: "rgba(246, 20, 63, 1)",
                hover: "#fa768f",
              },
            },
            sidebar: {
              width: "300px",
              textColor: "#000000",
            },
            rightPanel: {
              backgroundColor: "rgba(55, 53, 71, 1)",
              textColor: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
