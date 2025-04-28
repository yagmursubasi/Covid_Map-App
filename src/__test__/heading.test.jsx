import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { exampleCountryDetails } from "../utils/Constants";

//redux kullanılan bileşenleri test ederken test edeceğimiz senaryodaki store'un datasına göre store'un sahte bir versiyonunu oluşturmalıyız
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
  //test senaryosune özel store'un kopyasını oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });
  //bileşeni render et
  render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>
    </>
  );
  //ekranda loader var mı kontrol et
  screen.getByTestId("header-loader");
});
it("store yüklenme bittiğinde ekranda loader yoktur", () => {
  // test senaryosuna özel store'un kopyasını oluştur
  const store = mockStore({ isLoading: false, error: null, data: null });
  // bileşeni render et
  render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>
    </>
  );
  // ekranda loader id sine sahip eleman varsa al
  const loader = screen.queryByTestId("header-loader");
  // ekranda loader yok mu kontrol et
  expect(loader).toBeNull();
});
it("store'a veri geldiğinde ekrana veriler basılır", () => {
  // test senaryosuna özel store'un kopyasını oluştur
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exampleCountryDetails,
  });
  // bileşeni render et
  render(
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Heading />
        </BrowserRouter>
      </Provider>
    </>
  );
  // ekranda veriler var mı kontrol et

  //ülke ismi ekrana geldi mi?
  screen.getByRole("heading", { name: exampleCountryDetails.country });
  //bayrak resmi ekrana geldi mi?
  const img = screen.getByAltText("Kazakhstan flag");

  //resmin kaynağı doğru mu?
  expect(img).toHaveAttribute("src", exampleCountryDetails.flag.png);
});
