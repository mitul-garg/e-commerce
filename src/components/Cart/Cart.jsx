import React from "react";

import { Typography, Container } from "@material-ui/core";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";

import useStyles from "./styles";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleEmptyCart,
  handleRemoveFromCart,
}) => {
  const classes = useStyles();

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.total_items ? (
        <EmptyCart />
      ) : (
        <FilledCart
          cart={cart}
          handleEmptyCart={handleEmptyCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateCartQty={handleUpdateCartQty}
        />
      )}
    </Container>
  );
};

export default Cart;
