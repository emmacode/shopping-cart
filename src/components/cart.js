import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeItem, subtractQuantity, addQuantity } from "../store/actions";
import Recipe from "../components/Recipe";

class Cart extends React.PureComponent {
  _handleRemove = id => {
    this.props.removeItem(id);
  };

  _handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  _handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>

              <div className="Cart__add-remove">
                <Link to="/cart">
                  <button className="Cart__add">
                    {" "}
                    <i
                      className="material-icons"
                      onClick={() => {
                        this._handleAddQuantity(item.id);
                      }}
                    >
                      add
                    </i>
                  </button>
                </Link>
                <b>{item.quantity}</b>
                <Link to="/cart">
                  <button className="Cart__remove">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this._handleSubtractQuantity(item.id);
                      }}
                    >
                      remove
                    </i>
                  </button>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this._handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have Ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.addedItems
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => {
    dispatch(removeItem(id));
  },
  subtractQuantity: id => {
    dispatch(subtractQuantity(id));
  },
  addQuantity: id => {
    dispatch(addQuantity(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
