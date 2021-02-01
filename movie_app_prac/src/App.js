import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://cdn.pixabay.com/photo/2017/06/28/03/58/kimchi-2449656_960_720.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "icecream",
    image: "https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_960_720.jpg",
    rating: 3.4
  },
  {
    id: 3,
    name: "beef",
    image: "https://cdn.pixabay.com/photo/2018/08/29/19/03/steak-3640560_960_720.jpg",
    rating: 4.6
  }
];

function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} width="150" />
  </div>
  );
}

  
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
