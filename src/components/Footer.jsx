// src/components/Footer.jsx
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto" style={{ fontFamily: 'Cinzel, serif' }}>
      <Container className="text-center">
        <small>© 2025 Witcher World | Created by Miloš Jokić</small>
      </Container>
    </footer>
  );
}
