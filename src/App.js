import './App.css';
import HomeScreen from './screens/HomeScreen';
import {makeStyles} from '@material-ui/core'

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh'    
    }
  }))
  const classes = useStyles()
  return (
    <div className={classes.App}>
        <HomeScreen />
    </div>
  );
}

export default App;
