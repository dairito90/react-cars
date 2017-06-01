import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="main">
        <div className="list">
          <div className="brand">
            {this.props.brandName}
          </div>
          <div className="model">
            {this.props.modelName}
          </div>
          <div className="submodel">
            {this.props.submodel}
          </div>
          <div className="year">
              {this.props.year}
          </div>
        </div>
      </div>
    );
  }
}

class CarList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentsDidMount() {
    this.setState({ car:car })
  }

  render() {
    const carComponents = (
      <Car
        brandName= 'Toyota'
        modelName= 'Corolla'
        submodel= 'LE'
        year='2016'
      />
    );
    return (
      <div className="list">
        {carComponents}
      </div>
    );
  }
}


export default CarList;
