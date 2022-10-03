import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Icons = () => {
  return (
    <View style={styles.iconsView}>
      <Image
        style={styles.iconLineCard}
        resizeMode="cover"
        source={require("../assets/icon--line--card.png")}
      />
      <Image
        style={[styles.iconLinePaypal, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--paypal.png")}
      />
      <Image
        style={[styles.iconLineWallet, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--wallet.png")}
      />
      <Image
        style={[styles.iconLineBack, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--back.png")}
      />
      <Image
        style={[styles.iconLineSetting, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--setting1.png")}
      />
      <Image
        style={[styles.iconLineNotification, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--notification2.png")}
      />
      <Image
        style={[styles.iconLineMessage, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--message1.png")}
      />
      <Image
        style={[styles.iconLineDashboard, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--dashboard1.png")}
      />
      <Image
        style={[styles.iconLineDiscount, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--discount2.png")}
      />
      <Image
        style={[styles.iconLineHome, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--home1.png")}
      />
      <Image
        style={[styles.iconLineLogOut, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--log-out.png")}
      />
      <Image
        style={[styles.iconLineAppereance, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--appereance1.png")}
      />
      <Image
        style={[styles.iconLineRestaurant, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--restaurant1.png")}
      />
      <Image
        style={[styles.iconLineSecurity, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--security2.png")}
      />
      <Image
        style={[styles.iconLineAboutUs, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--about-us1.png")}
      />
      <Image
        style={[styles.iconLineOption, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--option1.png")}
      />
      <Image
        style={[styles.iconLineAdd, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--add.png")}
      />
      <Image
        style={[styles.iconLineEdit, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--edit5.png")}
      />
      <Image
        style={[styles.iconLineCoin, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--coin.png")}
      />
      <Image
        style={[styles.iconLineArrowUp, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--arrow--up.png")}
      />
      <Image
        style={[styles.iconLineArrowDown, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--arrow--down.png")}
      />
      <Image
        style={[styles.iconLineOrder, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--order.png")}
      />
      <Image
        style={[styles.iconLineCustomer, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--customer.png")}
      />
      <Image
        style={[styles.iconLineExport, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--export.png")}
      />
      <Image
        style={[styles.iconLinePrint, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--print.png")}
      />
      <Image
        style={[styles.iconLineTrash, styles.ml5]}
        resizeMode="cover"
        source={require("../assets/icon--line--trash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: 5,
  },
  iconLineCard: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconLinePaypal: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineWallet: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconLineSetting: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineNotification: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineMessage: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineDashboard: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineDiscount: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineHome: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineLogOut: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineAppereance: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineRestaurant: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineSecurity: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineAboutUs: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineOption: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineAdd: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconLineEdit: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineCoin: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconLineArrowUp: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineArrowDown: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineOrder: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineCustomer: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLineExport: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconLinePrint: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconLineTrash: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconsView: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Icons;
