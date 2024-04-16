import { useEffect, useState, ChangeEvent } from 'react';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// THIRD - PARTY
import { PatternFormat } from 'react-number-format';

// PROJECT IMPORTS
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { facebookColor, linkedInColor } from 'config';

// ASSETS
import { Apple, Camera, Facebook, Google } from 'iconsax-react';

// TYPES
import { ThemeMode } from 'types/config';

const avatarImage = '/assets/images/users';

// STYLES & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
};

// ==============================|| ACCOUNT PROFILE - PERSONAL ||============================== //

const TabPersonal = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | undefined>(`${avatarImage}/default.png`);

  useEffect(() => {
    if (selectedImage) {
      setAvatar(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const [experience, setExperience] = useState('0');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setExperience(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <MainCard title="Information personnelle">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={2.5} alignItems="center" sx={{ m: 3 }}>
                <FormLabel
                  htmlFor="change-avtar"
                  sx={{
                    position: 'relative',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    '&:hover .MuiBox-root': { opacity: 1 },
                    cursor: 'pointer'
                  }}
                >
                  <Avatar alt="Avatar 1" src={avatar} sx={{ width: 76, height: 76 }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Stack spacing={0.5} alignItems="center">
                      <Camera style={{ color: theme.palette.secondary.lighter, fontSize: '1.5rem' }} />
                      <Typography sx={{ color: 'secondary.lighter' }} variant="caption">
                        Upload
                      </Typography>
                    </Stack>
                  </Box>
                </FormLabel>
                <TextField
                  type="file"
                  id="change-avtar"
                  placeholder="Outlined"
                  variant="outlined"
                  sx={{ display: 'none' }}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">Nom</InputLabel>
                <TextField fullWidth defaultValue="Anshan" id="personal-first-name" placeholder="Nom" autoFocus />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">Prenom</InputLabel>
                <TextField fullWidth defaultValue="Handgun" id="personal-first-name" placeholder="Prenom" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-location">Pays</InputLabel>
                <TextField fullWidth defaultValue="New York" id="personal-location" placeholder="Pays" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-zipcode">Code postal</InputLabel>
                <TextField fullWidth defaultValue="956754" id="personal-zipcode" placeholder="Code postal" />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-location">Bio</InputLabel>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  defaultValue="Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at."
                  id="personal-location"
                  placeholder="Location"
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-experience">Experiance</InputLabel>
                <Select fullWidth id="personal-experience" value={experience} onChange={handleChange} MenuProps={MenuProps}>
                  <MenuItem value="0">Stagiaire</MenuItem>
                  <MenuItem value="1">Benevole</MenuItem>
                  <MenuItem value="2">Alternance</MenuItem>
                  <MenuItem value="3">3 - 6 Mois</MenuItem>
                  <MenuItem value="4">1 - 3 ans</MenuItem>
                  <MenuItem value="5">5 - 9 ans</MenuItem>
                  <MenuItem value="6">+10 ans</MenuItem>
                </Select>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Social Network">
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    size="small"
                    startIcon={<Google variant="Bold" style={{ color: theme.palette.error.main }} />}
                    sx={{ color: theme.palette.error.main, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Google
                  </Button>
                  <Button color="error">Connect</Button>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    size="small"
                    startIcon={<Facebook variant="Bold" style={{ color: facebookColor }} />}
                    sx={{ color: facebookColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Facebook
                  </Button>
                  <Typography variant="subtitle1" sx={{ color: facebookColor }}>
                    Anshan Handgun
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Button
                    size="small"
                    startIcon={<Apple variant="Bold" style={{ color: linkedInColor }} />}
                    sx={{ color: linkedInColor, '&:hover': { bgcolor: 'transparent' } }}
                  >
                    Apple
                  </Button>
                  <Button color="error">Connect</Button>
                </Stack>
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Contact">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-phone">Telephone</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Select defaultValue="1-876">
                        <MenuItem value="91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="36">+36</MenuItem>
                        <MenuItem value="225">(255)</MenuItem>
                        <MenuItem value="39">+39</MenuItem>
                        <MenuItem value="1-876">1-876</MenuItem>
                        <MenuItem value="7">+7</MenuItem>
                        <MenuItem value="254">(254)</MenuItem>
                        <MenuItem value="373">(373)</MenuItem>
                        <MenuItem value="1-664">1-664</MenuItem>
                        <MenuItem value="95">+95</MenuItem>
                        <MenuItem value="264">(264)</MenuItem>
                      </Select>
                      <PatternFormat
                        format="+1 (###) ###-####"
                        mask="_"
                        fullWidth
                        customInput={TextField}
                        placeholder="Phone Number"
                        defaultValue="8654239581"
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-email">Email</InputLabel>
                    <TextField type="email" fullWidth defaultValue="stebin.ben@gmail.com" id="personal-email" placeholder="Email Address" />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-email">Portfolio URL</InputLabel>
                    <TextField fullWidth defaultValue="https://anshan.dh.url" id="personal-url" placeholder="Portfolio URL" />
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-address">Addresse</InputLabel>
                    <TextField
                      fullWidth
                      defaultValue="Street 110-B Kalians Bag, Dewan, M.P. New York"
                      id="personal-address"
                      placeholder="Address"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button variant="outlined" color="secondary">
            Annuler
          </Button>
          <Button variant="contained">Mettre a jour Profile</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TabPersonal;
