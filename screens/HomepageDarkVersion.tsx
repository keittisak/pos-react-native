import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HomepageDarkVersion = () => {
  return (
    <View style={styles.homepageDarkVersionView}>
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
                        source={require("../assets/image25.png")}
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
                        source={require("../assets/image25.png")}
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
                        source={require("../assets/image25.png")}
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
                        source={require("../assets/image34.png")}
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
        <View style={[styles.buttonView4, styles.mt42]}>
          <Text style={styles.confirmPaymentText}>Continue to Payment</Text>
        </View>
      </View>
      <View style={styles.column1View}>
        <View style={styles.headerView1}>
          <View style={styles.titleView2}>
            <View style={styles.titleView1}>
              <Text style={styles.dateText}>Tuesday, 2 Feb 2021</Text>
              <Text style={styles.restoNameText}>Jaegar Resto</Text>
            </View>
            <View style={[styles.formElementsTextfieldDe8, styles.ml249]}>
              <Image
                style={styles.iconFillsearch}
                resizeMode="cover"
                source={require("../assets/iconfillsearch.png")}
              />
              <Text style={[styles.thisIsPlaceholder8, styles.ml8]}>
                Search for food, coffe, etc..
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
          source={require("../assets/sidebar3.png")}
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
                source={require("../assets/icon--line--discount1.png")}
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
  mt42: {
    marginTop: 42,
  },
  ml249: {
    marginLeft: 249,
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
    backgroundColor: "#1f1d2b",
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
    backgroundColor: "#1f1d2b",
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
    left: 342,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  discountView: {
    position: "relative",
    width: 361,
    height: 23,
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
    left: 310,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "right",
  },
  subTotalView: {
    position: "relative",
    width: 361,
    height: 23,
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
    left: 532,
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
    width: 632,
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
  homepageDarkVersionView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#252836",
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default HomepageDarkVersion;
