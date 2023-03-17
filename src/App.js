import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState();

  const fetchApi = async () => {
    const respuesta = await fetch(url);
    // console.log (respuesta.status);

    const respuestaJSON = await respuesta.json();
    setUser(respuestaJSON);
    console.log(respuestaJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <header>
        {" "}
        <h1 className="title"> Users </h1>{" "}
      </header>
      <div className="width">
        {!user
          ? "Cargando..."
          : user.map((user, index) => {
              return (
                <div key={index} className="cont_card">

                  <article className="card">
                    <div className="clip"></div>
                    <div className="icon"></div>

                    <div className="info">
                      <h3 className="name">{user.name}</h3>
                    </div>
                    <div className="info">
                      <p>
                        Email: <span className="black">{user.email}</span>
                      </p>
                    </div>
                    <div className="info">
                      <p>
                        City: <span className="black">{user.address.city}</span>
                      </p>
                    </div>
                    <div className="info">
                      <p>
                        Company:{" "}
                        <span className="black">{user.company.name}</span>
                      </p>
                    </div>

                    <p className="cont"> #{index + 1}</p>
                  </article>
                </div>
              );
            })}
      </div>
      <footer>
        <p>© Todos los derechos</p>
      </footer>
    </div>
    
  );
}

export default App;
