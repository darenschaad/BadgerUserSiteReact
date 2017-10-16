import React from 'react';
import * as branding from './branding';

const BadgeTile = (props) => {
  let index = branding.categories.indexOf(props.badge.category);

  let category = branding.categoryNames[index];

  let textColor = branding.textColors[index];

  let backgroundColor = branding.backgroundColors[index];

  return(
    <div key={props.idx} className="standard-search-individual-names">
      <div style={{backgroundColor: backgroundColor}} className='badge-tile hover-hand random-badge-content' onClick={() => props.goToBadge(props.badge, props.searchValue, props.searchState)}>
        <div className="badge-tile-image-details">
          <img className='detail-image' src={props.badge.imageUrl} alt={props.badge.names}></img>
          <div className="badge-tile-details">
            <span>{props.date}</span>
            <h1 style={{color: textColor }} >{props.badge.name}</h1>
            <span style={{color: textColor }} className="badge-tile-subtitle">To do: </span>
            <span className="badge-tile-description">{props.badge.description}</span>
            <br />
            <span style={{color: textColor }} className="badge-tile-subtitle">Proof: </span>
            <span className="badge-tile-description">{props.badge.proof}</span>
          </div>
        </div>
        <h1 style={{color: textColor }} className="badge-tile-category">{category}</h1>
      </div>
    </div>
  )
}

export default BadgeTile;
