<template>
  <div>
    <a-menu
      class="menu"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="light"
    >
      <a-sub-menu key="sub1">
        <span slot="title"
          ><img class="ea1" src="../assets/ebay/ea1.png" /><span>EA</span></span
        >
        <a-menu-item key="1" @click="Battlefield"> Battlefield V </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><img class="ea1" src="../assets/ebay/ebay.png" /><span>Ebay</span></span>
        <a-menu-item key="2" @click="Wildlands"> ebay </a-menu-item>
      </a-sub-menu>
    </a-menu>

    <div class="container">
      <ul class="navbar">
        <li id="signin-style" class="navItem">
          Hi!
          <a
            href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Fb%2FCollectibles-Art%2Fbn_7000259855"
            >Sign in
          </a>
          or
          <a
            href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Fb%2FCollectibles-Art%2Fbn_7000259855"
            >register</a
          >
        </li>
        <li class="navItem">
          <a href="https://www.ebay.com/globaldeals">Daily Deals</a>
        </li>
        <li class="navItem">
          <a href="https://www.ebay.com/globaldeals">Sell</a>
        </li>
        <li class="navItem no-border">
          <a href="https://www.ebay.com/help/home">Help & Contact</a>
        </li>

        <li id="cart" class="navItem float-right no-border">
          <img
            src="../assets/ebay/cart.png"
            alt="cart"
            title="这是您的购物车"
            width="30px"
          />
        </li>
        <li id="alert" class="navItem float-right no-border">
          <img
            src="../assets/ebay/alert.png"
            alt="alert"
            title="这是您的购物车"
            width="30px"
          />
        </li>
        <li class="navItem float-right no-border">
          <a
            href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2Fb%2FCollectibles-Art%2Fbn_7000259855"
            >My ebay</a
          >
        </li>
      </ul>
    </div>

    <div id="search-bar" class="clearfix setBGColor">
      <div class="container">
        <img
          id="brand"
          src="../assets/ebay/brand.png"
          alt="eBay"
          height="55px"
        />

        <botton id="shopping-button" type="button">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-submenu index="2">
              <template class="shopby" slot="title">Shop by category</template>
              <el-menu-item index="2-1">Colletibles & arts</el-menu-item>
              <el-menu-item index="2-2">Electronics</el-menu-item>
              <el-menu-item index="2-3">Fashion</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">Other categories</template>
                <el-menu-item index="2-4-1">Gift Cards</el-menu-item>
                <el-menu-item index="2-4-2">Health & beauty</el-menu-item>
                <el-menu-item index="2-4-3">Business & industrial</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </botton>

        <form id="search-form">
          <table>
            <tr>
              <td>
                <input
                  id="search-field"
                  type="text"
                  name="search-content"
                  placeholder="Search for anything"
                />
              </td>

              <td>
                <div id="category-textfield" class="text-field">
                  <select class="options" name="cate">
                    <option selected="selected" value="0">
                      All Categories
                    </option>
                    <option value="1">Antiques</option>
                    <option value="2">Art</option>
                    <option value="3">Baby</option>
                    <option value="4">Books</option>
                    <option value="5">Business &amp; Industrial</option>
                    <option value="6">Cameras &amp; Photo</option>
                    <option value="7">Cell Phones &amp; Accessories</option>
                  </select>
                </div>
              </td>

              <td>
                <input class="btn-primary" value="Search" type="submit" />
              </td>

              <td>
                <a
                  href="https://www.ebay.com/sch/ebayadvsearch"
                  id="advanced-button"
                  title="高级搜索"
                  >Advanced</a
                >
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
    <nav class="clearfix setBGColor">
      <div class="container">
        <ul id="navigation-bar" class="navbar tb-border">
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/">Following</a>
          </li>
          <li class="navItem no-border li-space active">
            <a href="https://www.ebay.com/globaldeals">Today</a>
          </li>

          <div class="divider"></div>

          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/b/Fashion/bn_7000259856">Fashion</a>
          </li>
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/b/Electronics/bn_7000259124"
              >Electronics</a
            >
          </li>
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/b/Collectibles-Art/bn_7000259855"
              >Collectibles & Art</a
            >
          </li>
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/b/Home-Garden/11700/bn_1853126"
              >Home & Garden</a
            >
          </li>
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/b/Sporting-Goods/888/bn_1865031"
              >Sporting Goods</a
            >
          </li>
          <li class="navItem no-border li-space">
            <a
              href="https://www.ebay.com/sch/Auto-Parts-Accessories/6028/bn_569479/i.html"
              >Motors</a
            >
          </li>
          <li class="navItem no-border li-space">
            <a href="https://www.ebay.com/globaldeals">Daily Deals</a>
          </li>
        </ul>
      </div>
    </nav>
    <section id="adSection" class="setBGColor clearfix">
      <div class="container">
        <div id="column1">
          <el-carousel :interval="2000" type="card" height="230px">
            <el-carousel-item v-for="item in adPics" :key="item">
              <img class="medium" :src="item.src" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <div id="column2">
            <div>
              <img id="ad2" class="add-border" src="../assets/ebay/ad2.png" alt="ad2" width="190px">
            </div>
            <div>
              <img id="ad3" class="add-border" src="../assets/ebay/ad3.png" alt="ad3" width="190px">
            </div>
          </div> -->
      </div>
    </section>
    <section id="productSection" class="clearfix setBGColor">
      <div class="container">
        <h2 class="hero-heading">Today's Featured Collections</h2>

        <div id="show-product">
          <!-----------------Product1----------------->

          <div class="product-section">
            <div class="product-photo">
              <div class="photo-column1">
                <img
                  id="photo1"
                  src="../assets/ebay/product1.png"
                  alt="product1"
                />
              </div>

              <div class="photo-column2">
                <div class="thumb">
                  <img
                    id="thumbnail-fix"
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_1.png"
                    alt="thumbnail_1"
                  />
                </div>

                <div class="thumb">
                  <img
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_2.png"
                    alt="thumbnail_2"
                  />
                </div>

                <div class="thumb">
                  <img
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_3.png"
                    alt="thumbnail_3"
                  />
                </div>
              </div>
            </div>

            <!-- --------------Article1 --------------->

            <article>
              <div class="left-col">
                <h3 class="title">Canon EOS M6 Camera</h3>
                <div class="description-container">
                  <p class="product-details">
                    The EOS M6 is an interchangeable-lens camera that puts
                    advanced technologies like Dual Pixel CMOS AF with
                    phase-detection in a compact and lightweight size. Ready at
                    hand to help capture photos and videos the instant the
                    moment happens.
                    <a
                      href="https://cweb.canon.jp/eos/lineup/m6mk2/"
                      title="阅读更多"
                    >
                      <span class="read-more"></span>
                    </a>
                  </p>
                </div>
              </div>

              <div class="right-col right-col-text">
                <ul class="right-col-container">
                  <li class="right-col-item">27 items</li>
                  <li class="right-col-item">by ebaytecheditor</li>
                  <li class="right-col-item">
                    <a
                      class="active-link"
                      href="https://www.amazon.com/s/?ie=UTF8&keywords=eos+m6+mark+ii&index=aps&tag=hydglogoo-20&ref=pd_sl_9c8hb4fd15_b&adgrpid=84105837960&hvpone=&hvptwo=&hvadid=393554238458&hvpos=&hvnetw=g&hvrand=18379216672466952619&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061500&hvtargid=kwd-613706142624&hydadcr=26378_10317064&gclid=EAIaIQobChMI-ob7gtap7gIVJ9WWCh128Q5AEAAYASAAEgJv2vD_BwE"
                      >Shop now</a
                    >
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <!-----------------Product1 End----------------->
          <!-----------------Product2----------------->
          <div class="product-section right-section">
            <div class="product-photo">
              <div class="photo-column1">
                <img
                  id="photo-adjust"
                  src="../assets/ebay/product2.png"
                  alt="product2"
                />
              </div>

              <div class="photo-column2">
                <div class="thumb">
                  <img
                    id="thumbnail-adjust"
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_4.png"
                    alt="thumbnail_4"
                  />
                </div>

                <div class="thumb">
                  <img
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_5.png"
                    alt="thumbnail_5"
                  />
                </div>

                <div class="thumb">
                  <img
                    class="thumbnail"
                    src="../assets/ebay/thumbnail_6.png"
                    alt="thumbnail_6"
                  />
                </div>
              </div>
            </div>

            <!-- --------------Article2 --------------->

            <article>
              <div class="left-col">
                <h3 class="title">Liquid Compact</h3>
                <div class="description-container">
                  <p class="product-details">
                    "Estee Lauder. To clean sponge Achieve eight-hour wear at
                    the push of a button. Just press the button to customize
                    your coverage—press once for a light touch, twice for fuller
                    coverage. -Shut compact tightly."
                    <a
                      href="https://www.amazon.com/s?k=Estee+Lauder+Liquid+Compact&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss_2"
                      title="阅读更多"
                    >
                      <span class="read-more"></span>
                    </a>
                  </p>
                </div>
              </div>

              <div class="right-col right-col-text">
                <ul class="right-col-container">
                  <li class="right-col-item">27 items</li>
                  <li class="right-col-item">by ebaytecheditor</li>
                  <li class="right-col-item">
                    <a
                      class="active-link"
                      href="https://www.amazon.com/s?k=Estee+Lauder+Liquid+Compact&__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&ref=nb_sb_noss_2"
                      >Shop now</a
                    >
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <!-----------------Product2 End----------------->
        </div>
      </div>
    </section>
    <Section id="daily-deals" class="clearfix setBGColor">
      <div class="container">
        <h2 class="hero-heading">Daily Deals</h2>

        <div class="box">
          <div class="box-subcontent">
            <img
              class="sale"
              src="../assets/ebay/iphone11.png"
              alt="sale-pic"
            />
            <a
              href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=iPhone+11&_sacat=0"
              class="details"
            />
            <h4 class="prices">HKD 5000.00</h4>
          </div>

          <div class="box-subcontent">
            <img class="sale" src="../assets/ebay/airpods.png" alt="sale-pic" />
            <a
              href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=Airpods&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=iPhone+11"
              class="details"
            />
            <h4 class="prices">HKD 43.54</h4>
          </div>

          <div class="box-subcontent">
            <img
              class="sale"
              src="../assets/ebay/iphone11pro.png"
              alt="sale-pic"
            />
            <a
              href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=iPhone+11+pro&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=Airpods"
              class="details"
            />
            <h4 class="prices">HKD 4431.63</h4>
          </div>

          <div class="box-subcontent">
            <img class="sale" src="../assets/ebay/macbook.png" alt="sale-pic" />
            <a
              href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=MacBook+Air&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=iPhone+11+pro"
              class="details"
            />
            <h4 class="prices">HKD 2500.89</h4>
          </div>

          <div class="box-subcontent">
            <img
              class="sale"
              src="../assets/ebay/iphone11max.png"
              alt="sale-pic"
            />
            <a
              href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=iPhone+11+Pro+Max&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=MacBook+Air"
              class="details"
            />
            <h4 class="prices">HKD 5431.21</h4>
          </div>
        </div>
      </div>

      <!-- Collections  -->
      <div id="collections">
        <p>
          Get inspired!Explore all of our
          <a href="https://www.ebay.com/b/Collectibles-Art/bn_7000259855"
            >Trending Collections</a
          >
        </p>
      </div>
      <!--- --------------Pagination ------------->

      <a-pagination
        v-model="current"
        :page-size-options="pageSizeOptions"
        :total="total"
        show-size-changer
        :page-size="pageSize"
        @showSizeChange="onShowSizeChange"
        @click="paginations"
      >
        <template slot="buildOptionText" slot-scope="props">
          <span v-if="props.value !== '50'">{{ props.value }} / page</span>
          <span v-if="props.value === '50'">all</span>
        </template>
      </a-pagination>
    </Section>
    <footer>
      <div class="container">
        <div>
          <p>
            &copy; 2021 版权 Zongyi Jiang <br />(This is the replication of the
            ebay home page for training purposes)
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import httpUtils from '../api/http-utils.js'

