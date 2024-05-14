import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultPage from "./components/ResultPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <ResultPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="sticky top-0 bg-white">
          <Header />
        </div>

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
