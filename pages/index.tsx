import DefaultLayout from "../layouts/defaultLayout/defaultLayout";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import devInfo from "../data/devInfo.json";
import commandInfo from "../data/commandInfo.json";
import clubInfo from "../data/clubInfo.json";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { color } from "@material-ui/system";
import classes from "./Index.module.scss";
import CopyTag from "../components/codeTag/copyTag";
import React from "react";


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       paddingTop: "50px",
//     },
//     Center: {
//       display: "flex",
//       justifyContent: "center",
//     },
//     box: {
//       backgroundColor: "rgba(24, 47, 56, 0.97)",
//       height: "auto",
//       width: "850px",
//       borderRadius: "20px",
//       overflow: "auto",
//     },
//     boxDev: {
//       backgroundColor: "rgba(24, 47, 56, 0.97)",
//       width: "100vw",
//       borderRadius: "20px",
//       // overflow:"auto"
//     },
//     cardOne: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-evenly",
//       paddingRight: "20px",
//       paddingLeft: "20px",
//       backgroundColor: "rgba(5, 71, 105, 0.9)",
//       height: "200px",
//       borderRadius: "20px",
//       width: "130px",
//       margin: "15px",
//     },
//     cardOneMore4: {
//       display: "flex",
//       flexDirection: "column",
//       paddingRight: "20px",
//       paddingLeft: "20px",
//       justifyContent: "space-evenly",
//       backgroundColor: "rgba(5, 71, 105, 0.9)",
//       height: "200px",
//       borderRadius: "20px",
//       minWidth: "130px",
//       margin: "15px",
//     },
//     cardAll: {
//       display: "flex",
//       overflow: "auto",
//       justifyContent: "space-evenly",
//     },
//     cardAllMore4: {
//       display: "flex",
//       overflow: "auto",
//     },
//     cardPic: {
//       borderRadius: "50px",
//       padding: "20px",
//     },
//     textInfoDev: {
//       paddingTop: "10px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     discord: {
//       backgroundColor: "rgba(65, 131, 217, 1)",
//       fontSize: "12px",
//       fontWeight: "bold",
//       borderRadius: "20px",
//       paddingTop: "5px",
//       "&:hover": {
//         backgroundColor: "rgba(149, 181, 230, 1)",
//       },
//     },
//     nameDev: {
//       display: "flex",
//       whiteSpace: "nowrap",
//       paddingBottom: "10px",
//       color: "rgba(222, 224, 224, 1)",
//     },
    
//     CenterText: {
//       display: "flex",
//       justifyContent: "center",
//       color: "rgba(255, 255, 255 ,1)",
//     },
    
//   })
// );

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
  // const classes = useStyles();
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
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
            <q>Home info</q>
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
            {/* {commandInfo.System.map((e) => (
              <span className={classes.commandName} key={e.sName}>
                {e.sName}
              </span>
            ))} */}
            {clubInfo.clubCommand.map((e) => (
              <div key={e.cName}>

              <CopyTag copy={e.cCommand} cName={e.cName}/>
              <Divider/>
              </div>
            ))}
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
          <div className={classes.boxDev}>
            <div
              className={
                devInfo.DevInfo.length > 4
                  ? classes.cardAllMore4
                  : classes.cardAll
              }
            >
              {devInfo.DevInfo.map((i) => (
                // <div key={i.userId}>{i.userName}</div>
                //  function used to resolve URLs.
                // next image มันใช้ไม่เหมือน img ปกติ มันเลยต้องใส่ option
                // next image src มันจะโหลดจากไฟล์ใน project ของเราอะ
                // ถ้าจะใช้ url ต้องใช้ loader
                // LOADER https://nextjs.org/docs/api-reference/next/image#loader
                // มันเป็น props ของ Image
                // ไม่ๆ มีอยู่ใน Next Image อยู่แล้ว
                // ต้องใส่ width height ด้วย
                <div
                  className={
                    devInfo.DevInfo.length > 4
                      ? classes.cardOneMore4
                      : classes.cardOne
                  }
                  key={i.userId}
                >
                  <Image
                    className={classes.cardPic}
                    loader={({ src }) => src}
                    src={i.userPhoto}
                    alt={i.userName}
                    width={100}
                    height={100}
                  />
                  <div className={classes.textInfoDev}>
                    <span className={classes.nameDev} key={i.userId}>
                      {i.userName}
                    </span>
                    <Button href={i.userLink} className={classes.discord}>
                      <a>Discord</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span> Copyright © 2021 School Life All rights reserved.</span>
    </DefaultLayout>
  );
}
