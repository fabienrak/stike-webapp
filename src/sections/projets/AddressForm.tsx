// MATERIAL - UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// THIRD - PARTY
import { useFormik } from 'formik';
import * as yup from 'yup';

// PROJECT IMPORTS
import AnimateButton from 'components/@extended/AnimateButton';
import { ArrowRight } from 'iconsax-react';

const validationSchema = yup.object({
  poste: yup.string().required('Titre du poste requis'),
  exp: yup.string().required('Experience requis')
});

// ==============================|| VALIDATION WIZARD - ADDRESS  ||============================== //

export type ProfileData = {
  poste?: string;
  exp?: string;
  category?: any;
};

interface AddressFormProps {
  profileData: ProfileData;
  setProfileData: (d: ProfileData) => void;
  handleNext: () => void;
  setErrorIndex: (i: number | null) => void;
}

const AddressForm = ({ profileData, setProfileData, handleNext, setErrorIndex }: AddressFormProps) => {
  const formik = useFormik({
    initialValues: {
      poste: profileData.poste,
      exp: profileData.exp,
      category: profileData.category
    },
    validationSchema,
    onSubmit: (values) => {
      setProfileData({
        poste: values.poste,
        exp: values.exp,
        category: values.category
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
      Profil du freelance
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Intitulé de poste</InputLabel>
              <TextField
                id="poste"
                name="poste"
                placeholder="Intitulé de poste *"
                value={formik.values.poste}
                onChange={formik.handleChange}
                error={formik.touched.poste && Boolean(formik.errors.poste)}
                helperText={formik.touched.poste && formik.errors.poste}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Categorie</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="age" name="age" value={formik.values.category} onChange={formik.handleChange}>
                  <MenuItem value="">
                    <em>Selectionner categorie</em>
                  </MenuItem>
                  <MenuItem value={1}>DevOPS</MenuItem>
                  <MenuItem value={2}>Developpeur Back-end</MenuItem>
                  <MenuItem value={3}>Developpeur Front-end</MenuItem>
                  <MenuItem value={4}>Developpeur FullStack</MenuItem>
                  <MenuItem value={5}>Developpeur Mobile</MenuItem>
                  <MenuItem value={6}>Administrateur Systeme</MenuItem>
                  <MenuItem value={7}>Administrateur reseaux</MenuItem>
                  <MenuItem value={8}>DBA Engineer</MenuItem>
                </Select>
                {formik.errors.category && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.category}{' '}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Niveau d'experience</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="age" name="age" value={formik.values.age} onChange={formik.handleChange}>
                  <MenuItem value="">
                    <em>Selectionner le niveau d'experience</em>
                  </MenuItem>
                  <MenuItem value={1}>Expert (8ans et +)</MenuItem>
                  <MenuItem value={2}>Intermediaire (3 a 7 ans)</MenuItem>
                  <MenuItem value={3}>Junior (0 - 2 ans)</MenuItem>
                </Select>
                {formik.errors.age && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.age}{' '}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Intitulé de poste</InputLabel>
              <TextField
                id="exp"
                name="exp"
                placeholder="Intitulé de poste *"
                value={formik.values.exp}
                onChange={formik.handleChange}
                error={formik.touched.exp && Boolean(formik.errors.exp)}
                helperText={formik.touched.exp && formik.errors.exp}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>
          
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button endIcon={<ArrowRight />} variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                  Suivant
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
          
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;
