import React from "react";
import Header from "./Header";
import CardPizza from './CardPizza';
import pizzas from '../pizzas'
// import  pizzaCart  from "../pizzas";

const Home = () => {

    // const [cart, setCart] = useState([])

    return (
        <div className="container-fluid p-0">
            <Header />

            <div className="row">
                {pizzas.map((pizza) => {
                    // console.log(pizza)
                    return (
                        <div key={pizza.id} className="col-md-4 col-sm-6 mb-4">
                            <CardPizza key={pizza.id} pizza={pizza} />
                        </div>
                    )
                })}
            </div>

            {/* <div className="row p-4">
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Napolitana"
                        price={5950}
                        ingredients={["mozarella", "tomates", "jamon", "oregano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"  
                    />
                </div>
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Española"
                        price={6950}
                        ingredients={["mozarella", "gorgonzola", "parmesano", "provolone"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
                    />
                </div>
                <div className="col-12 col-md-4">
                    <CardPizza
                        name="Pizza Pepperoni"
                        price={7950}
                        ingredients={["mozarella", "pepperoni", "oregano"]}
                        img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Home;