import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend:</h2>
              <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend:</h2>
              <p>NodeJS, ASP.NET, Java, MySQL, MSSQL, MongoDB, PostgreSQL</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
