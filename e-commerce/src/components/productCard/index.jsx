import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
export default function RecipeReviewCard() {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
         <CardContent>
  <Typography variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests.
  </Typography>
</CardContent>

<CardActions sx={{ justifyContent: 'flex-end' }}>
  <Button variant="outlined" color="error">
   <span class="material-symbols-outlined p-0.5 ">
shopping_cart
</span>
  </Button>
</CardActions>
            
        </Card>
    );
}
