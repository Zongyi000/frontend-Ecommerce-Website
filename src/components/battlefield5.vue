<template>
    <div class="background">

        <a-menu
        class="menu"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        >
        <a-sub-menu key="sub1">
            <span slot="title"><img class="ea" src="../assets/ea.png" /><span>EA</span></span>
            <a-menu-item key="1" @click="Battlefield">
            Battlefield V
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <span slot="title"><img class="ea" src="../assets/ebay/ebay.png" /><span>Ebay</span></span>
            <a-menu-item key="2" @click="Wildlands">
            ebay
            </a-menu-item>
        </a-sub-menu>
        </a-menu>

        <img class="battlefield5head" src="../assets/battlefield5head.png" alt="First image"  @click="official">

        <a-page-header
        style="transform: translateY(-3px)"
        title="Battlefield V"
        sub-title="a first-person shooter video game"
        @back="() => $router.go(-1)"
        >

        <template slot="extra">
            <a-popover v-model="visible" title="Zongyi Jiang" trigger="click">
                <a slot="content"><img src="../assets/Linkedin.jpg" alt="image" class="linkedin-img"></a>

                <a class="linkedin-details" slot="content" @click="hide">Linkedin details </a>
                <a-button type="primary">
                Zongyi's Linkedin
                </a-button>
            </a-popover>
        </template>

        <a-descriptions size="small" :column="3">
            <a-descriptions-item label="Developed by">
            EA DICE
            </a-descriptions-item>
            <a-descriptions-item label="Release Date">
            2018-11-20
            </a-descriptions-item>
            <a-descriptions-item label="Maps">
            Iwo Jima, Solomon Islands, Rotterdam, etc
            </a-descriptions-item>
        </a-descriptions>
        </a-page-header>

        <div class="bf-details">This game is based on World War II and is a thematic continuation of its World War I based precursor Battlefield 1.</div>

        <a-divider class="divider-gifs">Videos & Gifs</a-divider>

        <div class="videos">
            <video class="video" controls>
                <source src="../assets/tank.mp4" type="video/mp4">
            </video>
            <video class="video" controls>
                <source src="../assets/island.mp4" type="video/mp4">
            </video>
            <video class="video" controls>
                <source src="../assets/underground.mp4" type="video/mp4">
            </video>
        </div>

        <!-- <div class="pics">
            <img src="../assets/bing.gif" alt="First image" style="width: 20%;">
            <img src="../assets/tank.gif" alt="Second image" style="width: 20%;">
            <img src="../assets/plane.gif" alt="Third image" style="width: 20%;">
        </div> -->

        <div
            v-for="(picture, index) in middlePicture"
            :key="index"
            class="pics"
        >
            <img class="pic" :src="picture.src" alt="" />
        </div>

        <a-divider class="divider-desc">Descriptions</a-divider>

        <div class="words">This is the ultimate Battlefield V experience. Enter mankind’s greatest conflict across land, air, and sea with all gameplay content unlocked from the get-go. </div>

        <a-divider class="divider-qa">Q&A</a-divider>

        <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
        >
            <a-form-model-item ref="name" label="Email" prop="name">
            <a-input
                v-model="form.name"
                @blur="
                () => {
                    $refs.name.onFieldBlur();
                }
                "
            />
            </a-form-model-item>
            <a-form-model-item label="Server" prop="region">
            <a-select v-model="form.region" placeholder="please select your zone">
                <a-select-option value="America">
                America
                </a-select-option>
                <a-select-option value="Europe">
                Europe
                </a-select-option>
                <a-select-option value="Asia">
                Asia
                </a-select-option>
                <a-select-option value="other">
                Other
                </a-select-option>
            </a-select>
            </a-form-model-item>
            <a-form-model-item label="Report time" required prop="date1">
            <a-date-picker
                v-model="form.date1"
                show-time
                type="date"
                placeholder="Pick a date"
                style="width: 100%;"
            />
            </a-form-model-item>
            <a-form-model-item label="Report type" prop="type">
            <a-checkbox-group v-model="form.type">
                <a-checkbox value="1" name="type">
                Bug
                </a-checkbox>
                <a-checkbox value="2" name="type">
                Suggestion
                </a-checkbox>
                <a-checkbox value="3" name="type">
                Other
                </a-checkbox>
            </a-checkbox-group>
            </a-form-model-item>
            <a-form-model-item label="Description" prop="desc">
            <a-input v-model="form.desc" type="textarea" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
                Submit
            </a-button>
            <a-button style="margin-left: 10px;" @click="resetForm">
                Reset
            </a-button>
            </a-form-model-item>
        </a-form-model>

        <div class="copyright">
            <p>&copy; 2021 Zongyi Jiang <br>(This website is for training purpose)</p>
        </div>

    </div>
</template>

