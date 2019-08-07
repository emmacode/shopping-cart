import React from "react";
import { connect } from "react-redux";

import { addShipping, subtractShipping } from "../store/actions/index";

class Recipe extends React.PureComponent {
  componentWillUnmount() {
    if (this.refs.shipping.checked) {
      this.props.subtractShipping();
    }
  }

  _handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.subtractShipping();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this._handleChecked}
              />
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: {this.props.total} $</b>
          </li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => ({
  addShipping: () => dispatch(addShipping()),
  subtractShipping: () => dispatch(subtractShipping())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
