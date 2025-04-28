import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

const info = "Hata mesajı";

test("prop olarak alınan error mesajını ekrana getirir", () => {
  render(<Error info={info} />);

  screen.getByText(info);
});

//Eğer bir bileşen prop olarak gönderilen bir fonksiyonu test etmek istiyorsak boş bir fonksiyon yerine bir mock fonksiyon oluşturup onu prop olarak göndermeliyiz.
test("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  const mockFn = jest.fn();

  render(<Error info={info} refetch={mockFn} />);

  //tekrar dene butonuna tıkla
  fireEvent.click(screen.getByRole("button"));

  //jest ile oluşturulan test edilebilir mock fonksiyonunun çağrılıp çağrılmadığını kontrol et
  expect(mockFn).toHaveBeenCalled();
});
