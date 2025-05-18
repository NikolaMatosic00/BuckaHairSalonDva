// src/app/layout.js
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata = {
  title: 'Bucka - Vrhusnke Frizerske Usluge',
  description: 'Transformišite svoj stil uz naše profesionalne frizerske i kozmetičke usluge u Salonu Ime.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}