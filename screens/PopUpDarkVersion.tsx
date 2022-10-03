import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const PopUpDarkVersion = () => {
  return (
    <View style={styles.popUpDarkVersion}>
      <View style={styles.column2View}>
        <View style={styles.contentView2}>
          <View style={styles.headerView}>
            <View style={styles.titleView}>
              <Text style={styles.itemText}>Item</Text>
              <Text style={styles.qtyText}>Qty</Text>
              <Text style={styles.priceText}>Price</Text>
            </View>
            <View style={styles.selectorView}>
              <View style={styles.tabView}>
                <Text style={styles.hotDishesText}>Dine In</Text>
              </View>
              <View style={[styles.tabView1, styles.ml8]}>
                <Text style={styles.toGoText}>To Go</Text>
              </View>
              <View style={[styles.tabView2, styles.ml8]}>
                <Text style={styles.toGoText1}>Delivery</Text>
              </View>
            </View>
            <Text style={styles.titleText}>Orders #34562</Text>
          </View>
          <View style={[styles.contentView1, styles.mt24]}>
            <Image
              style={styles.bottomDividerIcon}
              resizeMode="cover"
              source={require("../assets/bottom-divider.png")}
            />
            <View style={styles.contentView}>
              <View style={styles.contentItems}>
                <View style={styles.nameView}>
                  <View style={styles.itemsView}>
                    <View style={styles.itemView}>
                      <View style={styles.frameView}>
                        <Text style={styles.healthyNoodleWith}>
                          Healthy noodle with ...
                        </Text>
                        <Text style={[styles.text, styles.mt4]}>$ 3.29</Text>
                      </View>
                      <Image
                        style={styles.imageIcon}
                        resizeMode="cover"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View style={styles.itemView1}>
                      <View style={styles.frameView1}>
                        <Text style={styles.spicyInstantNoodle}>
                          Spicy instant noodle...
                        </Text>
                        <Text style={[styles.text1, styles.mt4]}>$ 3.49</Text>
                      </View>
                      <Image
                        style={styles.imageIcon1}
                        resizeMode="cover"
                        source={require("../assets/image1.png")}
                      />
                    </View>
                    <View style={styles.itemView2}>
                      <View style={styles.frameView2}>
                        <Text style={styles.spicySeasonedSea}>
                          Spicy seasoned sea...
                        </Text>
                        <Text style={[styles.text2, styles.mt4]}>$ 2.29</Text>
                      </View>
                      <Image
                        style={styles.maskGroupIcon}
                        resizeMode="cover"
                        source={require("../assets/mask-group.png")}
                      />
                    </View>
                    <View style={styles.itemView3}>
                      <View style={styles.frameView3}>
                        <Text style={styles.saltedPastaWithMu}>
                          Salted pasta with mu...
                        </Text>
                        <Text style={[styles.text3, styles.mt4]}>$ 2.69</Text>
                      </View>
                      <Image
                        style={styles.imageIcon2}
                        resizeMode="cover"
                        source={require("../assets/image2.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.formElementsTextfieldDe}>
                    <Text style={styles.thisIsPlaceholder}>2</Text>
                  </View>
                  <Text style={styles.priceText1}>$ 4,58</Text>
                </View>
                <View style={[styles.noteView, styles.mt10]}>
                  <View style={styles.formElementsTextfieldDe1}>
                    <Text style={styles.thisIsPlaceholder1}>
                      Please, just a little bit spicy only.
                    </Text>
                  </View>
                  <View style={styles.buttonView}>
                    <Image
                      style={styles.iconLineTrash}
                      resizeMode="cover"
                      source={require("../assets/icon--line--trash1.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.contentItems1, styles.mt24]}>
                <View style={styles.nameView1}>
                  <View style={styles.itemsView1}>
                    <View style={styles.itemView4}>
                      <View style={styles.frameView4}>
                        <Text style={styles.healthyNoodleWith1}>
                          Healthy noodle with ...
                        </Text>
                        <Text style={[styles.text4, styles.mt4]}>$ 3.29</Text>
                      </View>
                      <Image
                        style={styles.imageIcon3}
                        resizeMode="cover"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View style={styles.itemView5}>
                      <View style={styles.frameView5}>
                        <Text style={styles.spicyInstantNoodle1}>
                          Spicy instant noodle...
                        </Text>
                        <Text style={[styles.text5, styles.mt4]}>$ 3.49</Text>
                      </View>
                      <Image
                        style={styles.imageIcon4}
                        resizeMode="cover"
                        source={require("../assets/image1.png")}
                      />
                    </View>
                    <View style={styles.itemView6}>
                      <View style={styles.frameView6}>
                        <Text style={styles.spicySeasonedSea1}>
                          Spicy seasoned sea...
                        </Text>
                        <Text style={[styles.text6, styles.mt4]}>$ 2.29</Text>
                      </View>
                      <Image
                        style={styles.maskGroupIcon1}
                        resizeMode="cover"
                        source={require("../assets/mask-group.png")}
                      />
                    </View>
                    <View style={styles.itemView7}>
                      <View style={styles.frameView7}>
                        <Text style={styles.saltedPastaWithMu1}>
                          Salted pasta with mu...
                        </Text>
                        <Text style={[styles.text7, styles.mt4]}>$ 2.69</Text>
                      </View>
                      <Image
                        style={styles.imageIcon5}
                        resizeMode="cover"
                        source={require("../assets/image2.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.formElementsTextfieldDe2}>
                    <Text style={styles.thisIsPlaceholder2}>1</Text>
                  </View>
                  <Text style={styles.priceText2}>$ 2.69</Text>
                </View>
                <View style={[styles.noteView1, styles.mt10]}>
                  <View style={styles.formElementsTextfieldDe3}>
                    <Text style={styles.thisIsPlaceholder3}>Order Note...</Text>
                  </View>
                  <View style={styles.buttonView1}>
                    <Image
                      style={styles.iconLineTrash1}
                      resizeMode="cover"
                      source={require("../assets/icon--line--trash2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.contentItems2, styles.mt24]}>
                <View style={styles.nameView2}>
                  <View style={styles.itemsView2}>
                    <View style={styles.itemView8}>
                      <View style={styles.frameView8}>
                        <Text style={styles.healthyNoodleWith2}>
                          Healthy noodle with ...
                        </Text>
                        <Text style={[styles.text8, styles.mt4]}>$ 3.29</Text>
                      </View>
                      <Image
                        style={styles.imageIcon6}
                        resizeMode="cover"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View style={styles.itemView9}>
                      <View style={styles.frameView9}>
                        <Text style={styles.spicyInstantNoodle2}>
                          Spicy instant noodle...
                        </Text>
                        <Text style={[styles.text9, styles.mt4]}>$ 3.49</Text>
                      </View>
                      <Image
                        style={styles.imageIcon7}
                        resizeMode="cover"
                        source={require("../assets/image1.png")}
                      />
                    </View>
                    <View style={styles.itemView10}>
                      <View style={styles.frameView10}>
                        <Text style={styles.spicySeasonedSea2}>
                          Spicy seasoned sea...
                        </Text>
                        <Text style={[styles.text10, styles.mt4]}>$ 2.29</Text>
                      </View>
                      <Image
                        style={styles.maskGroupIcon2}
                        resizeMode="cover"
                        source={require("../assets/mask-group.png")}
                      />
                    </View>
                    <View style={styles.itemView11}>
                      <View style={styles.frameView11}>
                        <Text style={styles.saltedPastaWithMu2}>
                          Salted pasta with mu...
                        </Text>
                        <Text style={[styles.text11, styles.mt4]}>$ 2.69</Text>
                      </View>
                      <Image
                        style={styles.imageIcon8}
                        resizeMode="cover"
                        source={require("../assets/image2.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.formElementsTextfieldDe4}>
                    <Text style={styles.thisIsPlaceholder4}>3</Text>
                  </View>
                  <Text style={styles.priceText3}>$ 10,47</Text>
                </View>
                <View style={[styles.noteView2, styles.mt10]}>
                  <View style={styles.formElementsTextfieldDe5}>
                    <Text style={styles.thisIsPlaceholder5}>Order Note...</Text>
                  </View>
                  <View style={styles.buttonView2}>
                    <Image
                      style={styles.iconLineTrash2}
                      resizeMode="cover"
                      source={require("../assets/icon--line--trash2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.contentItems3, styles.mt24]}>
                <View style={styles.nameView3}>
                  <View style={styles.itemsView3}>
                    <View style={styles.itemView12}>
                      <View style={styles.frameView12}>
                        <Text style={styles.healthyNoodleWith3}>
                          Healthy noodle with ...
                        </Text>
                        <Text style={[styles.text12, styles.mt4]}>$ 3.29</Text>
                      </View>
                      <Image
                        style={styles.imageIcon9}
                        resizeMode="cover"
                        source={require("../assets/image9.png")}
                      />
                    </View>
                    <View style={styles.itemView13}>
                      <View style={styles.frameView13}>
                        <Text style={styles.spicyInstantNoodle3}>
                          Spicy instant noodle...
                        </Text>
                        <Text style={[styles.text13, styles.mt4]}>$ 3.49</Text>
                      </View>
                      <Image
                        style={styles.imageIcon10}
                        resizeMode="cover"
                        source={require("../assets/image10.png")}
                      />
                    </View>
                    <View style={styles.itemView14}>
                      <View style={styles.frameView14}>
                        <Text style={styles.spicySeasonedSea3}>
                          Spicy seasoned sea...
                        </Text>
                        <Text style={[styles.text14, styles.mt4]}>$ 2.29</Text>
                      </View>
                      <Image
                        style={styles.maskGroupIcon3}
                        resizeMode="cover"
                        source={require("../assets/mask-group3.png")}
                      />
                    </View>
                    <View style={styles.itemView15}>
                      <View style={styles.frameView15}>
                        <Text style={styles.saltedPastaWithMu3}>
                          Salted pasta with mu...
                        </Text>
                        <Text style={[styles.text15, styles.mt4]}>$ 2.69</Text>
                      </View>
                      <Image
                        style={styles.imageIcon11}
                        resizeMode="cover"
                        source={require("../assets/image11.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.formElementsTextfieldDe6}>
                    <Text style={styles.thisIsPlaceholder6}>1</Text>
                  </View>
                  <Text style={styles.priceText4}>$3.29</Text>
                </View>
                <View style={[styles.noteView3, styles.mt10]}>
                  <View style={styles.formElementsTextfieldDe7}>
                    <Text style={styles.thisIsPlaceholder7}>Order Note...</Text>
                  </View>
                  <View style={styles.buttonView3}>
                    <Image
                      style={styles.iconLineTrash3}
                      resizeMode="cover"
                      source={require("../assets/icon--line--edit.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={styles.topDividerIcon}
              resizeMode="cover"
              source={require("../assets/top-divider.png")}
            />
          </View>
          <View style={[styles.totalView, styles.mt24]}>
            <View style={styles.discountView}>
              <Text style={styles.discountText}>Discount</Text>
              <Text style={styles.text16}>$0</Text>
            </View>
            <View style={[styles.subTotalView, styles.mt16]}>
              <Text style={styles.subTotalText}>Sub total</Text>
              <Text style={styles.text17}> $ 21,03</Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttonView4, styles.mt48]}>
          <Text style={styles.confirmPaymentText}>Continue to Payment</Text>
        </View>
      </View>
      <View style={styles.column1View}>
        <View style={styles.headerView1}>
          <View style={styles.titleView2}>
            <View style={styles.titleView1}>
              <Text style={styles.dateText}>Tuesday 2 Feb, 2021</Text>
              <Text style={styles.restoNameText}>Jaegar Resto</Text>
            </View>
            <View style={[styles.formElementsTextfieldDe8, styles.ml256]}>
              <Image
                style={styles.iconFillsearch}
                resizeMode="cover"
                source={require("../assets/iconfillsearch.png")}
              />
              <Text style={[styles.thisIsPlaceholder8, styles.ml8]}>
                Search for food, coffe, etc
              </Text>
            </View>
          </View>
          <View style={[styles.menuView1, styles.mt24]}>
            <Image
              style={styles.dividerIcon}
              resizeMode="cover"
              source={require("../assets/divider5.png")}
            />
            <View style={styles.menuView}>
              <View style={styles.activeView}>
                <Text style={styles.hotDishesText1}>Hot Dishes</Text>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector-4.png")}
                />
              </View>
              <View style={[styles.defaultView, styles.ml32]}>
                <Text style={styles.coldDishesText}>Cold Dishes</Text>
                <Image
                  style={styles.indicatorIcon}
                  resizeMode="cover"
                  source={require("../assets/indicator.png")}
                />
              </View>
              <View style={[styles.defaultView1, styles.ml32]}>
                <Text style={styles.soupText}>Soup</Text>
                <Image
                  style={styles.indicatorIcon1}
                  resizeMode="cover"
                  source={require("../assets/indicator.png")}
                />
              </View>
              <View style={[styles.defaultView2, styles.ml32]}>
                <Text style={styles.grillText}>Grill</Text>
                <Image
                  style={styles.indicatorIcon2}
                  resizeMode="cover"
                  source={require("../assets/indicator.png")}
                />
              </View>
              <View style={[styles.defaultView3, styles.ml32]}>
                <Text style={styles.appetizerText}>Appetizer</Text>
                <Image
                  style={styles.indicatorIcon3}
                  resizeMode="cover"
                  source={require("../assets/indicator.png")}
                />
              </View>
              <View style={[styles.defaultView4, styles.ml32]}>
                <Text style={styles.dessertText}>Dessert</Text>
                <Image
                  style={styles.indicatorIcon4}
                  resizeMode="cover"
                  source={require("../assets/indicator.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.menuView3, styles.mt24]}>
          <View style={styles.titleView3}>
            <Text style={styles.chooseDishesText}>Choose Dishes</Text>
            <View style={styles.formElementsDropdownDef}>
              <Image
                style={styles.iconOutlinearrowIosDown}
                resizeMode="cover"
                source={require("../assets/iconoutlinearrowiosdown2.png")}
              />
              <Text style={[styles.dineInText, styles.ml10]}>Dine In</Text>
            </View>
          </View>
          <View style={[styles.menuView2, styles.mt24]}>
            <View style={styles.row1View}>
              <View style={styles.contentDishCard}>
                <View style={styles.shadowView} />
                <Image
                  style={styles.bgIcon}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView}>
                  <Text style={styles.dishNameText}>
                    Spicy seasoned seafood noodles
                  </Text>
                  <View style={[styles.frameView16, styles.mt8]}>
                    <Text style={styles.text18}>$ 2.29</Text>
                    <Text style={[styles.bowlsAvailableText, styles.mt4]}>
                      20 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon}
                  resizeMode="cover"
                  source={require("../assets/images8.png")}
                />
              </View>
              <View style={[styles.contentDishCard1, styles.ml28]}>
                <View style={styles.shadowView1} />
                <Image
                  style={styles.bgIcon1}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView1}>
                  <Text style={styles.dishNameText1}>
                    Salted Pasta with mushroom sauce
                  </Text>
                  <View style={[styles.frameView17, styles.mt8]}>
                    <Text style={styles.text19}>$ 2.69</Text>
                    <Text style={[styles.bowlsAvailableText1, styles.mt4]}>
                      11 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon1}
                  resizeMode="cover"
                  source={require("../assets/images4.png")}
                />
              </View>
              <View style={[styles.contentDishCard2, styles.ml28]}>
                <View style={styles.shadowView2} />
                <Image
                  style={styles.bgIcon2}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView2}>
                  <Text style={styles.dishNameText2}>
                    Beef dumpling in hot and sour soup
                  </Text>
                  <View style={[styles.frameView18, styles.mt8]}>
                    <Text style={styles.text20}>$ 2.99</Text>
                    <Text style={[styles.bowlsAvailableText2, styles.mt4]}>
                      16 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon2}
                  resizeMode="cover"
                  source={require("../assets/images10.png")}
                />
              </View>
            </View>
            <View style={[styles.row2View, styles.mt24]}>
              <View style={styles.contentDishCard3}>
                <View style={styles.shadowView3} />
                <Image
                  style={styles.bgIcon3}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView3}>
                  <Text style={styles.dishNameText3}>
                    Healthy noodle with spinach leaf
                  </Text>
                  <View style={[styles.frameView19, styles.mt8]}>
                    <Text style={styles.text21}>$ 3.29</Text>
                    <Text style={[styles.bowlsAvailableText3, styles.mt4]}>
                      22 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon3}
                  resizeMode="cover"
                  source={require("../assets/images11.png")}
                />
              </View>
              <View style={[styles.contentDishCard4, styles.ml28]}>
                <View style={styles.shadowView4} />
                <Image
                  style={styles.bgIcon4}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView4}>
                  <Text style={styles.dishNameText4}>
                    Hot spicy fried rice with omelet
                  </Text>
                  <View style={[styles.frameView20, styles.mt8]}>
                    <Text style={styles.text22}>$ 3.49</Text>
                    <Text style={[styles.bowlsAvailableText4, styles.mt4]}>
                      13 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon4}
                  resizeMode="cover"
                  source={require("../assets/images11.png")}
                />
              </View>
              <View style={[styles.contentDishCard5, styles.ml28]}>
                <View style={styles.shadowView5} />
                <Image
                  style={styles.bgIcon5}
                  resizeMode="cover"
                  source={require("../assets/bg1.png")}
                />
                <View style={styles.textView5}>
                  <Text style={styles.dishNameText5}>
                    Spicy instant noodle with special omelette
                  </Text>
                  <View style={[styles.frameView21, styles.mt8]}>
                    <Text style={styles.text23}>$ 3.59</Text>
                    <Text style={[styles.bowlsAvailableText5, styles.mt4]}>
                      17 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon5}
                  resizeMode="cover"
                  source={require("../assets/images13.png")}
                />
              </View>
            </View>
            <View style={[styles.row3View, styles.mt24]}>
              <View style={styles.contentDishCard6}>
                <View style={styles.shadowView6} />
                <Image
                  style={styles.bgIcon6}
                  resizeMode="cover"
                  source={require("../assets/bg7.png")}
                />
                <View style={styles.textView6}>
                  <Text style={styles.dishNameText6}>
                    Healthy noodle with spinach leaf
                  </Text>
                  <View style={[styles.frameView22, styles.mt8]}>
                    <Text style={styles.text24}>$ 3.29</Text>
                    <Text style={[styles.bowlsAvailableText6, styles.mt4]}>
                      22 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon6}
                  resizeMode="cover"
                  source={require("../assets/images14.png")}
                />
              </View>
              <View style={[styles.contentDishCard7, styles.ml28]}>
                <View style={styles.shadowView7} />
                <Image
                  style={styles.bgIcon7}
                  resizeMode="cover"
                  source={require("../assets/bg7.png")}
                />
                <View style={styles.textView7}>
                  <Text style={styles.dishNameText7}>
                    Hot spicy fried rice with omelet
                  </Text>
                  <View style={[styles.frameView23, styles.mt8]}>
                    <Text style={styles.text25}>$ 3.49</Text>
                    <Text style={[styles.bowlsAvailableText7, styles.mt4]}>
                      13 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon7}
                  resizeMode="cover"
                  source={require("../assets/images15.png")}
                />
              </View>
              <View style={[styles.contentDishCard8, styles.ml28]}>
                <View style={styles.shadowView8} />
                <Image
                  style={styles.bgIcon8}
                  resizeMode="cover"
                  source={require("../assets/bg7.png")}
                />
                <View style={styles.textView8}>
                  <Text style={styles.dishNameText8}>
                    Spicy instant noodle with special omelette
                  </Text>
                  <View style={[styles.frameView24, styles.mt8]}>
                    <Text style={styles.text26}>$ 3.59</Text>
                    <Text style={[styles.bowlsAvailableText8, styles.mt4]}>
                      17 Bowls available
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagesIcon8}
                  resizeMode="cover"
                  source={require("../assets/images16.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sidebarView6}>
        <View style={styles.bgView} />
        <Image
          style={styles.sidebarIcon}
          resizeMode="cover"
          source={require("../assets/sidebar.png")}
        />
        <View style={styles.menuView4}>
          <View style={styles.sidebarView}>
            <Image
              style={styles.patternIcon}
              resizeMode="cover"
              source={require("../assets/pattern8.png")}
            />
            <View style={styles.frameView25}>
              <Image
                style={styles.iconLineHome}
                resizeMode="cover"
                source={require("../assets/icon--line--home3.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView1}>
            <Image
              style={styles.patternIcon1}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView26}>
              <Image
                style={styles.iconLineDiscount}
                resizeMode="cover"
                source={require("../assets/icon--line--discount3.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView2}>
            <Image
              style={styles.patternIcon2}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView27}>
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
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView28}>
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
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView29}>
              <Image
                style={styles.iconLineNotification}
                resizeMode="cover"
                source={require("../assets/icon--line--notification1.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView5}>
            <Image
              style={styles.patternIcon5}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView30}>
              <Image
                style={styles.iconLineSetting}
                resizeMode="cover"
                source={require("../assets/icon--line--setting2.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.logoView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.bxbxsStoreAltIcon}
            resizeMode="cover"
            source={require("../assets/bxbxsstorealt.png")}
          />
        </View>
      </View>
      <View style={styles.contentView7}>
        <View style={styles.overlayView} />
        <View style={styles.popUpView}>
          <View style={styles.backgroundView} />
          <View style={styles.paymentContentView}>
            <View style={styles.buttonsView}>
              <View style={styles.buttonView5}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
              <View style={[styles.buttonView6, styles.ml8]}>
                <Text style={styles.confirmPaymentText1}>Confirm Payment</Text>
              </View>
            </View>
            <View style={styles.paymentMethodView}>
              <Text style={styles.titleText1}>Payment Method</Text>
              <View style={[styles.tabsView, styles.mt16]}>
                <View style={styles.contentView3}>
                  <Image
                    style={styles.iconLineCard}
                    resizeMode="cover"
                    source={require("../assets/icon--line--card1.png")}
                  />
                  <Text style={styles.creditCardText}>Credit Card</Text>
                  <Image
                    style={styles.iconFillcheckmarkCircle}
                    resizeMode="cover"
                    source={require("../assets/iconfillcheckmarkcircle.png")}
                  />
                </View>
                <View style={[styles.contentView4, styles.ml8]}>
                  <Image
                    style={styles.iconLinePaypal}
                    resizeMode="cover"
                    source={require("../assets/icon--line--paypal1.png")}
                  />
                  <Text style={[styles.paypalText, styles.mt2]}>Paypal</Text>
                </View>
                <View style={[styles.contentView5, styles.ml8]}>
                  <Image
                    style={styles.iconLineWallet}
                    resizeMode="cover"
                    source={require("../assets/icon--line--wallet1.png")}
                  />
                  <Text style={[styles.paypalText1, styles.mt2]}>Cash</Text>
                </View>
              </View>
              <View style={[styles.formsView, styles.mt16]}>
                <View style={styles.formView}>
                  <View style={styles.formElementsTextfieldFi}>
                    <Text style={styles.thisIsPlaceholder9}>Levi Ackerman</Text>
                  </View>
                  <Text style={styles.cardholderNameText}>Cardholder Name</Text>
                </View>
                <View style={styles.formView1}>
                  <View style={styles.formElementsTextfieldFi1}>
                    <Text style={styles.thisIsPlaceholder10}>
                      2564 1421 0897 1244
                    </Text>
                  </View>
                  <Text style={styles.cardNumberText}>Card Number</Text>
                </View>
                <View style={styles.frameView31}>
                  <View style={styles.formView2}>
                    <View style={styles.formElementsTextfieldFi2}>
                      <Text style={styles.thisIsPlaceholder11}>02/2022</Text>
                    </View>
                    <Text style={styles.expirationDateText}>
                      Expiration Date
                    </Text>
                  </View>
                  <View style={[styles.formView3, styles.ml13]}>
                    <View style={styles.formElementsTextfieldDe9}>
                      <Text style={styles.thisIsPlaceholder12} />
                    </View>
                    <Image
                      style={styles.ellipseIcon}
                      resizeMode="cover"
                      source={require("../assets/ellipse-49.png")}
                    />
                    <Image
                      style={styles.ellipseIcon1}
                      resizeMode="cover"
                      source={require("../assets/ellipse-49.png")}
                    />
                    <Image
                      style={styles.ellipseIcon2}
                      resizeMode="cover"
                      source={require("../assets/ellipse-49.png")}
                    />
                    <Text style={styles.cVVText}>CVV</Text>
                  </View>
                </View>
              </View>
              <Image
                style={[styles.dividerIcon1, styles.mt16]}
                resizeMode="cover"
                source={require("../assets/divider6.png")}
              />
              <View style={[styles.formView6, styles.mt16]}>
                <View style={styles.formView4}>
                  <View style={styles.formElementsDropdownDef1}>
                    <Image
                      style={styles.iconOutlinearrowIosDown1}
                      resizeMode="cover"
                      source={require("../assets/iconoutlinearrowiosdown2.png")}
                    />
                    <Text style={[styles.dineInText1, styles.ml10]}>
                      Dine In
                    </Text>
                  </View>
                  <Text style={styles.orderTypeText}>Order Type</Text>
                </View>
                <View style={[styles.formView5, styles.ml13]}>
                  <View style={styles.formElementsTextfieldFi3}>
                    <Text style={styles.thisIsPlaceholder13}>140</Text>
                  </View>
                  <Text style={styles.tableNoText}>Table no.</Text>
                </View>
              </View>
            </View>
            <View style={styles.headerView2}>
              <View style={styles.titleView4}>
                <Text style={styles.paymentText}>Payment</Text>
                <Text style={styles.paymentMethodAvailable}>
                  3 payment method available
                </Text>
              </View>
              <Image
                style={[styles.dividerIcon2, styles.mt24]}
                resizeMode="cover"
                source={require("../assets/divider6.png")}
              />
            </View>
          </View>
          <Image
            style={styles.dividerIcon3}
            resizeMode="cover"
            source={require("../assets/divider8.png")}
          />
          <View style={styles.confirmationView1}>
            <Image
              style={styles.iconLineBack}
              resizeMode="cover"
              source={require("../assets/icon--line--back1.png")}
            />
            <View style={[styles.confirmationView, styles.mt16]}>
              <View style={styles.headerView3}>
                <Image
                  style={styles.dividerIcon4}
                  resizeMode="cover"
                  source={require("../assets/divider9.png")}
                />
                <View style={styles.buttonView7}>
                  <Image
                    style={styles.plus24pxIcon}
                    resizeMode="cover"
                    source={require("../assets/plus-24px1.png")}
                  />
                </View>
                <View style={styles.titleView5}>
                  <Text style={styles.confirmationText}>Confirmation</Text>
                  <Text style={styles.orders34562Text}>Orders #34562</Text>
                </View>
              </View>
              <View style={[styles.contentView6, styles.mt24]}>
                <View style={styles.contentItems4}>
                  <View style={styles.nameView4}>
                    <View style={styles.itemsView4}>
                      <View style={styles.itemView16}>
                        <View style={styles.frameView32}>
                          <Text style={styles.healthyNoodleWith4}>
                            Healthy noodle with ...
                          </Text>
                          <Text style={[styles.text27, styles.mt4]}>
                            $ 3.29
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon12}
                          resizeMode="cover"
                          source={require("../assets/image.png")}
                        />
                      </View>
                      <View style={styles.itemView17}>
                        <View style={styles.frameView33}>
                          <Text style={styles.spicyInstantNoodle4}>
                            Spicy instant noodle...
                          </Text>
                          <Text style={[styles.text28, styles.mt4]}>
                            $ 3.49
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon13}
                          resizeMode="cover"
                          source={require("../assets/image1.png")}
                        />
                      </View>
                      <View style={styles.itemView18}>
                        <View style={styles.frameView34}>
                          <Text style={styles.spicySeasonedSea4}>
                            Spicy seasoned sea...
                          </Text>
                          <Text style={[styles.text29, styles.mt4]}>
                            $ 2.29
                          </Text>
                        </View>
                        <Image
                          style={styles.maskGroupIcon4}
                          resizeMode="cover"
                          source={require("../assets/mask-group.png")}
                        />
                      </View>
                      <View style={styles.itemView19}>
                        <View style={styles.frameView35}>
                          <Text style={styles.saltedPastaWithMu4}>
                            Salted pasta with mu...
                          </Text>
                          <Text style={[styles.text30, styles.mt4]}>
                            $ 2.69
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon14}
                          resizeMode="cover"
                          source={require("../assets/image2.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.formElementsTextfieldDe10}>
                      <Text style={styles.thisIsPlaceholder14}>2</Text>
                    </View>
                    <Text style={styles.priceText5}>$ 4,58</Text>
                  </View>
                  <View style={[styles.noteView4, styles.mt10]}>
                    <View style={styles.formElementsTextfieldDe11}>
                      <Text style={styles.thisIsPlaceholder15}>
                        Please, just a little bit spicy only.
                      </Text>
                    </View>
                    <View style={styles.buttonView8}>
                      <Image
                        style={styles.iconLineTrash4}
                        resizeMode="cover"
                        source={require("../assets/icon--line--trash2.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.contentItems5, styles.mt24]}>
                  <View style={styles.nameView5}>
                    <View style={styles.itemsView5}>
                      <View style={styles.itemView20}>
                        <View style={styles.frameView36}>
                          <Text style={styles.healthyNoodleWith5}>
                            Healthy noodle with ...
                          </Text>
                          <Text style={[styles.text31, styles.mt4]}>
                            $ 3.29
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon15}
                          resizeMode="cover"
                          source={require("../assets/image.png")}
                        />
                      </View>
                      <View style={styles.itemView21}>
                        <View style={styles.frameView37}>
                          <Text style={styles.spicyInstantNoodle5}>
                            Spicy instant noodle...
                          </Text>
                          <Text style={[styles.text32, styles.mt4]}>
                            $ 3.49
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon16}
                          resizeMode="cover"
                          source={require("../assets/image1.png")}
                        />
                      </View>
                      <View style={styles.itemView22}>
                        <View style={styles.frameView38}>
                          <Text style={styles.spicySeasonedSea5}>
                            Spicy seasoned sea...
                          </Text>
                          <Text style={[styles.text33, styles.mt4]}>
                            $ 2.29
                          </Text>
                        </View>
                        <Image
                          style={styles.maskGroupIcon5}
                          resizeMode="cover"
                          source={require("../assets/mask-group.png")}
                        />
                      </View>
                      <View style={styles.itemView23}>
                        <View style={styles.frameView39}>
                          <Text style={styles.saltedPastaWithMu5}>
                            Salted pasta with mu...
                          </Text>
                          <Text style={[styles.text34, styles.mt4]}>
                            $ 2.69
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon17}
                          resizeMode="cover"
                          source={require("../assets/image2.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.formElementsTextfieldDe12}>
                      <Text style={styles.thisIsPlaceholder16}>1</Text>
                    </View>
                    <Text style={styles.priceText6}>$ 2.69</Text>
                  </View>
                  <View style={[styles.noteView5, styles.mt10]}>
                    <View style={styles.formElementsTextfieldDe13}>
                      <Text style={styles.thisIsPlaceholder17}>
                        Order Note...
                      </Text>
                    </View>
                    <View style={styles.buttonView9}>
                      <Image
                        style={styles.iconLineTrash5}
                        resizeMode="cover"
                        source={require("../assets/icon--line--trash2.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.contentItems6, styles.mt24]}>
                  <View style={styles.nameView6}>
                    <View style={styles.itemsView6}>
                      <View style={styles.itemView24}>
                        <View style={styles.frameView40}>
                          <Text style={styles.healthyNoodleWith6}>
                            Healthy noodle with ...
                          </Text>
                          <Text style={[styles.text35, styles.mt4]}>
                            $ 3.29
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon18}
                          resizeMode="cover"
                          source={require("../assets/image.png")}
                        />
                      </View>
                      <View style={styles.itemView25}>
                        <View style={styles.frameView41}>
                          <Text style={styles.spicyInstantNoodle6}>
                            Spicy instant noodle...
                          </Text>
                          <Text style={[styles.text36, styles.mt4]}>
                            $ 3.49
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon19}
                          resizeMode="cover"
                          source={require("../assets/image1.png")}
                        />
                      </View>
                      <View style={styles.itemView26}>
                        <View style={styles.frameView42}>
                          <Text style={styles.spicySeasonedSea6}>
                            Spicy seasoned sea...
                          </Text>
                          <Text style={[styles.text37, styles.mt4]}>
                            $ 2.29
                          </Text>
                        </View>
                        <Image
                          style={styles.maskGroupIcon6}
                          resizeMode="cover"
                          source={require("../assets/mask-group.png")}
                        />
                      </View>
                      <View style={styles.itemView27}>
                        <View style={styles.frameView43}>
                          <Text style={styles.saltedPastaWithMu6}>
                            Salted pasta with mu...
                          </Text>
                          <Text style={[styles.text38, styles.mt4]}>
                            $ 2.69
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon20}
                          resizeMode="cover"
                          source={require("../assets/image2.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.formElementsTextfieldDe14}>
                      <Text style={styles.thisIsPlaceholder18}>3</Text>
                    </View>
                    <Text style={styles.priceText7}>$ 10,47</Text>
                  </View>
                  <View style={[styles.noteView6, styles.mt10]}>
                    <View style={styles.formElementsTextfieldDe15}>
                      <Text style={styles.thisIsPlaceholder19}>
                        Order Note...
                      </Text>
                    </View>
                    <View style={styles.buttonView10}>
                      <Image
                        style={styles.iconLineTrash6}
                        resizeMode="cover"
                        source={require("../assets/icon--line--trash2.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.contentItems7, styles.mt24]}>
                  <View style={styles.nameView7}>
                    <View style={styles.itemsView7}>
                      <View style={styles.itemView28}>
                        <View style={styles.frameView44}>
                          <Text style={styles.healthyNoodleWith7}>
                            Healthy noodle with ...
                          </Text>
                          <Text style={[styles.text39, styles.mt4]}>
                            $ 3.29
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon21}
                          resizeMode="cover"
                          source={require("../assets/image.png")}
                        />
                      </View>
                      <View style={styles.itemView29}>
                        <View style={styles.frameView45}>
                          <Text style={styles.spicyInstantNoodle7}>
                            Spicy instant noodle...
                          </Text>
                          <Text style={[styles.text40, styles.mt4]}>
                            $ 3.49
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon22}
                          resizeMode="cover"
                          source={require("../assets/image1.png")}
                        />
                      </View>
                      <View style={styles.itemView30}>
                        <View style={styles.frameView46}>
                          <Text style={styles.spicySeasonedSea7}>
                            Spicy seasoned sea...
                          </Text>
                          <Text style={[styles.text41, styles.mt4]}>
                            $ 2.29
                          </Text>
                        </View>
                        <Image
                          style={styles.maskGroupIcon7}
                          resizeMode="cover"
                          source={require("../assets/mask-group.png")}
                        />
                      </View>
                      <View style={styles.itemView31}>
                        <View style={styles.frameView47}>
                          <Text style={styles.saltedPastaWithMu7}>
                            Salted pasta with mu...
                          </Text>
                          <Text style={[styles.text42, styles.mt4]}>
                            $ 2.69
                          </Text>
                        </View>
                        <Image
                          style={styles.imageIcon23}
                          resizeMode="cover"
                          source={require("../assets/image23.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.formElementsTextfieldDe16}>
                      <Text style={styles.thisIsPlaceholder20}>1</Text>
                    </View>
                    <Text style={styles.priceText8}>$3.29</Text>
                  </View>
                  <View style={[styles.noteView7, styles.mt10]}>
                    <View style={styles.formElementsTextfieldDe17}>
                      <Text style={styles.thisIsPlaceholder21}>
                        Order Note...
                      </Text>
                    </View>
                    <View style={styles.buttonView11}>
                      <Image
                        style={styles.iconLineTrash7}
                        resizeMode="cover"
                        source={require("../assets/icon--line--trash2.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.totalView1, styles.mt24]}>
                <View style={styles.subTotalView1}>
                  <Text style={styles.subTotalText1}>Sub total</Text>
                  <Text style={styles.text43}> $ 21,03</Text>
                </View>
                <View style={styles.subTotalView2}>
                  <Text style={styles.discountText1}>Discount</Text>
                  <Text style={styles.text44}>$0</Text>
                </View>
                <Image
                  style={styles.dividerIcon5}
                  resizeMode="cover"
                  source={require("../assets/divider9.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt4: {
    marginTop: 4,
  },
  mt10: {
    marginTop: 10,
  },
  mt24: {
    marginTop: 24,
  },
  mt16: {
    marginTop: 16,
  },
  mt48: {
    marginTop: 48,
  },
  ml256: {
    marginLeft: 256,
  },
  ml32: {
    marginLeft: 32,
  },
  ml10: {
    marginLeft: 10,
  },
  mt8: {
    marginTop: 8,
  },
  ml28: {
    marginLeft: 28,
  },
  mt2: {
    marginTop: 2,
  },
  ml13: {
    marginLeft: 13,
  },
  itemText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  qtyText: {
    position: "absolute",
    top: 0,
    left: 257,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  priceText: {
    position: "absolute",
    top: 0,
    left: 324,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    top: 110,
    left: 0,
    width: 361,
    height: 22,
  },
  hotDishesText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  tabView: {
    borderRadius: 8,
    backgroundColor: "#ea7c69",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  toGoText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  tabView1: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  toGoText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#ea7c69",
    textAlign: "left",
  },
  tabView2: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  selectorView: {
    position: "absolute",
    top: 52,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  headerView: {
    position: "relative",
    width: 361,
    height: 132,
    flexShrink: 0,
  },
  bottomDividerIcon: {
    position: "absolute",
    top: 453.5,
    left: 0,
    width: 409,
    height: 0.5,
  },
  healthyNoodleWith: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  saltedPastaWithMu: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText1: {
    position: "absolute",
    top: 13,
    left: 318,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldDe1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    paddingLeft: 14,
    paddingTop: 14,
    paddingRight: 96,
    paddingBottom: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView4: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text5: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView5: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text6: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView6: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text7: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView7: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  itemsView1: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe2: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText2: {
    position: "absolute",
    top: 13,
    left: 318,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView1: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  formElementsTextfieldDe3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    paddingLeft: 14,
    paddingTop: 14,
    paddingRight: 213,
    paddingBottom: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView1: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView1: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems1: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text8: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView8: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text9: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView9: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  spicySeasonedSea2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text10: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView10: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text11: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView11: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView2: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe4: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText3: {
    position: "absolute",
    top: 13,
    left: 313,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView2: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  formElementsTextfieldDe5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    paddingLeft: 14,
    paddingTop: 14,
    paddingRight: 213,
    paddingBottom: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView2: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView2: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems2: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text12: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView12: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  spicyInstantNoodle3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text13: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView13: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text14: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView14: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView14: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text15: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView15: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView3: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder6: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe6: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText4: {
    position: "absolute",
    top: 13,
    left: 322,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView3: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView3: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    backgroundColor: "#9288e0",
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView3: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems3: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView: {
    position: "absolute",
    top: 24,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topDividerIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 409,
    height: 0.5,
  },
  contentView1: {
    position: "relative",
    width: 361,
    height: 454,
    flexShrink: 0,
    overflow: "hidden",
  },
  discountText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  text16: {
    position: "absolute",
    top: 1,
    left: 345,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  discountView: {
    position: "relative",
    width: 361,
    height: 20,
    flexShrink: 0,
  },
  subTotalText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  text17: {
    position: "absolute",
    top: 1,
    left: 316,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  subTotalView: {
    position: "relative",
    width: 361,
    height: 20,
    flexShrink: 0,
  },
  totalView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  buttonView4: {
    borderRadius: 8,
    backgroundColor: "#ea7c69",
    shadowColor: "rgba(234, 124, 105, 0.3)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: 361,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  column2View: {
    position: "absolute",
    top: 0,
    left: 785,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dateText: {
    position: "absolute",
    top: 43,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  restoNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  titleView1: {
    position: "relative",
    width: 164,
    height: 65,
    flexShrink: 0,
  },
  iconFillsearch: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  thisIsPlaceholder8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  formElementsTextfieldDe8: {
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerIcon: {
    position: "absolute",
    top: 32.5,
    left: 6,
    width: 627,
    height: 1,
  },
  hotDishesText1: {
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
  vectorIcon: {
    position: "absolute",
    top: 31.5,
    left: -1.5,
    width: 40,
    height: 3,
  },
  activeView: {
    position: "relative",
    width: 66,
    height: 33,
    flexShrink: 0,
  },
  coldDishesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  indicatorIcon: {
    position: "absolute",
    top: 33,
    left: 98,
    width: 37,
    height: 0,
  },
  defaultView: {
    position: "relative",
    width: 72,
    height: 33,
    flexShrink: 0,
  },
  soupText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  indicatorIcon1: {
    position: "absolute",
    top: 33,
    left: 202,
    width: 37,
    height: 0,
  },
  defaultView1: {
    position: "relative",
    width: 37,
    height: 33,
    flexShrink: 0,
  },
  grillText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  indicatorIcon2: {
    position: "absolute",
    top: 33,
    left: 271,
    width: 37,
    height: 0,
  },
  defaultView2: {
    position: "relative",
    width: 37,
    height: 33,
    flexShrink: 0,
  },
  appetizerText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  indicatorIcon3: {
    position: "absolute",
    top: 33,
    left: 340,
    width: 37,
    height: 0,
  },
  defaultView3: {
    position: "relative",
    width: 61,
    height: 33,
    flexShrink: 0,
  },
  dessertText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  indicatorIcon4: {
    position: "absolute",
    top: 33,
    left: 433,
    width: 37,
    height: 0,
  },
  defaultView4: {
    position: "relative",
    width: 48,
    height: 33,
    flexShrink: 0,
  },
  menuView: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuView1: {
    position: "relative",
    width: 633,
    height: 33,
    flexShrink: 0,
  },
  headerView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  chooseDishesText: {
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
  iconOutlinearrowIosDown: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  dineInText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsDropdownDef: {
    position: "absolute",
    top: 0,
    left: 517,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleView3: {
    position: "relative",
    width: 617,
    height: 48,
    flexShrink: 0,
  },
  shadowView: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text18: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView16: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView1: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon1: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text19: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView17: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView1: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon1: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard1: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView2: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon2: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text20: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView18: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView2: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon2: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard2: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  row1View: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  shadowView3: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon3: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text21: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView19: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView3: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon3: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard3: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView4: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon4: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text22: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView20: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView4: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon4: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard4: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView5: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon5: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text23: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView21: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView5: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon5: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard5: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  row2View: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  shadowView6: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon6: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text24: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView22: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView6: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon6: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard6: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView7: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon7: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text25: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView23: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView7: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon7: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard7: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  shadowView8: {
    position: "absolute",
    height: "77.31%",
    width: "100%",
    top: "20.77%",
    right: "0%",
    bottom: "1.92%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "rgba(136, 152, 152, 0.16)",
    display: "none",
  },
  bgIcon8: {
    position: "absolute",
    height: "86.92%",
    width: "100%",
    top: "13.08%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dishNameText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
    width: 144,
  },
  text26: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "center",
  },
  bowlsAvailableText8: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "center",
  },
  frameView24: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textView8: {
    position: "absolute",
    height: "33.85%",
    width: "75%",
    top: "56.92%",
    right: "12.5%",
    bottom: "9.23%",
    left: "12.5%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imagesIcon8: {
    position: "absolute",
    height: "50.77%",
    width: "68.75%",
    top: "0%",
    right: "15.63%",
    bottom: "49.23%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contentDishCard8: {
    position: "relative",
    width: 192,
    height: 260,
    flexShrink: 0,
  },
  row3View: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  column1View: {
    position: "absolute",
    top: 24,
    left: 128,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bgView: {
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
  frameView25: {
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
  iconLineDiscount: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView26: {
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
  frameView27: {
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
  frameView28: {
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
  iconLineNotification: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView29: {
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
  frameView30: {
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
  sidebarView5: {
    position: "relative",
    borderRadius: 10,
    width: 92,
    height: 102,
    flexShrink: 0,
  },
  menuView4: {
    position: "absolute",
    top: 96,
    left: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
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
  overlayView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 1194,
    height: 834,
  },
  backgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#1f1d2b",
    width: 814,
    height: 834,
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
  buttonView5: {
    borderRadius: 8,
    width: 175,
    flexShrink: 0,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmPaymentText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fafafa",
    textAlign: "left",
  },
  buttonView6: {
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
    width: 175,
    flexShrink: 0,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsView: {
    position: "absolute",
    top: 698,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  titleText1: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  iconLineCard: {
    position: "absolute",
    top: 10,
    left: 38.5,
    width: 24,
    height: 24,
  },
  creditCardText: {
    position: "absolute",
    top: 36,
    left: 16,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  iconFillcheckmarkCircle: {
    position: "absolute",
    top: 6,
    left: 79,
    width: 16,
    height: 16,
  },
  contentView3: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#252836",
    width: 101,
    height: 64,
    flexShrink: 0,
  },
  iconLinePaypal: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  paypalText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView4: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    width: 101,
    height: 64,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLineWallet: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  paypalText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView5: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    width: 101,
    height: 64,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  tabsView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  thisIsPlaceholder9: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldFi: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 357,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardholderNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 357,
    height: 74,
  },
  thisIsPlaceholder10: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldFi1: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 357,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardNumberText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView1: {
    position: "absolute",
    top: 90,
    left: 0,
    width: 357,
    height: 74,
  },
  thisIsPlaceholder11: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldFi2: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 172,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  expirationDateText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView2: {
    position: "relative",
    width: 172,
    height: 74,
    flexShrink: 0,
  },
  thisIsPlaceholder12: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  formElementsTextfieldDe9: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 172,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "absolute",
    top: 45,
    left: 19,
    width: 10,
    height: 10,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 45,
    left: 37,
    width: 10,
    height: 10,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 45,
    left: 55,
    width: 10,
    height: 10,
  },
  cVVText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView3: {
    position: "relative",
    width: 172,
    height: 74,
    flexShrink: 0,
  },
  frameView31: {
    position: "absolute",
    top: 188,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  formsView: {
    position: "relative",
    width: 357,
    height: 262,
    flexShrink: 0,
  },
  dividerIcon1: {
    position: "relative",
    width: 357,
    height: 1,
    flexShrink: 0,
  },
  iconOutlinearrowIosDown1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  dineInText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsDropdownDef1: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 172,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  orderTypeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView4: {
    position: "relative",
    width: 172,
    height: 74,
    flexShrink: 0,
  },
  thisIsPlaceholder13: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldFi3: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 172,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tableNoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formView5: {
    position: "relative",
    width: 172,
    height: 74,
    flexShrink: 0,
  },
  formView6: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentMethodView: {
    position: "absolute",
    top: 117,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  paymentMethodAvailable: {
    position: "absolute",
    top: 47,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  titleView4: {
    position: "relative",
    width: 194,
    height: 69,
    flexShrink: 0,
  },
  dividerIcon2: {
    position: "relative",
    width: 357,
    height: 1,
    flexShrink: 0,
  },
  headerView2: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentContentView: {
    position: "absolute",
    top: 64,
    left: 433,
    width: 358,
    height: 746,
  },
  dividerIcon3: {
    position: "absolute",
    top: 1,
    left: 408.5,
    width: 1,
    height: 834,
  },
  iconLineBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  dividerIcon4: {
    position: "absolute",
    top: 92.5,
    left: 0,
    width: 361,
    height: 1,
  },
  plus24pxIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  buttonView7: {
    position: "absolute",
    top: 9,
    left: 313,
    borderRadius: 8,
    backgroundColor: "#ea7c69",
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  confirmationText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  orders34562Text: {
    position: "absolute",
    top: 47,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  titleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 163,
    height: 69,
  },
  headerView3: {
    position: "relative",
    width: 361,
    height: 93,
    flexShrink: 0,
  },
  healthyNoodleWith4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text27: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView32: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView16: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text28: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView33: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text29: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView34: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  saltedPastaWithMu4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text30: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView35: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon14: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView4: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder14: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe10: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText5: {
    position: "absolute",
    top: 13,
    left: 318,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView4: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder15: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  formElementsTextfieldDe11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash4: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView8: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView4: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems4: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text31: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView36: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text32: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView37: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon16: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView21: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text33: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView38: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView22: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu5: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text34: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView39: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView23: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  itemsView5: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder16: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe12: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText6: {
    position: "absolute",
    top: 13,
    left: 318,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView5: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder17: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  formElementsTextfieldDe13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash5: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView9: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView5: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems5: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text35: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView40: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView24: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicyInstantNoodle6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text36: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView41: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView25: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  spicySeasonedSea6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text37: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView42: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView26: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu6: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text38: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView43: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView27: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView6: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder18: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe14: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText7: {
    position: "absolute",
    top: 13,
    left: 313,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView6: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder19: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  formElementsTextfieldDe15: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash6: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView10: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView6: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems6: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  healthyNoodleWith7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
    width: 140,
  },
  text39: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView44: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon21: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView28: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
  },
  spicyInstantNoodle7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text40: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView45: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon22: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView29: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  spicySeasonedSea7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text41: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView46: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maskGroupIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView30: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  saltedPastaWithMu7: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
    width: 140,
  },
  text42: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  frameView47: {
    position: "absolute",
    top: 0,
    left: 48,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon23: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
  },
  itemView31: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 188,
    height: 40,
    display: "none",
  },
  itemsView7: {
    position: "absolute",
    top: 4,
    left: 0,
    width: 188,
    height: 40,
  },
  thisIsPlaceholder20: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsTextfieldDe16: {
    position: "absolute",
    top: 0,
    left: 249,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 48,
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText8: {
    position: "absolute",
    top: 13,
    left: 322,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  nameView7: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  thisIsPlaceholder21: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#889898",
    textAlign: "left",
  },
  formElementsTextfieldDe17: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#2d303e",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    width: 297,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineTrash7: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  buttonView11: {
    position: "absolute",
    top: 0,
    left: 313,
    borderRadius: 8,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  noteView7: {
    position: "relative",
    width: 361,
    height: 48,
    flexShrink: 0,
  },
  contentItems7: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  subTotalText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  text43: {
    position: "absolute",
    top: 1,
    left: 316,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  subTotalView1: {
    position: "absolute",
    top: 60,
    left: 0,
    width: 361,
    height: 20,
  },
  discountText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  text44: {
    position: "absolute",
    top: 1,
    left: 345,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  subTotalView2: {
    position: "absolute",
    top: 24,
    left: 0,
    width: 361,
    height: 20,
  },
  dividerIcon5: {
    position: "absolute",
    top: -0.5,
    left: 0,
    width: 361,
    height: 1,
  },
  totalView1: {
    position: "relative",
    width: 361,
    height: 80,
    flexShrink: 0,
  },
  confirmationView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  confirmationView1: {
    position: "absolute",
    top: 24,
    left: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  popUpView: {
    position: "absolute",
    top: 0,
    left: 380,
    width: 814,
    height: 835,
  },
  contentView7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1194,
    height: 835,
  },
  popUpDarkVersion: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#252836",
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default PopUpDarkVersion;
