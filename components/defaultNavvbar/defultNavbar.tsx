// import Button from "@material-ui/core/Button";
import {ButtonGroup , Button} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import IdTag from "../../pages/index"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnGroup: {
      //   backgroundColor: "#32CCD0 !important" ,
      borderRadius: 0,
      height: "100%",
    },
    btn: {
      width: "150px",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "50px",
      paddingLeft: "20px",
      paddingRight: "10px",
      backgroundColor: "rgba(5, 71, 105, 0.9)",
      position:"fixed",
      width:"100%"
    },
  })
);

export default function defualtNavbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <h1>Name Bot</h1>
      <ButtonGroup variant="text" className={classes.btnGroup}>
        <Button className={classes.btn} href="#Home">Home</Button>
        <Button className={classes.btn} href="#Command">Command</Button>
        <Button className={classes.btn} href="#Developer">Develop</Button>
        <Button className={classes.btn}>Invite</Button>
      </ButtonGroup>
    </div>  
  );
}
