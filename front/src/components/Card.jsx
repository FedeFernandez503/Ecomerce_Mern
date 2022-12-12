import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Product({
    product: { id, name, productType, image, price, rating, description },
  }) {
    const [{ basket }, dispatch] = useStateValue();
  
    const addToBasket = () => {
      dispatch({
        type: actionTypes.ADD_TO_BASKET,
        item: {
          id,
          name,
          image,
          price,
        },
      });
    };
  
    return ( 
    <div className={classes.root}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(price, "€")}
            </Typography>
          }
          title={name}
          subheader='in Stock'
        />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardActions disableSpacing>
        <button aria-label='Add to Cart' onClick={addToBasket}>
            <AddShoppingCart fontSize='large' />
         </button>
        </CardActions>
      </div>
    );
  }