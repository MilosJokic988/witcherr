import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
