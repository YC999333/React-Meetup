import React from 'react';
import classes from './MeetupItems.module.css';

function MeetupItems(props) {
  return (
    <li className={classes.items}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorite</button>
      </div>
    </li>
  );
}

export default MeetupItems;
