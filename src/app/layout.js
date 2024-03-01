import { Roboto, Pacifico, Bellefair, Kalam } from "next/font/google";
import "./globals.css";

const robato = Roboto({
  subsets: ["latin"],
  variable: "--font-robato",
  weight: ["100", "300", "400", "500", "500", "700", "900"],
});
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
});
const kalam = Kalam({
  subsets: ["devanagari"],
  variable: "--font-kalam",
  weight: ["700", "400", "300"],
});
const bellefair = Bellefair({
  subsets: ["hebrew"],
  variable: "--font-Bellefair",
  weight: ["400"],
});

export const metadata = {
  title: "Software Engineer",
  description: "I am Full stack Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robato.variable} ${pacifico.variable} ${bellefair.variable} ${kalam.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
