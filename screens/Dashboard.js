import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={[styles.dashboard, styles.dashboardBg]}>
      <View style={[styles.ngoDashboardParent, styles.parentLayout]}>
        <View style={styles.ngoDashboard} />
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout3]} />
          <Text style={styles.dashboard1}>Dashboard</Text>
          <Image
            style={[styles.iconBellNotification, styles.iconLayout1]}
            source={require("../assets/-icon-bell-notification.svg")}
          />
          <Image
            style={[styles.iconMenu, styles.iconLayout1]}
            source={require("../assets/-icon-menu.svg")}
          />
          <Text style={[styles.caseStatus, styles.shyamTypo]}>Case Status</Text>
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupInnerBorder]} />
          <View style={[styles.rectangleView, styles.groupInnerBorder]} />
          <View style={styles.groupChild1} />
          <View style={styles.groupChild2} />
          <View style={styles.groupChild3} />
          <Text
            style={[styles.active3Pending1Closed2, styles.closedTypo]}
          >{`Active:3
Pending:1
Closed:2`}</Text>
          <Text style={[styles.pending, styles.closedTypo]}>Pending</Text>
          <View style={[styles.groupChild4, styles.groupChildPosition]} />
          <View style={[styles.groupChild5, styles.groupChildPosition]} />
          <View style={[styles.groupChild6, styles.childGroupLayout]} />
          <Text style={[styles.civil, styles.civilPosition]}>Civil</Text>
          <View style={styles.groupChild7} />
          <Text style={[styles.assignACase, styles.shyamTypo]}>
            Assign a case
          </Text>
          <Text style={[styles.shyam26, styles.civilPosition]}>Shyam, 26</Text>
          <Image
            style={[styles.frameIcon, styles.frameLayout]}
            source={require("../assets/frame-1.svg")}
          />
          <Text style={[styles.nextCourtContainer, styles.nextContainerTypo]}>
            <Text style={styles.shyamTypo}>{`Next Court : `}</Text>
            <Text style={styles.thSept}>15th sept</Text>
          </Text>
          <View style={[styles.groupChild8, styles.groupChildPosition]} />
          <Text style={[styles.active, styles.closedTypo]}>Active</Text>
          <Text style={[styles.closed, styles.closedTypo]}>Closed</Text>
          <View style={styles.groupChild9} />
          <View style={[styles.rectangleGroup, styles.childGroupLayout]}>
            <View style={[styles.frameChild, styles.childGroupLayout]} />
            <Text style={[styles.civil1, styles.civil1Position]}>Civil</Text>
            <Text style={[styles.shyam261, styles.civil1Position]}>
              Shyam, 26
            </Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              source={require("../assets/frame-1.svg")}
            />
            <Text
              style={[styles.nextCourtContainer1, styles.nextContainerTypo]}
            >
              <Text style={styles.shyamTypo}>{`Next Court : `}</Text>
              <Text style={styles.thSept}>15th sept</Text>
            </Text>
            <Image
              style={[styles.iconCalendar, styles.iconLayout1]}
              source={require("../assets/-icon-calendar.svg")}
            />
          </View>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.nextContainerTypo]}>{`👩🏻 `}</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.nextContainerTypo]}>{`👩🏻 `}</Text>
          </View>
          <View style={[styles.groupChild10, styles.groupChildLayout3]} />
          <View style={[styles.rectangleContainer, styles.groupChildLayout2]}>
            <View style={[styles.groupChild11, styles.groupChildLayout2]} />
            <View style={[styles.groupChild12, styles.groupChildLayout2]} />
            <View style={styles.groupChild13} />
          </View>
          <Image
            style={[styles.iconHome2, styles.iconLayout]}
            source={require("../assets/-icon-home-2.svg")}
          />
          <Image
            style={[styles.iconUserCircleAlt, styles.iconLayout]}
            source={require("../assets/-icon-user-circle-alt.svg")}
          />
          <View style={[styles.dashboardParent, styles.groupChild14Layout]}>
            <Text style={[styles.dashboard2, styles.closedTypo]}>
              Dashboard
            </Text>
            <View style={[styles.groupChild14, styles.groupChild14Layout]} />
            <View style={styles.groupView}>
              <View style={[styles.groupChild15, styles.groupChildLayout1]} />
              <View style={[styles.groupChild16, styles.groupChildLayout]} />
              <View style={[styles.groupChild17, styles.groupChildLayout1]} />
              <View style={[styles.groupChild18, styles.groupChildLayout]} />
            </View>
          </View>
          <Text style={[styles.active1, styles.active1Typo]}>Active</Text>
          <Text style={[styles.pending1, styles.active1Typo]}>Pending</Text>
          <Text style={[styles.closed1, styles.active1Typo]}>Closed</Text>
          <Image
            style={[styles.iconFolder, styles.iconLayout1]}
            source={require("../assets/-icon-folder.svg")}
          />
          <Image
            style={[styles.iconCalendar1, styles.iconLayout1]}
            source={require("../assets/-icon-calendar.svg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  parentLayout: {
    width: 367,
    position: "absolute",
  },
  groupChildLayout3: {
    height: 68,
    width: 360,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shyamTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupInnerBorder: {
    borderColor: Color.colorGray,
    backgroundColor: Color.colorLavenderblush,
    height: 37,
    width: 103,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    top: 74,
    position: "absolute",
  },
  closedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupChildPosition: {
    height: 18,
    borderBottomRightRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    left: 58,
    position: "absolute",
  },
  childGroupLayout: {
    height: 167,
    position: "absolute",
  },
  civilPosition: {
    left: 52,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  frameLayout: {
    height: 61,
    width: 63,
    borderRadius: Border.br_81xl,
    position: "absolute",
    overflow: "hidden",
  },
  nextContainerTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  civil1Position: {
    left: 17,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wrapperLayout: {
    height: 12,
    width: 10,
    top: 750,
    position: "absolute",
  },
  groupChildLayout2: {
    width: 23,
    position: "absolute",
  },
  iconLayout: {
    top: "90.06%",
    width: "6.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild14Layout: {
    width: 50,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 10,
    width: 11,
    borderRadius: Border.br_11xs,
    borderColor: Color.colorGray,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  groupChildLayout: {
    left: 11,
    height: 10,
    width: 11,
    borderRadius: Border.br_11xs,
    borderColor: Color.colorGray,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  active1Typo: {
    fontSize: FontSize.size_base,
    top: 83,
    fontFamily: FontFamily.interRegular,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  ngoDashboard: {
    width: 360,
    backgroundColor: Color.colorWhitesmoke,
    left: 7,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 800,
  },
  groupChild: {
    top: 697,
    left: 0,
  },
  dashboard1: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.publicSansBold,
    textAlign: "center",
    color: Color.colorBlack,
    left: 29,
    top: 0,
    position: "absolute",
  },
  iconBellNotification: {
    height: "2.73%",
    width: "4.93%",
    top: "0.37%",
    right: "18.5%",
    bottom: "96.89%",
    left: "76.57%",
  },
  iconMenu: {
    height: "2.24%",
    width: "5.18%",
    top: "0.43%",
    right: "6.4%",
    bottom: "97.33%",
    left: "88.42%",
  },
  caseStatus: {
    top: 41,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    color: Color.colorBlack,
    left: 29,
  },
  groupItem: {
    left: 20,
    backgroundColor: "#d2d2d2",
    borderColor: Color.colorDimgray,
    height: 37,
    width: 103,
    borderWidth: 1,
    borderStyle: "solid",
    top: 74,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  groupInner: {
    left: 248,
  },
  rectangleView: {
    left: 136,
  },
  groupChild1: {
    top: 144,
    left: 22,
    width: 321,
    height: 201,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  groupChild2: {
    top: 403,
    left: 31,
    width: 312,
    height: 316,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  groupChild3: {
    top: 489,
    width: 259,
    borderColor: Color.colorLightgray_100,
    left: 58,
    borderRadius: Border.br_11xl,
    height: 316,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  active3Pending1Closed2: {
    top: 639,
    left: 226,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  pending: {
    top: 561,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 136,
  },
  groupChild4: {
    top: 562,
    backgroundColor: "#edd0aa",
    width: 67,
  },
  groupChild5: {
    top: 601,
    backgroundColor: "#d2c2ae",
    width: 166,
  },
  groupChild6: {
    left: 35,
    width: 152,
    borderRadius: Border.br_xl,
    height: 167,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    top: 157,
  },
  civil: {
    top: 184,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  groupChild7: {
    top: 416,
    width: 280,
    height: 48,
    backgroundColor: Color.colorRosybrown_100,
    left: 46,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  assignACase: {
    top: 432,
    left: 140,
    color: Color.colorWhitesmoke,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  shyam26: {
    top: 169,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameIcon: {
    top: 210,
    left: 77,
  },
  thSept: {
    fontFamily: FontFamily.interRegular,
  },
  nextCourtContainer: {
    top: 290,
    left: 64,
  },
  groupChild8: {
    top: 523,
    backgroundColor: "#dcbc90",
    width: 196,
  },
  active: {
    top: 514,
    left: 229,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  closed: {
    top: 604,
    left: 215,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  groupChild9: {
    top: 766,
    left: 326,
    backgroundColor: "#d9d9d9",
    width: 8,
    height: 6,
    position: "absolute",
  },
  frameChild: {
    width: 149,
    borderRadius: Border.br_xl,
    height: 167,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
  },
  civil1: {
    top: 27,
    color: Color.colorDimgray,
    fontStyle: "italic",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  shyam261: {
    top: 12,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  frameItem: {
    top: 53,
    left: 42,
  },
  nextCourtContainer1: {
    top: 133,
    left: 29,
  },
  iconCalendar: {
    height: "5.39%",
    width: "6.99%",
    top: "80.54%",
    right: "79.32%",
    bottom: "14.07%",
    left: "13.69%",
  },
  rectangleGroup: {
    left: 206,
    borderTopLeftRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 136,
    top: 157,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    height: 167,
  },
  text: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  wrapper: {
    left: 57,
  },
  container: {
    left: 227,
  },
  groupChild10: {
    top: 708,
    left: 7,
    height: 68,
  },
  groupChild11: {
    top: 2,
    borderRadius: 3,
    height: 11,
    backgroundColor: Color.colorRosybrown_100,
    left: 0,
  },
  groupChild12: {
    top: 14,
    height: 7,
    backgroundColor: Color.colorRosybrown_100,
    left: 0,
  },
  groupChild13: {
    left: 8,
    width: 6,
    height: 8,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorRosybrown_100,
    top: 0,
    position: "absolute",
  },
  rectangleContainer: {
    top: 725,
    height: 21,
    left: 215,
  },
  iconHome2: {
    height: "2.86%",
    right: "85.01%",
    bottom: "7.08%",
    left: "8.45%",
  },
  iconUserCircleAlt: {
    height: "2.98%",
    right: "10.35%",
    bottom: "6.96%",
    left: "83.11%",
  },
  dashboard2: {
    top: 32,
    left: 4,
    fontSize: 8,
    color: "#8e6661",
  },
  groupChild14: {
    backgroundColor: "#dac09d",
    height: 27,
    borderRadius: Border.br_11xl,
    width: 50,
    left: 0,
    top: 0,
  },
  groupChild15: {
    top: 0,
  },
  groupChild16: {
    top: 10,
  },
  groupChild17: {
    top: 10,
  },
  groupChild18: {
    top: 0,
  },
  groupView: {
    top: 4,
    left: 15,
    width: 21,
    height: 19,
    position: "absolute",
  },
  dashboardParent: {
    top: 723,
    left: 100,
    height: 42,
  },
  active1: {
    left: 46,
  },
  pending1: {
    left: 156,
  },
  closed1: {
    left: 274,
  },
  iconFolder: {
    height: "1.86%",
    width: "4.36%",
    top: "53.48%",
    right: "64.44%",
    bottom: "44.66%",
    left: "31.2%",
  },
  iconCalendar1: {
    height: "1.12%",
    width: "2.45%",
    top: "36.21%",
    right: "83.24%",
    bottom: "62.67%",
    left: "14.31%",
  },
  rectangleParent: {
    top: 28,
    height: 805,
    left: 0,
  },
  ngoDashboardParent: {
    left: -7,
    height: 833,
    top: 0,
  },
  dashboard: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Dashboard;
