import { rubik } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Frontend Quiz App",
  description: "Test your knowledge of frontend development with this application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>{children}</body>
    </html>
  );
}
