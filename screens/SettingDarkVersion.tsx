import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const SettingDarkVersion = () => {
  return (
    <View style={styles.settingDarkVersionView}>
      <Text style={styles.settingsText}>Settings</Text>
      <View style={styles.productManagementView}>
        <Image
          style={styles.bGIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <View style={styles.buttonsView}>
          <View style={styles.buttonView}>
            <Text style={styles.cancelText}>Discard Changes</Text>
          </View>
          <View style={[styles.buttonView1, styles.ml8]}>
            <Text style={styles.confirmPaymentText}>Save Changes</Text>
          </View>
        </View>
        <View style={styles.contentView5}>
          <Image
            style={styles.dividerIcon}
            resizeMode="cover"
            source={require("../assets/divider.png")}
          />
          <View style={styles.dishesView}>
            <View style={styles.row2View}>
              <View style={styles.contentCardDish}>
                <View style={styles.bgView} />
                <View style={styles.buttonView2}>
                  <View style={styles.rectangleView} />
                  <View style={styles.groupView}>
                    <Image
                      style={styles.iconLineEdit}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit.png")}
                    />
                    <Text style={styles.editDishText}>Edit dish</Text>
                  </View>
                </View>
                <View style={styles.contentView}>
                  <Text style={styles.spicySeasonedSeafoodNoodles}>
                    Spicy seasoned seafood noodles
                  </Text>
                  <View style={[styles.frameView, styles.mt8]}>
                    <Text style={styles.text}>$ 2.29</Text>
                    <Image
                      style={[styles.ellipseIcon, styles.ml8]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-52.png")}
                    />
                    <Text style={[styles.bowlsText, styles.ml8]}>20 Bowls</Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon}
                  resizeMode="cover"
                  source={require("../assets/images.png")}
                />
              </View>
              <View style={[styles.contentCardDish1, styles.ml16]}>
                <View style={styles.bgView1} />
                <View style={styles.buttonView3}>
                  <View style={styles.rectangleView1} />
                  <View style={styles.groupView1}>
                    <Image
                      style={styles.iconLineEdit1}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit.png")}
                    />
                    <Text style={styles.editDishText1}>Edit dish</Text>
                  </View>
                </View>
                <View style={styles.contentView1}>
                  <Text style={styles.spicySeasonedSeafoodNoodles1}>
                    Salted Pasta with mushroom sauce
                  </Text>
                  <View style={[styles.frameView1, styles.mt8]}>
                    <Text style={styles.text1}>$ 2.69</Text>
                    <Image
                      style={[styles.ellipseIcon1, styles.ml8]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-52.png")}
                    />
                    <Text style={[styles.bowlsText1, styles.ml8]}>
                      20 Bowls
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon1}
                  resizeMode="cover"
                  source={require("../assets/images1.png")}
                />
              </View>
              <View style={[styles.contentCardDish2, styles.ml16]}>
                <View style={styles.bgView2} />
                <View style={styles.buttonView4}>
                  <View style={styles.rectangleView2} />
                  <View style={styles.groupView2}>
                    <Image
                      style={styles.iconLineEdit2}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit.png")}
                    />
                    <Text style={styles.editDishText2}>Edit dish</Text>
                  </View>
                </View>
                <View style={styles.contentView2}>
                  <Text style={styles.spicySeasonedSeafoodNoodles2}>
                    Salted Pasta with mushroom sauce
                  </Text>
                  <View style={[styles.frameView2, styles.mt8]}>
                    <Text style={styles.text2}>$ 2.69</Text>
                    <Image
                      style={[styles.ellipseIcon2, styles.ml8]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-52.png")}
                    />
                    <Text style={[styles.bowlsText2, styles.ml8]}>
                      20 Bowls
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon2}
                  resizeMode="cover"
                  source={require("../assets/images2.png")}
                />
              </View>
            </View>
            <View style={styles.row1View}>
              <View style={styles.addProductView}>
                <View style={styles.rectangleView3} />
                <View style={styles.frameView3}>
                  <View style={styles.buttonView5}>
                    <Image
                      style={styles.plus24pxIcon}
                      resizeMode="cover"
                      source={require("../assets/plus-24px.png")}
                    />
                  </View>
                  <Text style={[styles.addNewDish, styles.mt8]}>
                    Add new dish
                  </Text>
                </View>
              </View>
              <View style={[styles.contentCardDish3, styles.ml16]}>
                <View style={styles.bgView3} />
                <View style={styles.buttonView6}>
                  <View style={styles.rectangleView4} />
                  <View style={styles.groupView3}>
                    <Image
                      style={styles.iconLineEdit3}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit3.png")}
                    />
                    <Text style={styles.editDishText3}>Edit dish</Text>
                  </View>
                </View>
                <View style={styles.contentView3}>
                  <Text style={styles.spicySeasonedSeafoodNoodles3}>
                    Spicy seasoned seafood noodles
                  </Text>
                  <View style={[styles.frameView4, styles.mt8]}>
                    <Text style={styles.text3}>$ 2.29</Text>
                    <Image
                      style={[styles.ellipseIcon3, styles.ml8]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-523.png")}
                    />
                    <Text style={[styles.bowlsText3, styles.ml8]}>
                      20 Bowls
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon3}
                  resizeMode="cover"
                  source={require("../assets/images3.png")}
                />
              </View>
              <View style={[styles.contentCardDish4, styles.ml16]}>
                <View style={styles.bgView4} />
                <View style={styles.buttonView7}>
                  <View style={styles.rectangleView5} />
                  <View style={styles.groupView4}>
                    <Image
                      style={styles.iconLineEdit4}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit3.png")}
                    />
                    <Text style={styles.editDishText4}>Edit dish</Text>
                  </View>
                </View>
                <View style={styles.contentView4}>
                  <Text style={styles.spicySeasonedSeafoodNoodles4}>
                    Salted Pasta with mushroom sauce
                  </Text>
                  <View style={[styles.frameView5, styles.mt8]}>
                    <Text style={styles.text4}>$ 2.69</Text>
                    <Image
                      style={[styles.ellipseIcon4, styles.ml8]}
                      resizeMode="cover"
                      source={require("../assets/ellipse-523.png")}
                    />
                    <Text style={[styles.bowlsText4, styles.ml8]}>
                      30 Bowls
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon4}
                  resizeMode="cover"
                  source={require("../assets/images4.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerView}>
          <View style={styles.tabView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/divider.png")}
            />
            <View style={styles.menuView1}>
              <View style={styles.menuView}>
                <Text style={styles.hotDishesText}>Hot Dishes</Text>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector-4.png")}
                />
              </View>
              <Text style={styles.coldDishesText}>Cold Dishes</Text>
              <Text style={styles.soupText}>Soup</Text>
              <Text style={styles.grillText}>Grill</Text>
              <Text style={styles.appetizerText}>Appetizer</Text>
              <Text style={styles.dessertText}>Dessert</Text>
            </View>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.productsManagementText}>
              Products Management
            </Text>
            <View style={styles.buttonView8}>
              <Image
                style={styles.iconLineOption}
                resizeMode="cover"
                source={require("../assets/icon--line--option.png")}
              />
              <Text style={[styles.confirmPaymentText1, styles.ml8]}>
                Manage Categories
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.settingOptionView}>
        <View style={styles.contentView8}>
          <View style={styles.contentView7}>
            <Image
              style={styles.iconLineAppereance}
              resizeMode="cover"
              source={require("../assets/icon--line--appereance.png")}
            />
            <View style={styles.contentView6}>
              <Text style={styles.appereanceText}>Appereance</Text>
              <Text style={[styles.darkAndLightModeFontSize, styles.mt4]}>
                Dark and Light mode, Font size
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentView11}>
          <View style={styles.contentView10}>
            <Image
              style={styles.iconLineRestaurant}
              resizeMode="cover"
              source={require("../assets/icon--line--restaurant.png")}
            />
            <View style={styles.contentView9}>
              <Text style={styles.appereanceText1}>Your Restaurant</Text>
              <Text style={[styles.darkAndLightModeFontSize1, styles.mt4]}>
                Dark and Light mode, Font size
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentView14}>
          <View style={styles.contentView13}>
            <Image
              style={styles.iconLineDiscount}
              resizeMode="cover"
              source={require("../assets/icon--line--discount.png")}
            />
            <View style={styles.contentView12}>
              <Text style={styles.appereanceText2}>Products Management</Text>
              <Text style={[styles.darkAndLightModeFontSize2, styles.mt4]}>
                Manage your product, pricing, etc
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleView6, styles.ml64]} />
        </View>
        <View style={styles.contentView17}>
          <View style={styles.contentView16}>
            <Image
              style={styles.iconLineNotification}
              resizeMode="cover"
              source={require("../assets/icon--line--notification.png")}
            />
            <View style={styles.contentView15}>
              <Text style={styles.appereanceText3}>Notifications</Text>
              <Text style={[styles.darkAndLightModeFontSize3, styles.mt4]}>
                Customize your notifications
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentView20}>
          <View style={styles.contentView19}>
            <Image
              style={styles.iconLineSecurity}
              resizeMode="cover"
              source={require("../assets/icon--line--security.png")}
            />
            <View style={styles.contentView18}>
              <Text style={styles.appereanceText4}>Security</Text>
              <Text style={[styles.darkAndLightModeFontSize4, styles.mt4]}>
                Configure Password, PIN, etc
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentView23}>
          <View style={styles.contentView22}>
            <Image
              style={styles.iconLineSecurity1}
              resizeMode="cover"
              source={require("../assets/icon--line--security.png")}
            />
            <View style={styles.contentView21}>
              <Text style={styles.appereanceText5}>Security</Text>
              <Text style={[styles.darkAndLightModeFontSize5, styles.mt4]}>
                Configure Password, PIN, etc
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentView26}>
          <View style={styles.contentView25}>
            <Image
              style={styles.iconLineAboutUs}
              resizeMode="cover"
              source={require("../assets/icon--line--about-us.png")}
            />
            <View style={styles.contentView24}>
              <Text style={styles.appereanceText6}>About Us</Text>
              <Text style={[styles.darkAndLightModeFontSize6, styles.mt4]}>
                Find out more about Posly
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sidebarView6}>
        <View style={styles.bgView5} />
        <Image
          style={styles.sidebarIcon}
          resizeMode="cover"
          source={require("../assets/sidebar.png")}
        />
        <View style={styles.menuView2}>
          <View style={styles.sidebarView}>
            <Image
              style={styles.patternIcon}
              resizeMode="cover"
              source={require("../assets/pattern.png")}
            />
            <View style={styles.frameView6}>
              <Image
                style={styles.iconLineHome}
                resizeMode="cover"
                source={require("../assets/icon--line--home.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView1}>
            <Image
              style={styles.patternIcon1}
              resizeMode="cover"
              source={require("../assets/pattern.png")}
            />
            <View style={styles.frameView7}>
              <Image
                style={styles.iconLineDiscount1}
                resizeMode="cover"
                source={require("../assets/icon--line--discount1.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView2}>
            <Image
              style={styles.patternIcon2}
              resizeMode="cover"
              source={require("../assets/pattern.png")}
            />
            <View style={styles.frameView8}>
              <Image
                style={styles.iconLineDashboard}
                resizeMode="cover"
                source={require("../assets/icon--line--dashboard.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView3}>
            <Image
              style={styles.patternIcon3}
              resizeMode="cover"
              source={require("../assets/pattern.png")}
            />
            <View style={styles.frameView9}>
              <Image
                style={styles.iconLineMessage}
                resizeMode="cover"
                source={require("../assets/icon--line--message.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView4}>
            <Image
              style={styles.patternIcon4}
              resizeMode="cover"
              source={require("../assets/pattern.png")}
            />
            <View style={styles.frameView10}>
              <Image
                style={styles.iconLineNotification1}
                resizeMode="cover"
                source={require("../assets/icon--line--notification1.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView5}>
            <Image
              style={styles.patternIcon5}
              resizeMode="cover"
              source={require("../assets/pattern5.png")}
            />
            <View style={styles.frameView11}>
              <Image
                style={styles.iconLineSetting}
                resizeMode="cover"
                source={require("../assets/icon--line--setting.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.logoView}>
          <View style={styles.rectangleView7} />
          <Image
            style={styles.bxbxsStoreAltIcon}
            resizeMode="cover"
            source={require("../assets/bxbxsstorealt.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt8: {
    marginTop: 8,
  },
  ml16: {
    marginLeft: 16,
  },
  mt4: {
    marginTop: 4,
  },
  ml64: {
    marginLeft: 64,
  },
  settingsText: {
    position: "absolute",
    top: 24,
    left: 128,
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  bGIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    width: 743,
    height: 723,
  },
  cancelText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  buttonView: {
    borderRadius: 8,
    width: 172,
    flexShrink: 0,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmPaymentText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fafafa",
    textAlign: "left",
  },
  buttonView1: {
    borderRadius: 8,
    backgroundColor: "#ea7c69",
    shadowColor: "rgba(234, 124, 105, 0.4)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: 172,
    flexShrink: 0,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsView: {
    position: "absolute",
    top: 651,
    left: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dividerIcon: {
    position: "absolute",
    top: 448.5,
    left: 0,
    width: 743,
    height: 1,
  },
  bgView: {
    position: "absolute",
    height: "100.33%",
    width: "100.45%",
    top: "-0.17%",
    right: "-0.23%",
    bottom: "-0.17%",
    left: "-0.23%",
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#ea7c69",
    opacity: 0.24,
  },
  iconLineEdit: {
    position: "absolute",
    height: "100%",
    width: "24.39%",
    top: "0%",
    right: "75.61%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editDishText: {
    position: "absolute",
    height: "100%",
    width: "65.85%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "34.15%",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "38.46%",
    width: "37.1%",
    top: "30.77%",
    right: "31.22%",
    bottom: "30.77%",
    left: "31.67%",
  },
  buttonView2: {
    position: "absolute",
    height: "17.39%",
    width: "100%",
    top: "82.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  bowlsText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    position: "absolute",
    height: "21.4%",
    width: "65.16%",
    top: "55.85%",
    right: "17.19%",
    bottom: "22.74%",
    left: "17.65%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 132,
    height: 132,
  },
  contentCardDish: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  bgView1: {
    position: "absolute",
    height: "100.33%",
    width: "100.45%",
    top: "-0.17%",
    right: "-0.23%",
    bottom: "-0.17%",
    left: "-0.23%",
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#ea7c69",
    opacity: 0.24,
  },
  iconLineEdit1: {
    position: "absolute",
    height: "100%",
    width: "24.39%",
    top: "0%",
    right: "75.61%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editDishText1: {
    position: "absolute",
    height: "100%",
    width: "65.85%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "34.15%",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    height: "38.46%",
    width: "37.1%",
    top: "30.77%",
    right: "31.22%",
    bottom: "30.77%",
    left: "31.67%",
  },
  buttonView3: {
    position: "absolute",
    height: "17.39%",
    width: "100%",
    top: "82.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  ellipseIcon1: {
    position: "relative",
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  bowlsText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView1: {
    position: "absolute",
    height: "21.4%",
    width: "65.16%",
    top: "55.85%",
    right: "17.19%",
    bottom: "22.74%",
    left: "17.65%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon1: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 132,
    height: 132,
  },
  contentCardDish1: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  bgView2: {
    position: "absolute",
    height: "100.33%",
    width: "100.45%",
    top: "-0.17%",
    right: "-0.23%",
    bottom: "-0.17%",
    left: "-0.23%",
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#ea7c69",
    opacity: 0.24,
  },
  iconLineEdit2: {
    position: "absolute",
    height: "100%",
    width: "24.39%",
    top: "0%",
    right: "75.61%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editDishText2: {
    position: "absolute",
    height: "100%",
    width: "65.85%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "34.15%",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    height: "38.46%",
    width: "37.1%",
    top: "30.77%",
    right: "31.22%",
    bottom: "30.77%",
    left: "31.67%",
  },
  buttonView4: {
    position: "absolute",
    height: "17.39%",
    width: "100%",
    top: "82.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  ellipseIcon2: {
    position: "relative",
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  bowlsText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView2: {
    position: "absolute",
    height: "21.4%",
    width: "65.16%",
    top: "55.85%",
    right: "17.19%",
    bottom: "22.74%",
    left: "17.65%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon2: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 132,
    height: 132,
  },
  contentCardDish2: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  row2View: {
    position: "absolute",
    top: 315,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView3: {
    position: "absolute",
    top: -0.5,
    left: -0.5,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    width: 222,
    height: 300,
  },
  plus24pxIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  buttonView5: {
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  addNewDish: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "center",
  },
  frameView3: {
    position: "absolute",
    top: 111,
    left: 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  addProductView: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  bgView3: {
    position: "absolute",
    height: "100.33%",
    width: "100.45%",
    top: "-0.17%",
    right: "-0.23%",
    bottom: "-0.17%",
    left: "-0.23%",
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
  },
  rectangleView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#ea7c69",
    opacity: 0.24,
  },
  iconLineEdit3: {
    position: "absolute",
    height: "100%",
    width: "24.39%",
    top: "0%",
    right: "75.61%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editDishText3: {
    position: "absolute",
    height: "100%",
    width: "65.85%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "34.15%",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    height: "38.46%",
    width: "37.1%",
    top: "30.77%",
    right: "31.22%",
    bottom: "30.77%",
    left: "31.67%",
  },
  buttonView6: {
    position: "absolute",
    height: "17.39%",
    width: "100%",
    top: "82.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  ellipseIcon3: {
    position: "relative",
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  bowlsText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView3: {
    position: "absolute",
    height: "21.4%",
    width: "65.16%",
    top: "55.85%",
    right: "17.19%",
    bottom: "22.74%",
    left: "17.65%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon3: {
    position: "absolute",
    top: 24,
    left: 47,
    width: 127,
    height: 127,
  },
  contentCardDish3: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  bgView4: {
    position: "absolute",
    height: "100.33%",
    width: "100.45%",
    top: "-0.17%",
    right: "-0.23%",
    bottom: "-0.17%",
    left: "-0.23%",
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
  },
  rectangleView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#ea7c69",
    opacity: 0.24,
  },
  iconLineEdit4: {
    position: "absolute",
    height: "100%",
    width: "24.39%",
    top: "0%",
    right: "75.61%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editDishText4: {
    position: "absolute",
    height: "100%",
    width: "65.85%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "34.15%",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    height: "38.46%",
    width: "37.1%",
    top: "30.77%",
    right: "31.22%",
    bottom: "30.77%",
    left: "31.67%",
  },
  buttonView7: {
    position: "absolute",
    height: "17.39%",
    width: "100%",
    top: "82.61%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  ellipseIcon4: {
    position: "relative",
    width: 4,
    height: 4,
    flexShrink: 0,
  },
  bowlsText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView4: {
    position: "absolute",
    height: "21.4%",
    width: "65.16%",
    top: "55.85%",
    right: "17.19%",
    bottom: "22.74%",
    left: "17.65%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon4: {
    position: "absolute",
    top: 21,
    left: 45,
    width: 132,
    height: 132,
  },
  contentCardDish4: {
    position: "relative",
    width: 221,
    height: 299,
    flexShrink: 0,
  },
  row1View: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dishesView: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 695,
    height: 450,
    overflow: "hidden",
  },
  contentView5: {
    position: "absolute",
    top: 153,
    left: 0,
    width: 743,
    height: 450,
  },
  vectorIcon: {
    position: "absolute",
    top: 32.5,
    left: 0,
    width: 743,
    height: 1,
  },
  hotDishesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  vectorIcon1: {
    position: "absolute",
    top: 31.5,
    left: -1.5,
    width: 40,
    height: 3,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 66,
    height: 33,
  },
  coldDishesText: {
    position: "absolute",
    top: 0,
    left: 98,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  soupText: {
    position: "absolute",
    top: 0,
    left: 202,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  grillText: {
    position: "absolute",
    top: 0,
    left: 266,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  appetizerText: {
    position: "absolute",
    top: 0,
    left: 323,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  dessertText: {
    position: "absolute",
    top: 0,
    left: 416,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  menuView1: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 464,
    height: 33,
  },
  tabView: {
    position: "absolute",
    top: 72,
    left: 0,
    width: 743,
    height: 33,
  },
  productsManagementText: {
    position: "absolute",
    top: 10,
    left: 0,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  iconLineOption: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  confirmPaymentText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  buttonView8: {
    position: "absolute",
    top: 0,
    left: 517,
    borderRadius: 8,
    shadowColor: "rgba(146, 136, 224, 0.3)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 178,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 695,
    height: 48,
  },
  headerView: {
    position: "absolute",
    top: 24,
    left: 0,
    width: 743,
    height: 105,
  },
  productManagementView: {
    position: "absolute",
    top: 87,
    left: 427,
    width: 743,
    height: 723,
  },
  iconLineAppereance: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView6: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView7: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView8: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineRestaurant: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView9: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView10: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView11: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineDiscount: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  darkAndLightModeFontSize2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView12: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView13: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  rectangleView6: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "#ea7c69",
    width: 4,
    height: 39,
    flexShrink: 0,
  },
  contentView14: {
    backgroundColor: "rgba(234, 124, 105, 0.26)",
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineNotification: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView15: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView16: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView17: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineSecurity: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView18: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView19: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView20: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineSecurity1: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView21: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView22: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView23: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineAboutUs: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  appereanceText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  darkAndLightModeFontSize6: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView24: {
    position: "absolute",
    top: 0,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView25: {
    position: "relative",
    width: 183,
    height: 39,
    flexShrink: 0,
  },
  contentView26: {
    borderRadius: 8,
    width: 275,
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  settingOptionView: {
    position: "absolute",
    top: 87,
    left: 128,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    height: 723,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bgView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#1f1d2b",
    width: 104,
    height: 834,
  },
  sidebarIcon: {
    position: "absolute",
    top: 754,
    left: 24,
    borderRadius: 10,
    width: 56,
    height: 56,
  },
  patternIcon: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineHome: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView6: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  patternIcon1: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineDiscount1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView7: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView1: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  patternIcon2: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineDashboard: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView8: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView2: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  patternIcon3: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineMessage: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView9: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView3: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  patternIcon4: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineNotification1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView10: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView4: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  patternIcon5: {
    position: "absolute",
    top: -2,
    left: 0,
    width: 92.02,
    height: 104.01,
  },
  iconLineSetting: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView11: {
    position: "absolute",
    top: 23,
    left: 12,
    borderRadius: 8,
    backgroundColor: "#ea7c69",
    shadowColor: "rgba(234, 124, 105, 0.32)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sidebarView5: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  menuView2: {
    position: "absolute",
    top: 96,
    left: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#eb966a",
    opacity: 0.26,
  },
  bxbxsStoreAltIcon: {
    position: "absolute",
    height: "71.43%",
    width: "71.43%",
    top: "14.29%",
    right: "14.29%",
    bottom: "14.29%",
    left: "14.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  logoView: {
    position: "absolute",
    height: "6.71%",
    width: "53.85%",
    top: "2.88%",
    right: "23.08%",
    bottom: "90.41%",
    left: "23.08%",
  },
  sidebarView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 104,
    height: 834,
  },
  settingDarkVersionView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#252836",
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default SettingDarkVersion;
