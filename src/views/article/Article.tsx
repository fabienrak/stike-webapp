import Grid from '@mui/material/Grid';
import {
    Chart,
    CloudChange
  } from 'iconsax-react';
import APPCard from 'components/cards/APPCard';
import LatestOrder from 'sections/widget/data/LatestOrder';
import ArticleData from 'sections/widget/data/Article';

const Article = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <APPCard primary="4" secondary="Components perso" color="secondary.main" iconPrimary={CloudChange} />
            </Grid>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <APPCard primary="4" secondary="Components perso" color="secondary.main" iconPrimary={Chart} />
            </Grid>
            <Grid item xs={12}>
                {/* <LatestOrder /> */}
                <ArticleData />
            </Grid>
        </Grid>    
    );
}

export default Article;
