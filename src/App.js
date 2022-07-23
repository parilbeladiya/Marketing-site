import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/mui/theme';
import RootRoutes from './rootRoutes';
import './assets/styles/app.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <ToastContainer />
      <RootRoutes />
    </div>
  </ThemeProvider>
);

export default App;
