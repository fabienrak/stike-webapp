// MATERIAL - UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import ReactDraft from './DescriptionProjet';
import { ThemeDirection, ThemeMode } from 'types/config';
import useConfig from 'hooks/useConfig';
import { useTheme } from '@mui/material';
import MainCard from 'components/MainCard';

const validationSchema = yup.object({
  experience: yup.string().required('First Name is required'),
  langues: yup.string().required('Last Name is required')
});

// ==============================|| VALIDATION WIZARD - ADDRESS  ||============================== //

export type MissionData = {
  typeProjet?: string;
  nomProjet?: string,
  description?: string;
  experience?: string;
  langues?: string;
};

interface AddressFormProps {
  missionData: MissionData;
  setMissionData: (d: MissionData) => void;
  handleNext: () => void;
  handleBack: () => void;
  setErrorIndex: (i: number | null) => void;
}

const Mission = ({ missionData, setMissionData, handleNext, handleBack, setErrorIndex }: AddressFormProps) => {
  const theme = useTheme();
  const { themeDirection } = useConfig();
  const formik = useFormik({
    initialValues: {
      typeProjet: missionData.typeProjet,
      nomProjet: missionData.nomProjet,
      description: missionData.description,
      experience: missionData.experience,
      langues: missionData.langues
    },
    validationSchema,
    onSubmit: (values) => {
      setMissionData({
        typeProjet: values.typeProjet,
        nomProjet: values.nomProjet,
        description: values.description,
        experience: values.experience,
        langues: values.langues
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Mission
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="age">Type projet</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select id="typeProjet" name="typeProjet" value={formik.values.typeProjet} onChange={formik.handleChange}>
                  <MenuItem value="">
                    <em>Selectionner type projet</em>
                  </MenuItem>
                  <MenuItem value={10}>Web</MenuItem>
                  <MenuItem value={20}>Mobile</MenuItem>
                  <MenuItem value={30}>Application</MenuItem>
                  <MenuItem value={40}>Serveur</MenuItem>
                  <MenuItem value={50}>Administration</MenuItem>
                </Select>
                {formik.errors.typeProjet && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.typeProjet}{' '}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Nom du projet</InputLabel>
              <TextField
                id="nomProjet"
                name="nomProjet"
                placeholder="Nom du projet *"
                value={formik.values.nomProjet}
                onChange={formik.handleChange}
                error={formik.touched.nomProjet && Boolean(formik.errors.nomProjet)}
                helperText={formik.touched.nomProjet && formik.errors.nomProjet}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Description</InputLabel>
              <TextField
                id="description"
                name="description"
                placeholder="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid>


          

          {/* <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Localisation géographique</InputLabel>
              <TextField
                id="langues"
                name="langues"
                placeholder="Budget alloué"
                value={formik.values.langues}
                onChange={formik.handleChange}
                error={formik.touched.langues && Boolean(formik.errors.langues)}
                helperText={formik.touched.langues && formik.errors.langues}
                fullWidth
                autoComplete="given-name"
              />
            </Stack>
          </Grid> */}

          {/* <MainCard title="React Draft" sx={{ overflow: 'visible' }}> */}
            {/* <ReactDraft /> */}
          {/* </MainCard> */}
          
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button startIcon={<ArrowLeft />} onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Retour
              </Button>
              <AnimateButton>
                <Button endIcon={<ArrowRight />} variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
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

export default Mission;
