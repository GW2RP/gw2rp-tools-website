import { createMuiTheme } from '@material-ui/core/styles';
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b71c1c',
    },
    secondary: amber,
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
