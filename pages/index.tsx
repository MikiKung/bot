import DefaultLayout from "../layouts/defaultLayout/defaultLayout";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { height, width } from "@material-ui/system";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Center: {
      display: "flex",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "#5C7988",
      height: "200px",
      width: "800px",
    },
  })
);

// วันนี้ทำได้ถึงงานครั้งก่อน เเต่ยังติดปัญหาลดopacityของnav เเล้วข้อมูลลดไปด้วย
// พนทำdataของเเต่ละส่วน ถ้าทันเอาไปใส่ข้อมูลด้วย (น่าจะได้จัดcss ของmore info ข้างในกล่องheader)
// navไม่เลื่อนตามscroll mouse
//test push git

export default function Home() {
  const classes = useStyles();
  return (
    <DefaultLayout>
      {/* ส่วนของครึ่ง Home */}
      <div>
        <h1 className={classes.Center}>Home</h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            <q>Home info</q>
          </div>
        </div>
      </div>
      {/* ส่วนของครึ่ง Command */}
      <div>
        <h1 className={classes.Center}>Command</h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            <q>Command info</q>
          </div>
        </div>
      </div>
      {/* ส่วนของครึ่ง DevInfo */}
      <div>
        <h1 className={classes.Center}>Developer</h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            <q>Developer Info</q>
          </div>
        </div>
      </div>
      <p> Copyright © 2021 MikiChan All rights reserved.</p>
    </DefaultLayout>
  );
}
