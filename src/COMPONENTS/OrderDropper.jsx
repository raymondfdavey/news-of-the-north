import React from "react";

function OrderDropper(props) {
  return (
    <div>
      <div>
        <h1>Order</h1>
        <select
          id="order"
          name="order"
          defaultValue=""
          onChange={event => {
            return props.changeOrder(event.target.value);
          }}
        >
          <option defaultValue value="desc">
            Descending
          </option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
}

export default OrderDropper;
