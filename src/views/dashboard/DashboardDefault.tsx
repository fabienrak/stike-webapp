'use client';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// ASSETS
import APPCustomCard from 'components/cards/APPCustomCard';
import {
  Chart,
  Eye,
  Gps,
  ShoppingCart} from 'iconsax-react';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const theme = useTheme();

  const tokenEnCour = localStorage.getItem("token_type");
  console.log("****** TOKEN TYPE ****** : " + tokenEnCour)
  console.log("======== CONTAINER DATA ======= : " + tokenEnCour)


  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      
      <Grid item xs={12} md={4} lg={3} sm={6}>
          <APPCustomCard primary="Achat" secondary="1165 +" iconPrimary={ShoppingCart} color="primary.main" />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
          <APPCustomCard primary="Visiteur" secondary="3465 +" iconPrimary={Eye} color="error.main" />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
          <APPCustomCard primary="Stock" secondary="876 +" iconPrimary={Chart} color="success.main" />
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6}>
          <APPCustomCard primary="Point" secondary="19 +" iconPrimary={Gps} color="info.main" />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
