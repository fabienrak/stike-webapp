// MATERIAL - UI
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';

// TYPES
import { GenericCardProps } from 'types/root';

// ==============================|| CUSTOM CARD  ||============================== //

interface APPCardProps extends GenericCardProps {}

const APPCard = ({ primary, secondary, iconPrimary, color }: APPCardProps) => {
  const IconPrimary = iconPrimary!;
  const primaryIcon = iconPrimary ? <IconPrimary size={44} /> : null;

  return (
    <MainCard>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack spacing={0.25}>
            <Typography variant="h3">{primary}</Typography>
            <Typography variant="body1" color="text.secondary">
              {secondary}
            </Typography>
          </Stack>
        </Grid>
        <Grid item sx={{ color: color }}>
          {primaryIcon}
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default APPCard;