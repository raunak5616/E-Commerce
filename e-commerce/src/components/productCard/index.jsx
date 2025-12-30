import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
export default function RecipeReviewCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, border: '1px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="194"
        image={product?.images?.[0] || "/no-image.png"}
        alt={product?.title || "product image"}
      />
      <CardContent>
        <Typography fontWeight="bold" sx={{ p: 1, }}>
          <h3 className="text-gray-500">{product?.title}</h3>
        </Typography>
        <Typography variant="body2" sx={{ p: 1, fontSize: '16px' }}>
          Price:   ₹{(product.price * 83).toFixed(0)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button variant="outlined" color="error">
          <span class="material-symbols-outlined">
            favorite
          </span>
        </Button>
        <Button variant="outlined" color="error">
          <span class="material-symbols-outlined p-0.5 ">
            shopping_cart
          </span>
        </Button>
      </CardActions>
    </Card>
  );
}
