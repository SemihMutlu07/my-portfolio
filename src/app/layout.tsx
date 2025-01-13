import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio site.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
