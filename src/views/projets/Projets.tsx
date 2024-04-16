// MATERIAL - UI
import Grid from '@mui/material/Grid';

import ValidationWizard from 'sections/projets/index';

// ==============================|| FORMS WIZARD ||============================== //

const Projets = () => (
  <Grid container spacing={3} >
    <Grid item xs={12}>
      <ValidationWizard />
    </Grid>
  </Grid>
);

export default Projets;