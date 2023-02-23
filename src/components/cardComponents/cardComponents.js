
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./cardComponents.css"

const cardComponents = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data}
          alt="imagen de producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}


export default cardComponents;
