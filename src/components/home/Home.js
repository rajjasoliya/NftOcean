import React from 'react';
import { Card } from '../card/Card';
import './home.css';
const Home = (props) => {
        return (
           <div>
            <h1 className="card">{props.category.map(value => <Card key={value.id} card={value} />)}</h1>
           </div> 
        );
}
export default Home;