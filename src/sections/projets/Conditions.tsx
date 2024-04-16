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
import { ArrowLeft, ArrowRight } from 'iconsax-react';

const validationSchema = yup.object({
  duree: yup.string().required('duree projet requis'),
  budget: yup.string().required('Budget requis'),
  localisation: yup.string().required('Localisations requis')
});

// ==============================|| VALIDATION WIZARD - ADDRESS  ||============================== //

export type ConditionData = {
  duree?: string;
  budget?: string;
  localisation?: string;
  date?:  any
};

interface AddressFormProps {
  conditionData: ConditionData;
  setConditionData: (d: ConditionData) => void;
  handleNext: () => void;
  handleBack: () => void;
  setErrorIndex: (i: number | null) => void;
}

const ConditionsProjets = ({ conditionData, setConditionData, handleNext, handleBack, setErrorIndex }: AddressFormProps) => {
  const formik = useFormik({
    initialValues: {
      duree: conditionData.duree,
      budget: conditionData.budget,
      localisation: conditionData.localisation,
      date: conditionData.date
    },
    validationSchema,
    onSubmit: (values) => {
      setConditionData({
        duree: values.duree,
        budget: values.budget,
        localisation: values.localisation,
        date: values.date
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Chronologie et budget du projet
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Date de début souhaitée</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="age" name="age" value={formik.values.date} onChange={formik.handleChange}>
                  <MenuItem value="">
                    <em>Selectionner date debut</em>
                  </MenuItem>
                  <MenuItem value={10}>Des que possible</MenuItem>
                  <MenuItem value={20}>A une date - Fixe ou flexible</MenuItem>
                  <MenuItem value={30}>Je ne sais pas</MenuItem>
                </Select>
                {formik.errors.date && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.date}{' '}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Durée estimée de la collaboration avec le freelance</InputLabel>
              <TextField
                id="duree"
                name="duree"
                placeholder="Durée estimée de la collaboration avec le freelance *"
                value={formik.values.duree}
                onChange={formik.handleChange}
                error={formik.touched.duree && Boolean(formik.errors.duree)}
                helperText={formik.touched.duree && formik.errors.duree}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Le budget alloué est estimé à</InputLabel>
              <TextField
                id="budget"
                name="budget"
                placeholder="Budget alloué"
                value={formik.values.budget}
                onChange={formik.handleChange}
                error={formik.touched.budget && Boolean(formik.errors.budget)}
                helperText={formik.touched.budget && formik.errors.budget}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Localisation</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="localisation" name="localisation" value={formik.values.localisation} onChange={formik.handleChange}>
                  <MenuItem value="">
                    <em>Selectionner date debut</em>
                  </MenuItem>
                  <MenuItem value={10}>Teletravail</MenuItem>
                  <MenuItem value={20}>En local</MenuItem>
                  <MenuItem value={30}>Autre</MenuItem>
                </Select>
                {formik.errors.localisation && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.localisation}{' '}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button startIcon={<ArrowLeft />} onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Retour
              </Button>
              <AnimateButton>
                <Button endIcon={<ArrowRight />} variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(0)}>
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

export default ConditionsProjets;
