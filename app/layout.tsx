import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>{children}</body>
    </html>
  );
}
