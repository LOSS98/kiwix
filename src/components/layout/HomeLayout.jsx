import Header from './Header';

const HomeLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;