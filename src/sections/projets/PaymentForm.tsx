// MATERIAL - UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { useFormik } from 'formik';
import * as yup from 'yup';

// PROJECT IMPORTS
import AnimateButton from 'components/@extended/AnimateButton';
import { FormHelperText } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'iconsax-react';

const validationSchema = yup.object({
  cardName: yup.string().required('Card Name is required'),
  cardNumber: yup.string().required('Card Number is required')
});

// ==============================|| VALIDATION WIZARD - PAYMENT ||============================== //

export type PaymentData = { cardName?: string; cardNumber?: number };
interface PaymentFormProps {
  paymentData: PaymentData;
  setPaymentData: (d: PaymentData) => void;
  handleNext: () => void;
  handleBack: () => void;
  setErrorIndex: (i: number | null) => void;
}

export default function PaymentForm({ paymentData, setPaymentData, handleNext, handleBack, setErrorIndex }: PaymentFormProps) {
  const formik = useFormik({
    initialValues: {
      cardName: paymentData.cardName,
      cardNumber: paymentData.cardNumber
    },
    validationSchema,
    onSubmit: (values) => {
      setPaymentData({
        cardName: values.cardName,
        cardNumber: values.cardNumber
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
      Compétences techniques et linguistiques
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel>Compétences</InputLabel>
              <TextField
                id="cardName"
                name="cardName"
                value={formik.values.cardName}
                onChange={formik.handleChange}
                error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                helperText={formik.touched.cardName && formik.errors.cardName}
                placeholder="Compétences"
                fullWidth
                autoComplete="cc-name"
              />
              <FormHelperText>Ajoutez entre 1 et 4 compétences obligatoires (par ordre d'importance) Separer par un ";" .</FormHelperText>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel>Langues- Optionnel</InputLabel>
              <TextField
                id="cardNumber"
                name="cardNumber"
                placeholder="Langues"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                fullWidth
                autoComplete="cc-number"
                />
                <FormHelperText>Ajoutez entre 1 et 4 langues (par ordre d'importance) Separer par un ";" .</FormHelperText>
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
}
