import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CreditCardIcon from '@mui/icons-material/CreditCard';
export default function Cards(props) {
  return (
    <Card style={{'width': '20%', 'background-color': 'pink'}}  sx={{ minWidth: 275 }}>
      <CardContent >
      <div style={{'display': 'flex', 'flex-direction': 'row', 'justifyContent': 'space-between', }}>
        <Typography sx={{ fontSize: 20, width: 80, color: 'black' }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <CreditCardIcon style={{'marginTop': '1.2rem'}} />
      </div>
      </CardContent>
    </Card>
  );
}