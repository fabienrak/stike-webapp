'use client';

import { useState, ReactNode } from 'react';

// MATERIAL - UI
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import AddressForm, { ProfileData } from './AddressForm';
import PaymentForm, { PaymentData } from './PaymentForm';
import Review from './Review';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import ConditionsProjets, { ConditionData } from './Conditions';
import Mission, { MissionData } from './Mission';

// step options
const steps = ['Profil du freelance', 'Compétences techniques et linguistiques','Conditions','Mission', 'Confirmation'];

const getStepContent = (
  step: number,
  handleNext: () => void,
  handleBack: () => void,
  setErrorIndex: (i: number | null) => void,
  profileData: ProfileData,
  setProfileData: (d: ProfileData) => void,
  paymentData: PaymentData,
  setPaymentData: (d: PaymentData) => void,
  conditionData: ConditionData,
  setConditionData: (d: ConditionData) => void,
  missionData: MissionData,
  setMissionData: (d: MissionData) => void,

) => {
  switch (step) {
    case 0:
      return (
        <AddressForm 
          handleNext={handleNext} 
          setErrorIndex={setErrorIndex} 
          profileData={profileData} 
          setProfileData={setProfileData} 
        />
      );
    case 1:
      return (
        <PaymentForm
          handleNext={handleNext}
          handleBack={handleBack}
          setErrorIndex={setErrorIndex}
          paymentData={paymentData}
          setPaymentData={setPaymentData}
        />
      );
    case 2:
      return <ConditionsProjets
          handleNext={handleNext}
          handleBack={handleBack}
          setErrorIndex={setErrorIndex}
          conditionData={conditionData}
          setConditionData={setConditionData}
        />;
    case 3:
      return <Mission
          handleNext={handleNext}
          handleBack={handleBack}
          setErrorIndex={setErrorIndex}
          missionData={missionData}
          setMissionData={setMissionData}
        />;  
    case 4:
      return <Review />;  
    default:
      throw new Error('Unknown step');
  }
};

// ==============================|| FORMS WIZARD - VALIDATION ||============================== //

const ValidationWizard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [profileData, setProfileData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [conditionData, setConditionData] = useState({});
  const [missionData, setMissionData] = useState({});
  const [errorIndex, setErrorIndex] = useState<number | null>(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard title="Nouveau projet">
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label, index) => {
          const labelProps: { error?: boolean; optional?: ReactNode } = {};

          if (index === errorIndex) {
                  console.log("INDEX STEPPER ** : " + index);
                  console.log("ERROR INDEX STEPPER ** : " + errorIndex);
                  console.log("STEP LENGTH ** : " + activeStep);
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Une erreur est survenue
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setProfileData({});
                    setPaymentData({});
                    setConditionData({});
                    setMissionData({});
                    setActiveStep(0);
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(activeStep, handleNext, handleBack, setErrorIndex, profileData, setProfileData, paymentData, setPaymentData, conditionData, setConditionData, missionData, setMissionData)}
            {activeStep === steps.length - 1 && (
              <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                    Retour
                  </Button>
                )}
                <AnimateButton>
                  <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? 'Place order' : 'Suivant'}
                  </Button>
                </AnimateButton>
              </Stack>
            )}
          </>
        )}
      </>
    </MainCard>
  );
};

export default ValidationWizard;
