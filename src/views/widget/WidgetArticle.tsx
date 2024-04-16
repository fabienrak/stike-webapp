import Grid from '@mui/material/Grid';
import ReportCard from 'components/cards/statistics/ReportCard';
import LatestOrder from 'sections/widget/data/LatestOrder';
import {
    Chart,
    CloudChange
  } from 'iconsax-react';
import APPCard from 'components/cards/APPCard';

const WidgetArticle = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <ReportCard primary="4" secondary="Article enregistrer" color="secondary.main" iconPrimary={Chart} />
            </Grid>
            <Grid item xs={12} md={4} lg={3} sm={6}>
                <APPCard primary="4" secondary="Components perso" color="secondary.main" iconPrimary={CloudChange} />
            </Grid>
            <Grid item xs={12}>
                <LatestOrder />
            </Grid>
        </Grid>    
    );
}

export default WidgetArticle;