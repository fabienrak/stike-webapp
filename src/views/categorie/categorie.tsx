import Grid from '@mui/material/Grid';
import {
    Paperclip,
    BookSaved
  } from 'iconsax-react';
import APPCard from 'components/cards/APPCard';

const CategorieViews = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <APPCard primary="4" secondary="Categorie perso" color="secondary.main" iconPrimary={BookSaved} />
            </Grid>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <APPCard primary="4" secondary="Components perso" color="secondary.main" iconPrimary={Paperclip} />
            </Grid>
            
        </Grid>    
    );
}

export default CategorieViews;