export default {
  name: 'ebay',
  data () {
    return {
      // url: {
      //   // list: Constants.BASE_URL + '/xxx'
      //   list: ''
      // },
      msg: 'Welcome to Overview',
      adPics: [
        { src: require('../assets/ebay/pic1.png') },
        { src: require('../assets/ebay/pic2.png') },
        { src: require('../assets/ebay/pic3.png') }
      ],
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      current: 1,
      pageSize: 10,
      total: 50,
      activeIndex: '1'
    }
  },
  methods: {
    Battlefield () {
      this.$router.push('/battlefield5')
    },
    Wildlands () {
      this.$router.push('/ebay')
    },
    onShowSizeChange (current, pageSize) {
      this.pageSize = pageSize
    },
    paginations () {
      alert('No more data, this developer only wrote one page.')
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    // getSrc (params = '') {
    //   return httpUtils.get(this.urls.list + '/xxx' + params)
    // console.log(this is the method we use ajax to receive data from the backend;
    // },
    // postSrc (body) {
    //   return httpUtils.post(this.urls.list + '/xxx', body)
    // },
    openNotification () {
      this.$notification.open({
        message: 'Notification',
        description:
          'The method of using Ajax to receive data from the backend is in scr/components/ebay.vue (GitHub: https://github.com/callofduty000/Zongyi-frontend-project)'
      })
    },
    keyHandler (e) {
      let code = e.keyCode || e.which
      if (code === 13) {
        confirm("You pressed 'Enter'")
      } else if (code === 27) {
        alert("You pressed 'Esc'")
      } else {
        confirm('It seems you pressed something, press it again...')
      }
    }
  },
  mounted () {
    this.openNotification()
    // document.addEventListener('keydown', this.keyHandler)
    // this.getSrc()
  }
}
</script>

<style>
.menu {
  position: fixed;
  width: 256px;
  transform: translateY(120px);
  z-index: 999;
}

.ea1 {
  width: 40px;
  transform: translate(-10px, -1px);
}

.container {
  width: 1200px;
  margin: auto;
}

.navbar {
  list-style-type: none;
  font-size: 12px;
  margin: 0;
  padding: 5;
  transform: translateY(5px);
}

li.navItem {
  display: inline;
  border-right: 1px solid #777777;
}

li.navItem a {
  padding: 0 9px 0 9px;
  color: #555555;
}

li.navItem a:link {
  text-decoration: none;
}

li.navItem a:hover {
  text-decoration: underline;
  color: #0654ba;
}

#signin-style a:link {
  color: #0654ba;
  padding: 0;
}

