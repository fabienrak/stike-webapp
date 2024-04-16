// MATERIAL - UI
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
// import CircularProgress from '@mui/material/CircularProgress';

// ==============================|| Loader ||============================== //

const Loader = () => (
  <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 2001, width: '100%' }}>
    <LinearProgress color="primary" sx={{ height: 4 }} />
  </Box>
  // <CircularProgress color="secondary" sx={{ height: 15 }}/>
);

export default Loader;
