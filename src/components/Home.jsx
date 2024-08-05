import { productos } from "../../utils/lista";
import Card from "./Card";
import HomeStyles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
        <h1 className={HomeStyles.title}>Lista de productos</h1>
        <div className={HomeStyles.list}>
          {productos.map((producto) => (
            <Card key={producto.id} props={producto} />
          ))}
        </div>
    </>
  )
}



export default Home;