#signin-style a:link:last-child {
  padding-right: 16px;
}

.float-right {
  float: right;
}

.no-border {
  border-right: none !important;
}

#search-bar {
  width: 100%;
  height: 65px;
  overflow: hidden;
}

.setBGColor {
  background-color: #f9f9f9;
}

.clearfix {
  clear: both;
}

#brand {
  float: left;
}

#shopping-button {
  float: left;
  width: 120px;
  font-size: 14px;
  color: #555555;
  border: none;
  background-color: #f9f9f9;
  margin-right: 5px;
}

#search-form {
  float: left;
  margin-top: 10px;
  margin-left: 15px;
}

#search-field {
  border-radius: 3px 0 0 3px;
  width: 630px;
  height: 40px;
  position: relative;
  left: 20px;
  box-sizing: border-box;
}

.text-field {
  font-size: 16px;
  color: #767676;
  padding: 10px 0 9px 8px;

  border: 1px solid #ddd;
}

#category-textfield {
  border-radius: 0 3px 3px 0;
  padding: 11px 10px;
  height: 40px;
  width: 180px;
  background-color: #fff;
  box-sizing: border-box;
  margin-left: -4px;
  position: relative;
  left: 25px;
}

.options {
  border: none;
  font-size: 12px;
  width: 100%;
  background-color: transparent;
  transform: translateY(-5px);
}