<script>
export default {
  name: 'battlefield5',
  data () {
    return {
      mode: 'inline',
      theme: 'light',
      msg: 'Welcome to Overview',
      //   wsData: null,
      //   previewUrl: 'ws://xx.xxx.x.xx:xxxx/ws',
      middlePicture: [
        {src: require('../assets/bing.gif')},
        {src: require('../assets/tank.gif')},
        {src: require('../assets/plane.gif')}
      ],
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Contact Infomation', trigger: 'blur' },
          { min: 6, max: 35, message: 'Length should be 6 to 35', trigger: 'blur' }
        ],
        region: [{ required: true, message: 'Please select a server', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a report time', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one report type',
            trigger: 'change'
          }
        ],
        desc: [{ required: true, message: 'Please input details', trigger: 'blur' }]
      }
    }
  },

  //   methods: {
  //     initWebSocket () {
  //       console.log('this is another way we can use websocket to receive data from back-end engineers')

  //       if (!this.previewUrl) return
  //       this.ws = new WebSocket(this.previewUrl)
  //       this.ws.addEventListener("message", (e) => {
  //         if (typeof e.data === 'string') {
  //           this.wsData = JSON.parse(e.data)
  //         }
  //       })
  //       console.log(this.wsData)
  //       // wsData is all the websocket data we received from the back-end engineers
  //     }
  //   },
  //   computed: {
  //     middlePicture () {
  //       return this.wsData ? this.wsData.gifs.length ? this.wsData.gifs : [""] : [""];
  //     }
  //   },

  mounted () {
    this.openNotification()
    //   this.initWebSocket()
    // document.addEventListener('keydown', this.keyHandler)
    localStorage.setItem('Hi', 'Vue is amazing')
    console.log('Frontend engineers are amazing')
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.keyHandler)
  },

  methods: {
    changeMode (checked) {
      this.mode = checked ? 'vertical' : 'inline'
    },
    changeTheme (checked) {
      this.theme = checked ? 'dark' : 'light'
    },
    Battlefield () {
      this.$router.push('/battlefield5')
    },
    Wildlands () {
      this.$router.push('/ebay')
    },
    openNotification () {
      this.$notification.open({
        message: 'Notification',
        description:
          'The method of using WebSocket to receive data from the backend is in src/components/battlefield.vue (GitHub: https://github.com/callofduty000/Zongyi-frontend-project)'
      })
    },
    official () {
      window.open('https://www.ea.com/games/battlefield/battlefield-5/about?isLocalized=true')
    },
    hide () {
      window.open('https://www.linkedin.com/in/zongyi-jiang/')
    },
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('Submit successfully, thank you!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
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
  }
}
</script>

<style>

.ant-page-header {
    position: relative;
    bottom: 110px;
}
.ant-page-header-heading-sub-title {
    font-size: 16px;
}

.background {
    background-image: url(../assets/battlefield5background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 300%;
    height: 2000px;
}

.menu {
    position: fixed;
    width: 256px!important;
    transform: translateY(120px);
    z-index: 999;
}

.ant-menu-inline {
    width: 256px!important;
}
.ea {
    width: 20px;
    transform: translate(-20px, -1px);
}

.battlefield5head{
    position: relative;
    top: 100px;
}

.battlefield5head:hover {
    cursor: pointer;
    transform: translateY(-10px);
    /* border: 3px solid rgba(0, 0, 0, 1); */
}

.heading {
    position: relative;
    top: 150px;
}

.bf-details {
    /* position: relative;
    top: 20px;
    left: 350px; */
    margin: 0 auto;
    width: 1200px;
    color:white;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Time New Roman';
    text-shadow: rgb(76, 0, 255) 3px 3px 3px;
}

.videos {
    /* position: relative;
    top: 50px;
    left: 160px; */
    margin: 0 auto;
    padding-top: 50px;
    width: 1300px;
}

.video {
    margin-right: 20px;
    width: 400px;
    box-shadow: inset 0 0 10px #CCC;
}

.video:hover {
    transform: translateY(-10px);
}

.pics {
    /* position: relative;
    top: 80px;
    left: 48px; */
    margin: 0 auto;
    padding-top: 50px;
    display: inline-block;
}

.pic {
    width: 400px;
    margin-right: 20px;
}

.pics:hover {
    transform: translateY(-10px);
}

.words {
    /* position: relative;
    top: 100px;
    left: 500px; */
    margin: 0 auto;
    width: 900px;
    color:white;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Time New Roman';
    padding-top: 50px;
}

.linkedin-img {
    width: 20%;
    display: block;
    min-width: 100%;
    /* min-height: 100%; */
}

.linkedin-details {
    width: 200px;
    transform: translate(80px,5px);
    font-size: 16px;
}

.ww2 {
    transform: translate(-200px,100px)!important;
}

.copyright{
    position: relative;
    top: 350px;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
}

.ant-popover-inner {
    width: 290px!important;
}

.ant-popover-inner-content {
    width: 300px;
    height: 650px;
    display: flex;
    flex-direction: column;
}

.ant-popover-inner {
    width: 500px;
}

.ant-descriptions-item-label {
    font-size: 18px;
    font-weight: 600;
}

.ant-descriptions-item-content {
    font-size: 16px;
    color: white;
}

.ant-divider-inner-text {
    transform: translateY(10px);
    color:slateblue;
    text-shadow: rgb(104, 117, 160) 3px 3px 3px;
}

.ant-form {
    /* position: relative;
    top: 80px;
    left: 600px; */
    margin: 0 auto;
    padding-top: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 750px;
    height: 500px;
    transform: translateY(50px);
}

.ant-row{
    width: 900px;
    transform: translateY(30px);
}

.ant-form-item-required {
    color: white!important;
}

.ant-form-item-label {
    color: white!important;
}

.ant-checkbox-wrapper {
    color: white!important;
}

.ant-radio-wrapper{
    color: white!important;
}

.divider-gifs {
    transform: translateY(30px);
}

.divider-desc {
    transform: translateY(10px);
}

.divider-qa {
    transform: translateY(0px);
}
</style>
