import CardStyles from "../styles/Card.module.css"

const Card = ({props}) => {

  const {id, nombre, imagen, precio} = props;
    return (
      <div className={CardStyles.cardContainer}>
        <h1>{id}</h1>
        <img src={imagen} alt="" className={CardStyles.cardImg} />
        <h3>{nombre}</h3>
        <h4>{precio}</h4>
      </div>
    );
  };

  export default Card;