// Normal şartlarda bir bileşeni kullanırken prop kullanıyorsanız  test ederken de kullanmalısınız
//Test ortamında prop gönderirken normalde gönderdiğiniz değerlere benzer değerler  göndermelisiniz
import { render, screen } from "@testing-library/react";
import Item from "../pages/home/Item";

test("Gönderilen proplar doğru şekilde kullanılıyor mu?", () => {
  // Bileşeni render et
  render(<Item color="text-blue-500" text="Toplam Vaka" value="300,8M" />);

  //Gerekli elementleri al
  const icon = screen.getByTestId("icon");
  //color propu ile gönderdiğimiz değer className'a eklenmiş mi?
  expect(icon).toHaveClass("text-blue-500");

  //text propu ile gönderdiğimiz değer doğru bir şekilde render edilmiş mi?
  screen.getByText("Toplam Vaka");
  //value propu ile gönderdiğimiz değer doğru bir şekilde render edilmiş mi?
  screen.getByText("300,8M");
});
