import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../store/actions";

class Home extends React.PureComponent {
  _handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light Home__red"
              onClick={() => {
                this._handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Available Sneakers</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

// const mapDispatchToProps = dispatch => ({
//   addToCart: id => dispatch(addToCart(id))
// });

//OR

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
