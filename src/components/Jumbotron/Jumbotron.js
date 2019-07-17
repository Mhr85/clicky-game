// import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <h1 className="display-3 text-center">Fluid jumbotron</h1>
//           <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//           <p className="lead text-center"> Scrore: {this.props.score}</p>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// };

// export default Example;

import React, { Component } from "react";


class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container-fluid">
          <h1 className="display-3">Test Your Memory</h1>
          <p className="lead">Click on the dog image, remember which one you already clicked on. If you click all 12 images without clickign the same image twice you win.</p>
          <h2 className="display-6">Score: {this.props.score}</h2>
        </div>
      </div>
    )
  }
}


export default Jumbotron;



