import localFont from "next/font/local";

export const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const rubik = localFont({
    src: './fonts/Rubik-VariableFont_wght.ttf',
    variable: '--font-rubik',
    weight: '300 500',
});
