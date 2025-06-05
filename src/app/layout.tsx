// app/layout.tsx
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aryan Kharva | Portfolio',
  description: 'Frontend Developer & CS student focused on impactful UI and web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} w-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
