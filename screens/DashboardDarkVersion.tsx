import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const DashboardDarkVersion = () => {
  return (
    <View style={styles.dashboardDarkVersionView}>
      <View style={styles.column2View}>
        <View style={styles.mostOrderedView}>
          <View style={styles.headerView}>
            <Text style={styles.mostOrderedText}>Most Ordered</Text>
            <View style={[styles.formElementsDropdownDef, styles.ml111]}>
              <Image
                style={styles.iconOutlinearrowIosDown}
                resizeMode="cover"
                source={require("../assets/iconoutlinearrowiosdown.png")}
              />
              <Text style={[styles.dineInText, styles.ml10]}>Today</Text>
            </View>
          </View>
          <Image
            style={[styles.dividerIcon, styles.mt20]}
            resizeMode="cover"
            source={require("../assets/divider1.png")}
          />
          <View style={[styles.contentView, styles.mt20]}>
            <View style={styles.menuView}>
              <View style={styles.contentMostOrdered}>
                <Image
                  style={styles.imagesIcon}
                  resizeMode="cover"
                  source={require("../assets/images5.png")}
                />
                <View style={[styles.textView, styles.ml16]}>
                  <Text style={styles.spicySeasonedSeafoodNoodles}>
                    Spicy seasoned seafood noodles
                  </Text>
                  <Text style={[styles.dishesOrderedText, styles.mt4]}>
                    200 dishes ordered
                  </Text>
                </View>
              </View>
              <View style={[styles.contentMostOrdered1, styles.mt24]}>
                <Image
                  style={styles.imagesIcon1}
                  resizeMode="cover"
                  source={require("../assets/images6.png")}
                />
                <View style={[styles.textView1, styles.ml16]}>
                  <Text style={styles.spicySeasonedSeafoodNoodles1}>
                    Salted pasta with mushroom sauce
                  </Text>
                  <Text style={[styles.dishesOrderedText1, styles.mt4]}>
                    120 dishes ordered
                  </Text>
                </View>
              </View>
              <View style={[styles.contentMostOrdered2, styles.mt24]}>
                <Image
                  style={styles.imagesIcon2}
                  resizeMode="cover"
                  source={require("../assets/images7.png")}
                />
                <View style={[styles.textView2, styles.ml16]}>
                  <Text style={styles.spicySeasonedSeafoodNoodles2}>
                    Beef dumpling in hot and sour soup
                  </Text>
                  <Text style={[styles.dishesOrderedText2, styles.mt4]}>
                    80 dishes ordered
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.buttonView, styles.mt32]}>
              <Text style={styles.cancelText}>View All</Text>
            </View>
          </View>
        </View>
        <View style={[styles.mosTypeOfOrder, styles.mt24]}>
          <View style={styles.headerView1}>
            <Image
              style={styles.dividerIcon1}
              resizeMode="cover"
              source={require("../assets/divider2.png")}
            />
            <View style={styles.titleView}>
              <Text style={styles.mostTypeOfOrder}>Most Type of Order</Text>
              <View style={[styles.formElementsDropdownDef1, styles.ml64]}>
                <Image
                  style={styles.iconOutlinearrowIosDown1}
                  resizeMode="cover"
                  source={require("../assets/iconoutlinearrowiosdown1.png")}
                />
                <Text style={[styles.dineInText1, styles.ml10]}>Today</Text>
              </View>
            </View>
          </View>
          <View style={[styles.chartView, styles.mt32]}>
            <Image
              style={styles.circleIcon}
              resizeMode="cover"
              source={require("../assets/circle.png")}
            />
            <View style={styles.infoView}>
              <View style={styles.groupView}>
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/ellipse-54.png")}
                />
                <View style={styles.frameView}>
                  <Text style={styles.dineInText2}>Dine In</Text>
                  <Text style={[styles.customersText, styles.mt2]}>
                    200 customers
                  </Text>
                </View>
              </View>
              <View style={[styles.groupView1, styles.mt16]}>
                <Image
                  style={styles.ellipseIcon1}
                  resizeMode="cover"
                  source={require("../assets/ellipse-541.png")}
                />
                <View style={styles.frameView1}>
                  <Text style={styles.toGoText}>To Go</Text>
                  <Text style={[styles.customersText1, styles.mt2]}>
                    122 customers
                  </Text>
                </View>
              </View>
              <View style={[styles.groupView2, styles.mt16]}>
                <Image
                  style={styles.ellipseIcon2}
                  resizeMode="cover"
                  source={require("../assets/ellipse-542.png")}
                />
                <View style={styles.frameView2}>
                  <Text style={styles.deliveryText}>Delivery</Text>
                  <Text style={[styles.customersText2, styles.mt2]}>
                    264 customers
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.column1View}>
        <View style={styles.headerView2}>
          <View style={styles.titleView1}>
            <Text style={styles.dashboardText}>Dashboard</Text>
            <Text style={styles.tuesday2Feb2021}>Tuesday 2 Feb, 2021</Text>
          </View>
          <Image
            style={[styles.dividerIcon2, styles.mt24]}
            resizeMode="cover"
            source={require("../assets/divider3.png")}
          />
        </View>
        <View style={[styles.orderCardView, styles.mt24]}>
          <View style={styles.contentSummaryCard}>
            <View style={styles.headerView3}>
              <View style={styles.iconView}>
                <Image
                  style={styles.iconLineCoin}
                  resizeMode="cover"
                  source={require("../assets/icon--line--coin1.png")}
                />
              </View>
              <View style={[styles.statusView, styles.ml12]}>
                <Text style={styles.text}>+32.40%</Text>
                <View style={[styles.frameView3, styles.ml6]}>
                  <Image
                    style={styles.iconLineArrowUp}
                    resizeMode="cover"
                    source={require("../assets/icon--line--arrow--up1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.contentView1, styles.mt8]}>
              <Text style={styles.text1}>$10,243.00</Text>
              <Text style={[styles.totalRevenueText, styles.mt8]}>
                Total Revenue
              </Text>
            </View>
          </View>
          <View style={[styles.contentSummaryCard1, styles.ml24]}>
            <View style={styles.headerView4}>
              <View style={styles.iconView1}>
                <Image
                  style={styles.iconLineOrder}
                  resizeMode="cover"
                  source={require("../assets/icon--line--order1.png")}
                />
              </View>
              <View style={[styles.statusView1, styles.ml12]}>
                <Text style={styles.text2}>-12.40%</Text>
                <View style={[styles.frameView4, styles.ml6]}>
                  <Image
                    style={styles.iconLineArrowDown}
                    resizeMode="cover"
                    source={require("../assets/icon--line--arrow--down1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.contentView2, styles.mt8]}>
              <Text style={styles.text3}>23,456</Text>
              <Text style={[styles.totalRevenueText1, styles.mt8]}>
                Total Dish Ordered
              </Text>
            </View>
          </View>
          <View style={[styles.contentSummaryCard2, styles.ml24]}>
            <View style={styles.headerView5}>
              <View style={styles.iconView2}>
                <Image
                  style={styles.iconLineCustomer}
                  resizeMode="cover"
                  source={require("../assets/icon--line--customer1.png")}
                />
              </View>
              <View style={[styles.statusView2, styles.ml12]}>
                <Text style={styles.text4}>+2.40%</Text>
                <View style={[styles.frameView5, styles.ml6]}>
                  <Image
                    style={styles.iconLineArrowUp1}
                    resizeMode="cover"
                    source={require("../assets/icon--line--arrow--up1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.contentView3, styles.mt8]}>
              <Text style={styles.text5}>1,234</Text>
              <Text style={[styles.totalRevenueText2, styles.mt8]}>
                Total Customer
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.orderReportView, styles.mt24]}>
          <View style={styles.headerView7}>
            <View style={styles.headingView}>
              <Image
                style={styles.dividerIcon3}
                resizeMode="cover"
                source={require("../assets/divider3.png")}
              />
              <View style={styles.headerView6}>
                <Text style={styles.customerText}>Customer</Text>
                <Text style={styles.menuText}>Menu</Text>
                <Text style={styles.totalPaymentText}>Total Payment</Text>
                <Text style={styles.statusText}>Status</Text>
              </View>
            </View>
            <View style={styles.titleView2}>
              <Text style={styles.orderReportText}>Order Report</Text>
              <View style={styles.formElementsDropdownDef2}>
                <Image
                  style={styles.iconLineOption}
                  resizeMode="cover"
                  source={require("../assets/icon--line--option2.png")}
                />
                <Text style={[styles.dineInText3, styles.ml10]}>
                  Filter Order
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.rowsView1, styles.mt16]}>
            <View style={styles.rowsView}>
              <View style={styles.row3View}>
                <View style={styles.contentView5}>
                  <View style={styles.namesView}>
                    <View style={styles.name8View}>
                      <Text style={styles.hanjiZoeText}>Hanji Zoe</Text>
                      <View style={styles.avatar1View}>
                        <Image
                          style={styles.ellipseIcon3}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit}>
                          <Image
                            style={styles.icon}
                            resizeMode="cover"
                            source={require("../assets/58-1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View}>
                      <Text style={styles.historiaReissText}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View1}>
                        <Image
                          style={styles.ellipseIcon4}
                          resizeMode="cover"
                          source={require("../assets/ellipse-531.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit1}>
                          <Image
                            style={styles.icon1}
                            resizeMode="cover"
                            source={require("../assets/29-17.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View}>
                      <Text style={styles.annieLeonhartText}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View2}>
                        <Image
                          style={styles.ellipseIcon5}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit2}>
                          <Image
                            style={styles.icon2}
                            resizeMode="cover"
                            source={require("../assets/29-15.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View}>
                      <Text style={styles.mikasaAckermanText}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View3}>
                        <Image
                          style={styles.ellipseIcon6}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit3}>
                          <Image
                            style={styles.icon3}
                            resizeMode="cover"
                            source={require("../assets/29-13.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View}>
                      <Text style={styles.leviAckermanText}>Levi Ackerman</Text>
                      <View style={styles.avatar1View4}>
                        <Image
                          style={styles.ellipseIcon7}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit4}>
                          <Image
                            style={styles.icon4}
                            resizeMode="cover"
                            source={require("../assets/30-10.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View}>
                      <Text style={styles.arminArlertText}>Armin Arlert</Text>
                      <View style={styles.avatar1View5}>
                        <Image
                          style={styles.ellipseIcon8}
                          resizeMode="cover"
                          source={require("../assets/ellipse-535.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite}>
                          <Image
                            style={styles.icon5}
                            resizeMode="cover"
                            source={require("../assets/30-101.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View}>
                      <Text style={styles.reinerBraunnText}>Reiner Braunn</Text>
                      <View style={styles.avatar1View6}>
                        <Image
                          style={styles.ellipseIcon9}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo}>
                          <Image
                            style={styles.icon6}
                            resizeMode="cover"
                            source={require("../assets/58-11.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView}>
                      <Text style={styles.erenJaegarText}>Eren Jaegar</Text>
                      <View style={styles.avatar1View7}>
                        <Image
                          style={styles.ellipseIcon10}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <Image
                          style={styles.icon7}
                          resizeMode="cover"
                          source={require("../assets/56-11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text
                    style={styles.spicySeasonedSeafoodNoodles3}
                  >{`Spicy seasoned seafood noodles `}</Text>
                  <Text style={styles.text6}>$125</Text>
                  <View style={styles.contentView4}>
                    <Text style={styles.completedText}>Completed</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row2View, styles.mt2]}>
                <View style={styles.contentView7}>
                  <View style={styles.namesView1}>
                    <View style={styles.name8View1}>
                      <Text style={styles.hanjiZoeText1}>Hanji Zoe</Text>
                      <View style={styles.avatar1View8}>
                        <Image
                          style={styles.ellipseIcon11}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit5}>
                          <Image
                            style={styles.icon8}
                            resizeMode="cover"
                            source={require("../assets/58-1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View1}>
                      <Text style={styles.historiaReissText1}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View9}>
                        <Image
                          style={styles.ellipseIcon12}
                          resizeMode="cover"
                          source={require("../assets/ellipse-531.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit6}>
                          <Image
                            style={styles.icon9}
                            resizeMode="cover"
                            source={require("../assets/29-17.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View1}>
                      <Text style={styles.annieLeonhartText1}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View10}>
                        <Image
                          style={styles.ellipseIcon13}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit7}>
                          <Image
                            style={styles.icon10}
                            resizeMode="cover"
                            source={require("../assets/29-15.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View1}>
                      <Text style={styles.mikasaAckermanText1}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View11}>
                        <Image
                          style={styles.ellipseIcon14}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit8}>
                          <Image
                            style={styles.icon11}
                            resizeMode="cover"
                            source={require("../assets/29-13.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View1}>
                      <Text style={styles.leviAckermanText1}>
                        Levi Ackerman
                      </Text>
                      <View style={styles.avatar1View12}>
                        <Image
                          style={styles.ellipseIcon15}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit9}>
                          <Image
                            style={styles.icon12}
                            resizeMode="cover"
                            source={require("../assets/30-10.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View1}>
                      <Text style={styles.arminArlertText1}>Armin Arlert</Text>
                      <View style={styles.avatar1View13}>
                        <Image
                          style={styles.ellipseIcon16}
                          resizeMode="cover"
                          source={require("../assets/ellipse-535.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite1}>
                          <Image
                            style={styles.icon13}
                            resizeMode="cover"
                            source={require("../assets/30-101.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View1}>
                      <Text style={styles.reinerBraunnText1}>
                        Reiner Braunn
                      </Text>
                      <View style={styles.avatar1View14}>
                        <Image
                          style={styles.ellipseIcon17}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo1}>
                          <Image
                            style={styles.icon14}
                            resizeMode="cover"
                            source={require("../assets/58-11.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView1}>
                      <Text style={styles.erenJaegarText1}>Eren Jaegar</Text>
                      <View style={styles.avatar1View15}>
                        <Image
                          style={styles.ellipseIcon18}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <Image
                          style={styles.icon15}
                          resizeMode="cover"
                          source={require("../assets/56-11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.spicySeasonedSeafoodNoodles4}>
                    Salted Pasta with mushroom sauce
                  </Text>
                  <Text style={styles.text7}>$145</Text>
                  <View style={styles.contentView6}>
                    <Text style={styles.preparingText}>Preparing</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row4View, styles.mt2]}>
                <View style={styles.contentView9}>
                  <View style={styles.namesView2}>
                    <View style={styles.name8View2}>
                      <Text style={styles.hanjiZoeText2}>Hanji Zoe</Text>
                      <View style={styles.avatar1View16}>
                        <Image
                          style={styles.ellipseIcon19}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit10}>
                          <Image
                            style={styles.icon16}
                            resizeMode="cover"
                            source={require("../assets/58-1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View2}>
                      <Text style={styles.historiaReissText2}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View17}>
                        <Image
                          style={styles.ellipseIcon20}
                          resizeMode="cover"
                          source={require("../assets/ellipse-531.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit11}>
                          <Image
                            style={styles.icon17}
                            resizeMode="cover"
                            source={require("../assets/29-17.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View2}>
                      <Text style={styles.annieLeonhartText2}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View18}>
                        <Image
                          style={styles.ellipseIcon21}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit12}>
                          <Image
                            style={styles.icon18}
                            resizeMode="cover"
                            source={require("../assets/29-15.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View2}>
                      <Text style={styles.mikasaAckermanText2}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View19}>
                        <Image
                          style={styles.ellipseIcon22}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit13}>
                          <Image
                            style={styles.icon19}
                            resizeMode="cover"
                            source={require("../assets/29-13.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View2}>
                      <Text style={styles.leviAckermanText2}>
                        Levi Ackerman
                      </Text>
                      <View style={styles.avatar1View20}>
                        <Image
                          style={styles.ellipseIcon23}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit14}>
                          <Image
                            style={styles.icon20}
                            resizeMode="cover"
                            source={require("../assets/30-10.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View2}>
                      <Text style={styles.arminArlertText2}>Armin Arlert</Text>
                      <View style={styles.avatar1View21}>
                        <Image
                          style={styles.ellipseIcon24}
                          resizeMode="cover"
                          source={require("../assets/ellipse-535.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite2}>
                          <Image
                            style={styles.icon21}
                            resizeMode="cover"
                            source={require("../assets/30-101.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View2}>
                      <Text style={styles.reinerBraunnText2}>
                        Reiner Braunn
                      </Text>
                      <View style={styles.avatar1View22}>
                        <Image
                          style={styles.ellipseIcon25}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo2}>
                          <Image
                            style={styles.icon22}
                            resizeMode="cover"
                            source={require("../assets/58-11.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView2}>
                      <Text style={styles.erenJaegarText2}>Eren Jaegar</Text>
                      <View style={styles.avatar1View23}>
                        <Image
                          style={styles.ellipseIcon26}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <Image
                          style={styles.icon23}
                          resizeMode="cover"
                          source={require("../assets/56-11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.spicySeasonedSeafoodNoodles5}>
                    Beef dumpling in hot and sour soup
                  </Text>
                  <Text style={styles.text8}>$105</Text>
                  <View style={styles.contentView8}>
                    <Text style={styles.preparingText1}>Pending</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row5View, styles.mt2]}>
                <View style={styles.contentView11}>
                  <View style={styles.namesView3}>
                    <View style={styles.name8View3}>
                      <Text style={styles.hanjiZoeText3}>Hanji Zoe</Text>
                      <View style={styles.avatar1View24}>
                        <Image
                          style={styles.ellipseIcon27}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit15}>
                          <Image
                            style={styles.icon24}
                            resizeMode="cover"
                            source={require("../assets/58-1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View3}>
                      <Text style={styles.historiaReissText3}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View25}>
                        <Image
                          style={styles.ellipseIcon28}
                          resizeMode="cover"
                          source={require("../assets/ellipse-531.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit16}>
                          <Image
                            style={styles.icon25}
                            resizeMode="cover"
                            source={require("../assets/29-17.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View3}>
                      <Text style={styles.annieLeonhartText3}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View26}>
                        <Image
                          style={styles.ellipseIcon29}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit17}>
                          <Image
                            style={styles.icon26}
                            resizeMode="cover"
                            source={require("../assets/29-15.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View3}>
                      <Text style={styles.mikasaAckermanText3}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View27}>
                        <Image
                          style={styles.ellipseIcon30}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit18}>
                          <Image
                            style={styles.icon27}
                            resizeMode="cover"
                            source={require("../assets/29-13.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View3}>
                      <Text style={styles.leviAckermanText3}>
                        Levi Ackerman
                      </Text>
                      <View style={styles.avatar1View28}>
                        <Image
                          style={styles.ellipseIcon31}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit19}>
                          <Image
                            style={styles.icon28}
                            resizeMode="cover"
                            source={require("../assets/30-10.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View3}>
                      <Text style={styles.arminArlertText3}>Armin Arlert</Text>
                      <View style={styles.avatar1View29}>
                        <Image
                          style={styles.ellipseIcon32}
                          resizeMode="cover"
                          source={require("../assets/ellipse-535.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite3}>
                          <Image
                            style={styles.icon29}
                            resizeMode="cover"
                            source={require("../assets/30-101.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View3}>
                      <Text style={styles.reinerBraunnText3}>
                        Reiner Braunn
                      </Text>
                      <View style={styles.avatar1View30}>
                        <Image
                          style={styles.ellipseIcon33}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo3}>
                          <Image
                            style={styles.icon30}
                            resizeMode="cover"
                            source={require("../assets/58-11.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView3}>
                      <Text style={styles.erenJaegarText3}>Eren Jaegar</Text>
                      <View style={styles.avatar1View31}>
                        <Image
                          style={styles.ellipseIcon34}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <Image
                          style={styles.icon31}
                          resizeMode="cover"
                          source={require("../assets/56-11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.spicySeasonedSeafoodNoodles6}>
                    Hot spicy fried rice with omelet
                  </Text>
                  <Text style={styles.text9}>$45</Text>
                  <View style={styles.contentView10}>
                    <Text style={styles.completedText1}>Completed</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row6View, styles.mt2]}>
                <View style={styles.contentView13}>
                  <View style={styles.namesView4}>
                    <View style={styles.name8View4}>
                      <Text style={styles.hanjiZoeText4}>Hanji Zoe</Text>
                      <View style={styles.avatar1View32}>
                        <Image
                          style={styles.ellipseIcon35}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit20}>
                          <Image
                            style={styles.icon32}
                            resizeMode="cover"
                            source={require("../assets/58-1.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View4}>
                      <Text style={styles.historiaReissText4}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View33}>
                        <Image
                          style={styles.ellipseIcon36}
                          resizeMode="cover"
                          source={require("../assets/ellipse-531.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit21}>
                          <Image
                            style={styles.icon33}
                            resizeMode="cover"
                            source={require("../assets/29-17.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View4}>
                      <Text style={styles.annieLeonhartText4}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View34}>
                        <Image
                          style={styles.ellipseIcon37}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit22}>
                          <Image
                            style={styles.icon34}
                            resizeMode="cover"
                            source={require("../assets/29-15.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View4}>
                      <Text style={styles.mikasaAckermanText4}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View35}>
                        <Image
                          style={styles.ellipseIcon38}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit23}>
                          <Image
                            style={styles.icon35}
                            resizeMode="cover"
                            source={require("../assets/29-13.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View4}>
                      <Text style={styles.leviAckermanText4}>
                        Levi Ackerman
                      </Text>
                      <View style={styles.avatar1View36}>
                        <Image
                          style={styles.ellipseIcon39}
                          resizeMode="cover"
                          source={require("../assets/ellipse-532.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit24}>
                          <Image
                            style={styles.icon36}
                            resizeMode="cover"
                            source={require("../assets/30-10.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View4}>
                      <Text style={styles.arminArlertText4}>Armin Arlert</Text>
                      <View style={styles.avatar1View37}>
                        <Image
                          style={styles.ellipseIcon40}
                          resizeMode="cover"
                          source={require("../assets/ellipse-535.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite4}>
                          <Image
                            style={styles.icon37}
                            resizeMode="cover"
                            source={require("../assets/30-101.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View4}>
                      <Text style={styles.reinerBraunnText4}>
                        Reiner Braunn
                      </Text>
                      <View style={styles.avatar1View38}>
                        <Image
                          style={styles.ellipseIcon41}
                          resizeMode="cover"
                          source={require("../assets/ellipse-53.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo4}>
                          <Image
                            style={styles.icon38}
                            resizeMode="cover"
                            source={require("../assets/58-11.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView4}>
                      <Text style={styles.erenJaegarText4}>Eren Jaegar</Text>
                      <View style={styles.avatar1View39}>
                        <Image
                          style={styles.ellipseIcon42}
                          resizeMode="cover"
                          source={require("../assets/ellipse-533.png")}
                        />
                        <Image
                          style={styles.icon39}
                          resizeMode="cover"
                          source={require("../assets/56-11.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.spicySeasonedSeafoodNoodles7}>
                    Hot spicy fried rice with omelet
                  </Text>
                  <Text style={styles.text10}>$245</Text>
                  <View style={styles.contentView12}>
                    <Text style={styles.completedText2}>Completed</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.row7View, styles.mt2]}>
                <View style={styles.contentView15}>
                  <View style={styles.namesView5}>
                    <View style={styles.name8View5}>
                      <Text style={styles.hanjiZoeText5}>Hanji Zoe</Text>
                      <View style={styles.avatar1View40}>
                        <Image
                          style={styles.ellipseIcon43}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5340.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit25}>
                          <Image
                            style={styles.icon40}
                            resizeMode="cover"
                            source={require("../assets/58-16.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name7View5}>
                      <Text style={styles.historiaReissText5}>
                        Historia Reiss
                      </Text>
                      <View style={styles.avatar1View41}>
                        <Image
                          style={styles.ellipseIcon44}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5341.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit26}>
                          <Image
                            style={styles.icon41}
                            resizeMode="cover"
                            source={require("../assets/29-175.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name6View5}>
                      <Text style={styles.annieLeonhartText5}>
                        Annie Leonhart
                      </Text>
                      <View style={styles.avatar1View42}>
                        <Image
                          style={styles.ellipseIcon45}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5342.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit27}>
                          <Image
                            style={styles.icon42}
                            resizeMode="cover"
                            source={require("../assets/29-155.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name5View5}>
                      <Text style={styles.mikasaAckermanText5}>
                        Mikasa Ackerman
                      </Text>
                      <View style={styles.avatar1View43}>
                        <Image
                          style={styles.ellipseIcon46}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5343.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit28}>
                          <Image
                            style={styles.icon43}
                            resizeMode="cover"
                            source={require("../assets/29-135.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name4View5}>
                      <Text style={styles.leviAckermanText5}>
                        Levi Ackerman
                      </Text>
                      <View style={styles.avatar1View44}>
                        <Image
                          style={styles.ellipseIcon47}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5342.png")}
                        />
                        <View style={styles.personFrancisSkinToneWhit29}>
                          <Image
                            style={styles.icon44}
                            resizeMode="cover"
                            source={require("../assets/30-1010.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name3View5}>
                      <Text style={styles.arminArlertText5}>Armin Arlert</Text>
                      <View style={styles.avatar1View45}>
                        <Image
                          style={styles.ellipseIcon48}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5345.png")}
                        />
                        <View style={styles.personJustinSkinToneWhite5}>
                          <Image
                            style={styles.icon45}
                            resizeMode="cover"
                            source={require("../assets/30-1011.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.name2View5}>
                      <Text style={styles.reinerBraunnText5}>
                        Reiner Braunn
                      </Text>
                      <View style={styles.avatar1View46}>
                        <Image
                          style={styles.ellipseIcon49}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5340.png")}
                        />
                        <View style={styles.personEdSkinToneWhitePo5}>
                          <Image
                            style={styles.icon46}
                            resizeMode="cover"
                            source={require("../assets/58-115.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.nameView5}>
                      <Text style={styles.erenJaegarText5}>Eren Jaegar</Text>
                      <View style={styles.avatar1View47}>
                        <Image
                          style={styles.ellipseIcon50}
                          resizeMode="cover"
                          source={require("../assets/ellipse-5343.png")}
                        />
                        <Image
                          style={styles.icon47}
                          resizeMode="cover"
                          source={require("../assets/56-115.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <Text style={styles.spicySeasonedSeafoodNoodles8}>
                    Hot spicy fried rice with omelet
                  </Text>
                  <Text style={styles.text11}>$435</Text>
                  <View style={styles.contentView14}>
                    <Text style={styles.completedText3}>Completed</Text>
                  </View>
                </View>
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
        <View style={styles.menuView1}>
          <View style={styles.sidebarView}>
            <Image
              style={styles.patternIcon}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView6}>
              <Image
                style={styles.iconLineHome}
                resizeMode="cover"
                source={require("../assets/icon--line--home2.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView1}>
            <Image
              style={styles.patternIcon1}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView7}>
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
              source={require("../assets/pattern8.png")}
            />
            <View style={styles.frameView8}>
              <Image
                style={styles.iconLineDashboard}
                resizeMode="cover"
                source={require("../assets/icon--line--dashboard2.png")}
              />
            </View>
          </View>
          <View style={styles.sidebarView3}>
            <Image
              style={styles.patternIcon3}
              resizeMode="cover"
              source={require("../assets/pattern6.png")}
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
              source={require("../assets/pattern6.png")}
            />
            <View style={styles.frameView10}>
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
            <View style={styles.frameView11}>
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
  ml10: {
    marginLeft: 10,
  },
  ml111: {
    marginLeft: 111,
  },
  mt4: {
    marginTop: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt32: {
    marginTop: 32,
  },
  mt20: {
    marginTop: 20,
  },
  ml64: {
    marginLeft: 64,
  },
  mt2: {
    marginTop: 2,
  },
  mt16: {
    marginTop: 16,
  },
  ml6: {
    marginLeft: 6,
  },
  ml12: {
    marginLeft: 12,
  },
  mt8: {
    marginTop: 8,
  },
  ml24: {
    marginLeft: 24,
  },
  mostOrderedText: {
    position: "relative",
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
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    height: 45,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerView: {
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerIcon: {
    position: "relative",
    width: 322,
    height: 1,
    flexShrink: 0,
  },
  imagesIcon: {
    position: "relative",
    width: 53.88,
    height: 53.88,
    flexShrink: 0,
  },
  spicySeasonedSeafoodNoodles: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  dishesOrderedText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  textView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentMostOrdered: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imagesIcon1: {
    position: "relative",
    width: 56,
    height: 56,
    flexShrink: 0,
  },
  spicySeasonedSeafoodNoodles1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  dishesOrderedText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  textView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentMostOrdered1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imagesIcon2: {
    position: "relative",
    width: 56,
    height: 56,
    flexShrink: 0,
  },
  spicySeasonedSeafoodNoodles2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  dishesOrderedText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  textView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentMostOrdered2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    width: 324,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mostOrderedView: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dividerIcon1: {
    position: "absolute",
    top: 60.5,
    left: 0,
    width: 372,
    height: 1,
  },
  mostTypeOfOrder: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
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
    color: "#fff",
    textAlign: "left",
  },
  formElementsDropdownDef1: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    position: "relative",
    height: 45,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleView: {
    position: "absolute",
    top: 0,
    left: 24,
    backgroundColor: "#1f1d2b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView1: {
    position: "relative",
    width: 372,
    height: 61,
    flexShrink: 0,
  },
  circleIcon: {
    position: "absolute",
    top: -5.74,
    left: -5.74,
    width: 187.48,
    height: 187.48,
  },
  ellipseIcon: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 18,
    height: 18,
  },
  dineInText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  customersText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupView: {
    position: "relative",
    width: 105,
    height: 37,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 18,
    height: 18,
  },
  toGoText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  customersText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupView1: {
    position: "relative",
    width: 102,
    height: 37,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 18,
    height: 18,
  },
  deliveryText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  customersText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupView2: {
    position: "relative",
    width: 105,
    height: 37,
    flexShrink: 0,
  },
  infoView: {
    position: "absolute",
    top: 17,
    left: 203,
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  chartView: {
    position: "relative",
    width: 308,
    height: 176,
    flexShrink: 0,
  },
  mosTypeOfOrder: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 24,
    paddingBottom: 40,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  column2View: {
    position: "absolute",
    top: 24,
    left: 798,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardText: {
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
  tuesday2Feb2021: {
    position: "absolute",
    top: 43,
    left: 0,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  titleView1: {
    position: "relative",
    width: 137,
    height: 65,
    flexShrink: 0,
  },
  dividerIcon2: {
    position: "relative",
    width: 646,
    height: 1,
    flexShrink: 0,
  },
  headerView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineCoin: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  iconView: {
    borderRadius: 8,
    backgroundColor: "#252836",
    flexDirection: "row",
    padding: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  iconLineArrowUp: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView3: {
    borderRadius: 20,
    backgroundColor: "rgba(136, 224, 145, 0.24)",
    flexDirection: "row",
    padding: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    position: "relative",
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  totalRevenueText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentSummaryCard: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    width: 199,
    flexShrink: 0,
    flexDirection: "column",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineOrder: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconView1: {
    borderRadius: 8,
    backgroundColor: "#252836",
    flexDirection: "row",
    padding: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#ff7ca3",
    textAlign: "left",
  },
  iconLineArrowDown: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView4: {
    borderRadius: 20,
    backgroundColor: "rgba(255, 100, 113, 0.24)",
    flexDirection: "row",
    padding: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text3: {
    position: "relative",
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  totalRevenueText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentSummaryCard1: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    width: 199,
    flexShrink: 0,
    flexDirection: "column",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconLineCustomer: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconView2: {
    borderRadius: 8,
    backgroundColor: "#252836",
    flexDirection: "row",
    padding: 7,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  iconLineArrowUp1: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView5: {
    borderRadius: 20,
    backgroundColor: "rgba(136, 224, 145, 0.24)",
    flexDirection: "row",
    padding: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text5: {
    position: "relative",
    fontSize: 28,
    lineHeight: 39,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  totalRevenueText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#abbbc2",
    textAlign: "left",
  },
  contentView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentSummaryCard2: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    width: 199,
    flexShrink: 0,
    flexDirection: "column",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  orderCardView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dividerIcon3: {
    position: "absolute",
    top: 35.5,
    left: 0,
    width: 646,
    height: 1,
  },
  customerText: {
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
  menuText: {
    position: "absolute",
    top: 0,
    left: 189,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  totalPaymentText: {
    position: "absolute",
    top: 0,
    left: 358,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  statusText: {
    position: "absolute",
    top: 0,
    left: 507,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  headerView6: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 548,
    height: 20,
  },
  headingView: {
    position: "absolute",
    top: 61,
    left: 0,
    width: 646,
    height: 36,
  },
  orderReportText: {
    position: "absolute",
    top: 9.38,
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
  dineInText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#fff",
    textAlign: "left",
  },
  formElementsDropdownDef2: {
    position: "absolute",
    top: 0,
    left: 478,
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    borderStyle: "solid",
    borderColor: "#393c49",
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleView2: {
    position: "absolute",
    top: 0,
    left: 24,
    width: 606,
    height: 45,
  },
  headerView7: {
    position: "relative",
    width: 646,
    height: 97,
    flexShrink: 0,
  },
  hanjiZoeText: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View: {
    position: "absolute",
    height: "100%",
    width: "86.07%",
    top: "0%",
    right: "13.93%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  historiaReissText: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View1: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View: {
    position: "absolute",
    height: "100%",
    width: "108.2%",
    top: "0%",
    right: "-8.2%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  annieLeonhartText: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View2: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View: {
    position: "absolute",
    height: "100%",
    width: "116.39%",
    top: "0%",
    right: "-16.39%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View3: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View: {
    position: "absolute",
    height: "100%",
    width: "126.23%",
    top: "0%",
    right: "-26.23%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  leviAckermanText: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View4: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View: {
    position: "absolute",
    height: "100%",
    width: "113.11%",
    top: "0%",
    right: "-13.11%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  arminArlertText: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon8: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View5: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View: {
    position: "absolute",
    height: "106.25%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-6.25%",
    left: "0%",
    display: "none",
  },
  reinerBraunnText: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View6: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View: {
    position: "absolute",
    height: "100%",
    width: "109.84%",
    top: "0%",
    right: "-9.84%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  erenJaegarText: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon10: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View7: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  namesView: {
    position: "absolute",
    height: "69.57%",
    width: "20.4%",
    top: "0%",
    right: "79.6%",
    bottom: "30.43%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles3: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    height: "43.48%",
    width: "4.68%",
    top: "13.04%",
    right: "35.45%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  completedText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  contentView4: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(107, 226, 190, 0.24)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView5: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row3View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hanjiZoeText1: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon11: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View8: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View1: {
    position: "absolute",
    height: "100%",
    width: "78.36%",
    top: "0%",
    right: "21.64%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  historiaReissText1: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon12: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View9: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View1: {
    position: "absolute",
    height: "100%",
    width: "98.51%",
    top: "0%",
    right: "1.49%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  annieLeonhartText1: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon10: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View10: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View1: {
    position: "absolute",
    height: "100%",
    width: "105.97%",
    top: "0%",
    right: "-5.97%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText1: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon14: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon11: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View11: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View1: {
    position: "absolute",
    height: "100%",
    width: "114.93%",
    top: "0%",
    right: "-14.93%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  leviAckermanText1: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon15: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon12: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View12: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View1: {
    position: "absolute",
    height: "100%",
    width: "102.99%",
    top: "0%",
    right: "-2.99%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  arminArlertText1: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon16: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite1: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View13: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View1: {
    position: "absolute",
    height: "106.25%",
    width: "91.04%",
    top: "0%",
    right: "8.96%",
    bottom: "-6.25%",
    left: "0%",
    display: "none",
  },
  reinerBraunnText1: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon17: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon14: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View14: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  erenJaegarText1: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon18: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon15: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View15: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView1: {
    position: "absolute",
    height: "100%",
    width: "91.04%",
    top: "0%",
    right: "8.96%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  namesView1: {
    position: "absolute",
    height: "69.57%",
    width: "22.41%",
    top: "0%",
    right: "77.59%",
    bottom: "30.43%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles4: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    height: "43.48%",
    width: "4.68%",
    top: "13.04%",
    right: "35.45%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  preparingText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#9290fe",
    textAlign: "center",
  },
  contentView6: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(146, 144, 254, 0.2)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView7: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row2View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hanjiZoeText2: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon19: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon16: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit10: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View16: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View2: {
    position: "absolute",
    height: "100%",
    width: "76.09%",
    top: "0%",
    right: "23.91%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  historiaReissText2: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon20: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon17: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit11: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View17: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View2: {
    position: "absolute",
    height: "100%",
    width: "95.65%",
    top: "0%",
    right: "4.35%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  annieLeonhartText2: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon21: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon18: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit12: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View18: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View2: {
    position: "absolute",
    height: "100%",
    width: "102.9%",
    top: "0%",
    right: "-2.9%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText2: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon22: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon19: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View19: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View2: {
    position: "absolute",
    height: "100%",
    width: "111.59%",
    top: "0%",
    right: "-11.59%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  leviAckermanText2: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon23: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon20: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit14: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View20: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  arminArlertText2: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon24: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon21: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite2: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View21: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View2: {
    position: "absolute",
    height: "106.25%",
    width: "88.41%",
    top: "0%",
    right: "11.59%",
    bottom: "-6.25%",
    left: "0%",
    display: "none",
  },
  reinerBraunnText2: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon25: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon22: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View22: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View2: {
    position: "absolute",
    height: "100%",
    width: "97.1%",
    top: "0%",
    right: "2.9%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  erenJaegarText2: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon26: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon23: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View23: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView2: {
    position: "absolute",
    height: "100%",
    width: "88.41%",
    top: "0%",
    right: "11.59%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  namesView2: {
    position: "absolute",
    height: "69.57%",
    width: "23.08%",
    top: "0%",
    right: "76.92%",
    bottom: "30.43%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles5: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    height: "43.48%",
    width: "4.68%",
    top: "13.04%",
    right: "35.45%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  preparingText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#ffb572",
    textAlign: "center",
  },
  contentView8: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(255, 181, 114, 0.2)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView9: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row4View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hanjiZoeText3: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon27: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon24: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit15: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View24: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View3: {
    position: "absolute",
    height: "100%",
    width: "79.55%",
    top: "0%",
    right: "20.45%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  historiaReissText3: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon28: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon25: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit16: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View25: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  annieLeonhartText3: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon29: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon26: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit17: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View26: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View3: {
    position: "absolute",
    height: "100%",
    width: "107.58%",
    top: "0%",
    right: "-7.58%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText3: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon30: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon27: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit18: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View27: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View3: {
    position: "absolute",
    height: "100%",
    width: "116.67%",
    top: "0%",
    right: "-16.67%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  leviAckermanText3: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon31: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon28: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit19: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View28: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View3: {
    position: "absolute",
    height: "100%",
    width: "104.55%",
    top: "0%",
    right: "-4.55%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  arminArlertText3: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon32: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon29: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite3: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View29: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View3: {
    position: "absolute",
    height: "106.25%",
    width: "92.42%",
    top: "0%",
    right: "7.58%",
    bottom: "-6.25%",
    left: "0%",
    display: "none",
  },
  reinerBraunnText3: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon33: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon30: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View30: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View3: {
    position: "absolute",
    height: "100%",
    width: "101.52%",
    top: "0%",
    right: "-1.52%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  erenJaegarText3: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon34: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon31: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View31: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView3: {
    position: "absolute",
    height: "100%",
    width: "92.42%",
    top: "0%",
    right: "7.58%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  namesView3: {
    position: "absolute",
    height: "69.57%",
    width: "22.07%",
    top: "0%",
    right: "77.93%",
    bottom: "30.43%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles6: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text9: {
    position: "absolute",
    height: "43.48%",
    width: "3.85%",
    top: "13.04%",
    right: "36.29%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  completedText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  contentView10: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(107, 226, 190, 0.24)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView11: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row5View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hanjiZoeText4: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon35: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon32: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit20: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View32: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  historiaReissText4: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon36: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon33: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit21: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View33: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View4: {
    position: "absolute",
    height: "100%",
    width: "125.71%",
    top: "0%",
    right: "-25.71%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  annieLeonhartText4: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon37: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon34: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit22: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View34: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View4: {
    position: "absolute",
    height: "100%",
    width: "135.24%",
    top: "0%",
    right: "-35.24%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText4: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon38: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon35: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit23: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View35: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View4: {
    position: "absolute",
    height: "100%",
    width: "146.67%",
    top: "0%",
    right: "-46.67%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  leviAckermanText4: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon39: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon36: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit24: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View36: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View4: {
    position: "absolute",
    height: "100%",
    width: "131.43%",
    top: "0%",
    right: "-31.43%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  arminArlertText4: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon40: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon37: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite4: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View37: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View4: {
    position: "absolute",
    height: "106.25%",
    width: "116.19%",
    top: "0%",
    right: "-16.19%",
    bottom: "-6.25%",
    left: "0%",
    display: "none",
  },
  reinerBraunnText4: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon41: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon38: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View38: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View4: {
    position: "absolute",
    height: "100%",
    width: "127.62%",
    top: "0%",
    right: "-27.62%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  erenJaegarText4: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon42: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon39: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View39: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView4: {
    position: "absolute",
    height: "100%",
    width: "116.19%",
    top: "0%",
    right: "-16.19%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  namesView4: {
    position: "absolute",
    height: "69.57%",
    width: "17.56%",
    top: "0%",
    right: "82.44%",
    bottom: "30.43%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles7: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text10: {
    position: "absolute",
    height: "43.48%",
    width: "5.18%",
    top: "13.04%",
    right: "34.95%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  completedText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  contentView12: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(107, 226, 190, 0.24)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView13: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row6View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hanjiZoeText5: {
    position: "absolute",
    height: "62.5%",
    width: "54.29%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "45.71%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon43: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon40: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit25: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View40: {
    position: "absolute",
    height: "100%",
    width: "30.48%",
    top: "0%",
    right: "69.52%",
    bottom: "0%",
    left: "0%",
  },
  name8View5: {
    position: "absolute",
    height: "94.12%",
    width: "86.07%",
    top: "0%",
    right: "13.93%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  historiaReissText5: {
    position: "absolute",
    height: "62.5%",
    width: "63.64%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "36.36%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon44: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon41: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit26: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View41: {
    position: "absolute",
    height: "100%",
    width: "24.24%",
    top: "0%",
    right: "75.76%",
    bottom: "0%",
    left: "0%",
  },
  name7View5: {
    position: "absolute",
    height: "94.12%",
    width: "108.2%",
    top: "0%",
    right: "-8.2%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  annieLeonhartText5: {
    position: "absolute",
    height: "62.5%",
    width: "66.2%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "33.8%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon45: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon42: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit27: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View42: {
    position: "absolute",
    height: "100%",
    width: "22.54%",
    top: "0%",
    right: "77.46%",
    bottom: "0%",
    left: "0%",
  },
  name6View5: {
    position: "absolute",
    height: "94.12%",
    width: "116.39%",
    top: "0%",
    right: "-16.39%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  mikasaAckermanText5: {
    position: "absolute",
    height: "62.5%",
    width: "68.83%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "31.17%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon46: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon43: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit28: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View43: {
    position: "absolute",
    height: "100%",
    width: "20.78%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "0%",
  },
  name5View5: {
    position: "absolute",
    height: "94.12%",
    width: "126.23%",
    top: "0%",
    right: "-26.23%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  leviAckermanText5: {
    position: "absolute",
    height: "62.5%",
    width: "65.22%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "34.78%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon47: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon44: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personFrancisSkinToneWhit29: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View44: {
    position: "absolute",
    height: "100%",
    width: "23.19%",
    top: "0%",
    right: "76.81%",
    bottom: "0%",
    left: "0%",
  },
  name4View5: {
    position: "absolute",
    height: "94.12%",
    width: "113.11%",
    top: "0%",
    right: "-13.11%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  arminArlertText5: {
    position: "absolute",
    height: "58.82%",
    width: "60.66%",
    top: "20.59%",
    right: "0%",
    bottom: "20.59%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon48: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon45: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personJustinSkinToneWhite5: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "5.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatar1View45: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  name3View5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  reinerBraunnText5: {
    position: "absolute",
    height: "62.5%",
    width: "64.18%",
    top: "21.88%",
    right: "0%",
    bottom: "15.63%",
    left: "35.82%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#3b5162",
    textAlign: "left",
  },
  ellipseIcon49: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon46: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  personEdSkinToneWhitePo5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 32,
    height: 32,
  },
  avatar1View46: {
    position: "absolute",
    height: "100%",
    width: "23.88%",
    top: "0%",
    right: "76.12%",
    bottom: "0%",
    left: "0%",
  },
  name2View5: {
    position: "absolute",
    height: "94.12%",
    width: "109.84%",
    top: "0%",
    right: "-9.84%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  erenJaegarText5: {
    position: "absolute",
    height: "62.5%",
    width: "60.66%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "39.34%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  ellipseIcon50: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon47: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  avatar1View47: {
    position: "absolute",
    height: "100%",
    width: "26.23%",
    top: "0%",
    right: "73.77%",
    bottom: "0%",
    left: "0%",
  },
  nameView5: {
    position: "absolute",
    height: "94.12%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "5.88%",
    left: "0%",
    display: "none",
  },
  namesView5: {
    position: "absolute",
    height: "73.91%",
    width: "20.4%",
    top: "0%",
    right: "79.6%",
    bottom: "26.09%",
    left: "0%",
  },
  spicySeasonedSeafoodNoodles8: {
    position: "absolute",
    height: "86.96%",
    width: "22.91%",
    top: "13.04%",
    right: "45.48%",
    bottom: "0%",
    left: "31.61%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  text11: {
    position: "absolute",
    height: "43.48%",
    width: "5.02%",
    top: "13.04%",
    right: "35.12%",
    bottom: "43.48%",
    left: "59.87%",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Barlow",
    color: "#e0e6e9",
    textAlign: "left",
  },
  completedText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Barlow",
    color: "#50d1aa",
    textAlign: "left",
  },
  contentView14: {
    position: "absolute",
    height: "56.52%",
    width: "15.22%",
    top: "13.04%",
    right: "0%",
    bottom: "30.43%",
    left: "84.78%",
    borderRadius: 30,
    backgroundColor: "rgba(107, 226, 190, 0.24)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView15: {
    position: "relative",
    width: 598,
    height: 46,
    flexShrink: 0,
  },
  row7View: {
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rowsView: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rowsView1: {
    position: "relative",
    width: 598,
    height: 369,
    flexShrink: 0,
    overflow: "hidden",
  },
  orderReportView: {
    borderRadius: 8,
    backgroundColor: "#1f1d2b",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
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
  iconLineDiscount: {
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
  iconLineNotification: {
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
  menuView1: {
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
  dashboardDarkVersionView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#252836",
    flex: 1,
    width: "100%",
    height: 834,
    overflow: "hidden",
  },
});

export default DashboardDarkVersion;
