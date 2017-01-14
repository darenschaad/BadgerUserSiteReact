import React from 'react';


const Loading = (props) => {
  return(
    <div id="loading-div" className="animated bounce infinite">
      <h3>
        <img id="loading-image"  src={require('../img/badgey.png')} alt="badger logo"/>
          Loading...
      </h3>
    </div>

  )
}




export default Loading;