.btn-primary {
  font-size: 16px;
  height: 40px;
  font-weight: 500;
  border-radius: 3px;
  border: 0;
  color: #fff;
  padding: 8px, 19px, 9px, 19px;
  background: linear-gradient(to bottom, #0079bc, #00509d);
  position: relative;
  left: 25px;
}

.btn-primary:hover {
  background: #00509d;
}

#advanced-button {
  color: #555555;
  text-decoration: none;
  font-size: 11px;
  margin-left: 10px;
  position: relative;
  left: 20px;
}

#advanced-button:hover {
  color: #065dba;
}

nav {
  width: 100%;
  height: 35px;
  padding-top: 12px;
}

.tb-border {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

#navigation-bar {
  width: 100%;

  padding: 10px 0 11px 0;
  height: 35px;

  box-sizing: border-box;
}

.li-space {
  float: left;
  padding: 0 1.5% 0 1.5%;
}

.divider {
  float: left;
  width: 1px;
  height: 24px;
  background: #ddd;
  margin: -5px 20px 0 20px;
}

.active a {
  font-weight: bold;
  padding-left: 0 !important;
  padding-right: 0 !important;
  border-bottom: 2px solid #555;
  padding-bottom: 9px !important;
}

.active a:hover {
  text-decoration: none !important;
  color: #555 !important;
}

/*-- -----------------------Advertisement ------------------ --*/

#adSection {
  height: 402px;
  padding: 32px 0 32px 0;
}

#column1 {
  float: left;
  height: 402px;
}

#column2 {
  position: relative;
  float: left;

  width: 324px;
  height: 402px;
}

.add-border {
  border: 1px solid #ddd;
  box-sizing: border-box;
}

#ad2 {
  position: absolute;
  top: 0;
  right: 0;
}

#ad3 {
  position: absolute;
  right: 0;
  bottom: 0;
}

