'use client';

import { useState, SyntheticEvent } from 'react';

// NEXT
import Link from 'next/link';
// import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Links from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

// THIRD - PARTY
import * as Yup from 'yup';
import { Formik } from 'formik';

// PROJECT IMPORTS
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { fetcher } from 'utils/axios';
import useScriptRef from 'hooks/useScriptRef';

// ASSETS
import { Eye, EyeSlash } from 'iconsax-react';
import { preload } from 'swr';
import { encryptLocalStorage } from 'utils/appUtils';

// ============================|| JWT - LOGIN ||============================ //

const AuthLogin = ({ providers, csrfToken }: any) => {
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(false);
  // const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const onSubmit = (values, {setSubmitting}) =>  {
    console.log("################ DATA : " + JSON.stringify(values));
    axios.post('http://localhost:3333/api/v1/auth/login', values)
    .then((response) => {
        console.log("****** RETOUR RESPONSE : " + response)
        console.log("######### RETOUR API LOGIN DATA FOTSINY : " + JSON.stringify(response.data))
        console.log("1 =  RETOUR API LOGIN TOKEN RETRARETRA : " + JSON.stringify(response.data.data.token))
        console.log("2 = TYPE : " + JSON.stringify(response.data.data.token.type))
        console.log("3 = TOKEN : " + JSON.stringify(response.data.data.token.token))
        console.log("4  = EXPIRATION : " + JSON.stringify(response.data.data.token.expiresAt))
        console.log("5  = USER_DATA ID : " + JSON.stringify(response.data.data.user_data.id))
        console.log("6  = USER_DATA USERNAME : " + JSON.stringify(response.data.data.user_data.username))

        if(JSON.stringify(response.status) == 200){

          const appData = {
            token_type: JSON.stringify(response.data.data.token.type),
            token_value:  JSON.stringify(response.data.data.token.token),
            date_expiration:  JSON.stringify(response.data.data.token.expiresAt),
            user_id:  JSON.stringify(response.data.data.user_data.id),
            username: JSON.stringify(response.data.data.user_data.username)
          };
          localStorage.setItem("token_type",JSON.stringify(response.data.data.token.type));
          localStorage.setItem("token_value",JSON.stringify(response.data.data.token.token));
          localStorage.setItem("date_expiration",JSON.stringify(response.data.data.token.expiresAt));
          localStorage.setItem("user_id",JSON.stringify(response.data.data.user_data.id));
          localStorage.setItem("username",JSON.stringify(response.data.data.user_data.username));
          

          //const dataStored = encryptLocalStorage(appData);

          // console.log("DATA STORED : " + appData);
          
          // localStorage.setItem("app_data", dataStored);
          router.push('/dashboard/default');
        }
    }).catch((error) => {
        console.error("ERROR : " + error);
    }).finally(() => {
        setSubmitting(false);
    })
  }

  return (
    <Formik
      /* initialValues={{
        email: 'info@phoenixcoded.co',
        password: '123456',
        submit: null
      }} */
      initialValues={{
        username: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().max(255).required('Nom d utilisateur requis'),
        password: Yup.string().max(255).required('Mot de passe requis')
      })}
      
      /* onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          //    console.log("-=-=-=-=-=-=-=-=-=-=- " + JSON.stringify(values));
          try {
          signIn('http://localhost:3333/api/v1/auth/login', { redirect: false, username: values.username, password: values.password });
          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
            
            // preload('api/menu/dashboard', fetcher); // load menu on login success
          }
        } catch (err: any) {
          if (scriptedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
         }} */
        onSubmit={onSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Nom d'utilisateur</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="text"
                  value={values.username}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Nom d utilisateur"
                  fullWidth
                  error={Boolean(touched.username && errors.username)}
                />
                {touched.username && errors.username && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.username}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Mot de passe</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="-password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        color="secondary"
                      >
                        {showPassword ? <Eye /> : <EyeSlash />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Mot de passe"
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: -1 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                      size="small"
                    />
                  }
                  label={<Typography variant="h6">Se souvenir de moi</Typography>}
                />
                {/* <Links variant="h6" component={Link} href={session ? '/auth/forgot-password' : '/forgot-password'} color="text.primary"> */}
                <Links variant="h6" component={Link} href={'/forgot-password'} color="text.primary">
                  Mot de passe oublie ?
                </Links>
              </Stack>
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  {
                    isSubmitting ? 'Connexion en cour ...' : 'Connexion'
                  }
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthLogin;
