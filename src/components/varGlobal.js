//port du server
const db = {
  port: 2000,
};
//url => 13.38.54.185

//Variable global qui permet de rajouter le port (car dans la bdd il n'y a que le nom de l'image)
const varGlobal = `http://localhost:${db.port}`;
export default varGlobal;
