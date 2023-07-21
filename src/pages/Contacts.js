const Constacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location:</h2>
              <p>Belarus, Minsk</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Phone:</h2>
              <p>
                <a href="tel:+375447270388">+375 (44) 727-03-88</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email:</h2>
              <p>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJVDwPKndMDlTVHqXxQrPVrFhrQxQLKJJZVgBtcGpgHdvrlNRPZKxnmDVmQNmRQGSwNB">
                  Kristina.Minevich03@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Constacts;
