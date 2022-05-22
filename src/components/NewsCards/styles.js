import {makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    padding:'0 5%',
    width:'100%',
    margin:0,
  },
  card: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    padding:'10%',
    height:'50vh',
    borderRadius:10,
    color:'white'
  },
  infoCard: {
    display:'flex',
    flexDirection:'column',
    textAlign:'center'
  }
});

export default  styles;
