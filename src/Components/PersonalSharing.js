import React, { Component } from 'react';

class PersonalSharing extends Component {
  render() {

    if(this.props.data){
      var personal = this.props.data.personal.map(function(personal){
        return  <li key={personal.user}>
            <blockquote>
               <p>{personal.text}</p>
               <cite>{personal.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="personal">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Personal Sharing</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {personal}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default PersonalSharing;
