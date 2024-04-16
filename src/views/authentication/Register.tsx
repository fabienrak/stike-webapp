// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';

// ================================|| REGISTER ||================================ //

const Register = () => {
  return (
    <AuthWrapper>
      <>
      <h1>TAY</h1>
      </>
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Inscription</Typography>
            <Typography component={Link} href={'/login'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Vous avez deja un compte ?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FirebaseRegister />
        </Grid>
      </Grid> */}
    </AuthWrapper>
  );
};

export default Register;
