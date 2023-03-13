//port du server
const db = {
  port: 2000,
};


//Variable global qui permet de rajouter le port (car dans la bdd il n'y a que le nom de l'image)
const varGlobal = `http://13.38.54.185:${db.port}`;
export default varGlobal;
