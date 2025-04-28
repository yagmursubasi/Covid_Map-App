import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/Content";
import { exampleCountryDetails } from "../utils/Constants";

//sahte store oluştur
const mockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana ContentLoader bileşenini getirir", () => {
  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getAllByTestId("content-loader");
});

test("store hata durumundayken ekrana Error bileşenini getirir", () => {
  const store = mockStore({
    isLoading: false,
    error: "Hata",
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getByTestId("error");
});

test("store veri durumundayken ekrana nesnedeki her bir değer için Card bileşenini getirir", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exampleCountryDetails,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  const arr = Object.entries(exampleCountryDetails).filter(
    (i) => i[0] !== "flag"
  );

  //dizideki her bir eleman için Card bileşeninin render edilip edilmediğini kontrol et
  arr.forEach((item) => {
    //ekrana item'ın key değerleri geliyor mu?
    screen.getByText(item[0]);
    //ekrana item'ın value değerleri geliyor mu?
    screen.getAllByText(item[1]);
  });
});
