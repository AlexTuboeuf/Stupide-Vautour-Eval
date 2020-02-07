import React from 'react';
import './Card.css';



const Card = (props) => {
    return(
        <div className='MainJoueur'>
        <div className='Card' style={{}}>

        <img alt="test" src={props.backgroundImage
                } 
            
            />

            <p
                style={{'color': props.color}
            }

            
            
            >
                {props.value}</p>
        </div>
        </div>
        )
}


export default Card;