#productSection {
  width: 100%;
  height: 647px;
  padding-bottom: 75px;
  overflow: hidden;
  position: relative;
  bottom: 35px;
}

.hero-heading {
  height: 45px;
  border-bottom: 1px solid #ddd;
  font-weight: 400;
  color: #555;
}

#show-product {
  position: relative;
  height: 602.5px;
  width: 100%;
}

.product-section {
  float: left;
  width: 585px;
  height: 605px;
}

.product-photo {
  width: 585px;
  height: 420px;
}

.photo-column1 {
  float: left;
  width: 445px;
  height: 420px;
  border-width: 1px 0 1px 1px;
  border-color: #ddd;
  border-style: solid;

  box-sizing: border-box;
  overflow: hidden;
}

#photo1 {
  height: 418px;
  position: relative;
  left: 0px;
  overflow: hidden;
}

.photo-column2 {
  float: left;
  width: 140px;
  height: 420px;
  box-sizing: border-box;
  overflow: hidden;
}

.thumb {
  width: 140px;
  height: 140px;
  border-width: 1px 1px 0 1px;
  border-color: #ddd;
  border-style: solid;

  box-sizing: border-box;
  overflow: hidden;
}

.thumb:last-child {
  border-width: 1px 1px 1px 1px;
}

.thumbnail {
  height: 140px;
}

#thumbnail-fix {
  position: relative;
  right: 0px;
}
/*-- --------------Article ---------------*/

article {
  color: #333333;
}

.title {
  font-weight: 400;
  font-size: 26px;
  margin: 18px 0 10px 0;
}

.description-container {
  width: 370;
  height: 98px;
}

.product-details {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
}

.read-more {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url("../assets/ea.png");
  background-size: cover;
  vertical-align: middle;
}

.left-col {
  float: left;
  width: 440px;
}

.right-col {
  float: right;
  width: 140px;
}

.right-col-text {
  text-align: center;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
}

.right-col-container {
  padding-left: 8px;
  padding-right: 8px;
  margin: 0;
  list-style-type: none;
}

.right-col-item {
  padding: 18px 0 18px 0;
  border-bottom: 1px solid #ddd;
}

.right-col-item:last-child {
  border: none;
}

.right-col-item a:link {
  color: #0654ba;
  text-decoration: none;
}

.right-col-item a:hover {
  color: #0654ba;
  text-decoration: underline;
}

/* ----------------Product2 -------------- */
.right-section {
  position: absolute;
  right: 0;
}

#photo-adjust {
  height: 420px;
}

#thumbnail-adjust {
  position: relative;
  left: 3px;
}

#daily-deals {
  width: 100%;
  height: 530px;
  /* padding-bottom: 75px; */
  border-bottom: 1px solid #ddd;
  /* position: relative;
  bottom: 50px; */
}

.box {
  width: 100%;
  height: 300px;
  padding: 25px 0 0 8px;
  vertical-align: middle;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: white;

  margin-bottom: 80px;
}

.box-subcontent {
  float: left;
  width: 190px;
  margin: 0 24px;
}

.sale {
  width: 169px;
}

.details {
  width: 180px;
  display: inline-block;
  font-size: 14px;
  padding: 8px 0 0 8px;
  color: black;
  text-decoration: none;
}

.details:hover {
  text-decoration: underline;
  color: #0654ba;
}

.price {
  padding: 8px 0 0 8px;
  margin: 0;
}

/* --------------------Pagination------------*/

.ant-pagination {
  position: relative;
  bottom: 20px;
}

/* --------------------Collections------------*/

#collections {
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 2px;
  text-align: center;
  color: #777777;
  box-sizing: border-box;
  position: relative;
  bottom: 66px;
}

#collections a {
  color: #0754ba;
  text-decoration: none;
}

#collections p {
  margin-top: 14px;
}

#collections a:hover {
  color: #0754ba;
  text-decoration: underline;
}

footer {
  color: #777777;
}

.el-carousel {
  width: 1300px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.medium {
  width: 650px;
  height: 230px;
}

.ea {
  width: 20px;
  transform: translate(-20px, -1px);
}

.topMenu {
  position: relative;
  bottom: 15px;
  height: 50px;
  background-color: blue;
}

.el-menu {
  border-bottom: none !important;
}

.el-submenu__title {
  border: none !important;
}

.is-opened {
  /* border: 0.5px solid rgba(0,0,0,0.1); */
  color: blue;
}

.shopby {
  padding: 0 !important;
}
</style>>
