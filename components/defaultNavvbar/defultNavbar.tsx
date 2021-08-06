// import Button from "@material-ui/core/Button";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
import classes from "./DefultNavbar.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({

//     // btnGroup: {
//     //   //   backgroundColor: "#32CCD0 !important" ,
//     //   borderRadius: 0,
//     //   height: "100%",
//     // },
//     // btn: {
//     //   width: "150px",
//     // },
//     // nav: {
//     //   display: "flex",
//     //   justifyContent: "space-between",
//     //   alignItems: "center",
//     //   height: "50px",
//     //   paddingLeft: "20px",
//     //   paddingRight: "10px",
//     //   backgroundColor: "rgba(5, 71, 105, 1)",
//     //   position: "fixed",
//     //   width: "100%",
//     //   zIndex: 100,
//     // },
//     // logo:{
//     //   display:"flex",
//     //   flexDirection:"row",
//     //   height:"50px",
//     // },
//     // pic:{
//     //   borderRadius:"100%",
//     //   minHeight:"85% !important",
//     //   maxHeight:"85% !important",
//     //   minWidth:"85% !important",
//     //   maxWidth:"85% !important",
//     // },
//     // logoText:{
//     //   display:"flex",
//     //   alignItems:"center",
//     //   paddingLeft:"10px",
//     //   fontFamily:"Lato",
//     // }
//   })
// );

export default function DefualtNavbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.nav}>
      <style jsx global>
        {`
          .MuiPaper-root {
            background-color: rgba(24, 47, 56, 0.8) !important;
          }
          .MuiList-padding {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
          }
          .MuiPopover-paper {
            top: 0px !important;
            left: calc(100vw - 150px) !important;
            max-width: 150px !important;
          }
        `}
      </style>
      <div className={classes.logo}>
        <h1 className={classes.logoText}>School Life</h1>
      </div>
      <ButtonGroup variant="text" className={classes.btnGroup}>
        <Button className={classes.btn} href="#Home">
          Home
        </Button>
        <Button className={classes.btn} href="#Command">
          Command
        </Button>
        <Button className={classes.btn} href="#Developer">
          Develop
        </Button>
        <Button
          className={classes.btn}
          href="https://code001.ml/?__cf_chl_jschl_tk__=pmd_70f1a85982aebc2e48427b500526234a7c52abd6-1628272448-0-gqNtZGzNAc2jcnBszQi6"
        >
          Invite
        </Button>
        <Button className={classes.btn} href="https://discord.gg/GWYZAxjd">
          Discord
        </Button>
      </ButtonGroup>
      <Button className={classes.hamburger}>
        <Button onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.tabbar}
        >
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Home">
              Home
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Command">
              Command
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Developer">
              Develop
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button
              className={classes.btn}
              href="https://discord.com/api/oauth2/authorize?client_id=859072074530029616&permissions=8&scope=bot"
            >
              Invite
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="https://discord.gg/e6Rhefgn">
              Discord
            </Button>
          </MenuItem>
        </Menu>
      </Button>
    </div>
  );
}
