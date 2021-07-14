// import Button from "@material-ui/core/Button";
import {ButtonGroup , Button} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
      backgroundColor: "#054769",
      opacity: 0.7,
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
        <Button className={classes.btn}>One</Button>
        <Button className={classes.btn}>Two</Button>
        <Button className={classes.btn}>Three</Button>
      </ButtonGroup>
    </div>
  );
}
