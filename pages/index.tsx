import DefaultLayout from "../layouts/defaultLayout/defaultLayout";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import devInfo from "../data/devInfo.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "50px",
    },
    Center: {
      display: "flex",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "#5C7988",
      height: "200px",
      width: "800px",
    },
    cardOne: {
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#19d2d6",
      height: "180px",
      width: "150px",
    },
    cardAll: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      // padding:"10px"
    },
  })
);
// Day 1
// วันนี้ทำได้ถึงงานครั้งก่อน เเต่ยังติดปัญหาลดopacityของnav เเล้วข้อมูลลดไปด้วย  //ได้เเล้วเเก้สีจากHEX เป็นrGBA
// พนทำdataของเเต่ละส่วน ถ้าทันเอาไปใส่ข้อมูลด้วย (น่าจะได้จัดcss ของmore info ข้างในกล่องheader)  //กำลังจัดcss data ของdevเสร็จเเล้ว //ทำmapดึงข้อมูลเสร็จเเล้ว
// navไม่เลื่อนตามscroll mouse  //เสร็จเเล้ว เเก้ด้วย position:"Fixed" ตรงnavbar

// Day 2
// วันนี้ทำ Card ของ Developer ดึงข้อมูลได้เเล้ว เหลือเเค่จัด css
// พนทำ Data ของ ฟังชันก์ทั้งหมดของ Bot *ตัวคำสั่งการset botยังไม่เสร็จรอคนอื่นทำเสร็จก่อน  //จัด CSS ของหน้าข้อมูล Dataด้วย
// หารูปของทีม Dev มาใส่ใน card ด้วยถ้าเป็นไฟล์localเเล้วเก็บในjsonได้จะดีมาก
// อาจจะได้เเก้UIใหม่ เผื่อมีจุดที่บอก "How to set Bot n your Discord"

export default function Home() {
  const classes = useStyles();
  return (
    <DefaultLayout>
      {/* ส่วนของครึ่ง Home */}
      <div className={classes.root}>
        <h1 className={classes.Center} id="Home">
          Home
        </h1>
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
        <h1 className={classes.Center} id="Command">
          Command
        </h1>
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
        <h1 className={classes.Center} id="Developer">
          Developer
        </h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            <div className={classes.cardAll}>
              {devInfo.DevInfo.map((i) => (
                // <div key={i.userId}>{i.userName}</div>
                <div className={classes.cardOne} key={i.userId}>
                  <span key={i.userId}>{i.userName}</span>
                    <a href={i.userLink}>Discord</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span> Copyright © 2021 MikiChan All rights reserved.</span>
    </DefaultLayout>
  );
}
