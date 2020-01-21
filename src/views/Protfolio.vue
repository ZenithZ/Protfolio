<template>
  <div>
    <article>
      <section>
        <el-container>

          <el-row class="content">
            <el-col :span="4">
              <el-aside class="aside" width="16.7%">
                <ul>
                  <li v-for="(items,i) in navList" :key="i" @click="activeFun(items)">
                    <a :class="{active:items.isActive}"  @click="handleScroll(items.value)">
                      {{items.text}}
                    </a>
                  </li>
                </ul>
              </el-aside>
            </el-col>
            <el-col :offset="4" :span="20">
              <el-main class="main">
                <!-- about -->
                <div class="about" ref='about'>
                  <h1 id="about">
                    About Me
                    <i class="fas fa-user-circle"></i>
                  </h1>
                  <img src="../assets/photos/Main.jpg" alt />
                  <span>My name is Lin Fu. Also known as Flynn and ZenithZ.<br>
                  I am a graduate of @The University of Sydney majoring Computer Sciecne and Information Systems.<br>
                  Currently first year Master student specialising Human Computer Interaction at @The University of Melbourne.
                  </span>
                </div>

                <!-- Education -->
                <div class="Education">
                  <h1 id="Education">Education</h1>
                  <span>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb" />
                              </div>
                              <div class="title">
                                <p>The University Of Melbourne</p>
                                <p>Master of Information Technology</p>
                                <p>March. 2020 - March.2022 (expected)</p>
                              </div>
                            </div>

                            <div>Courses done</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                  </span>
                </div>

                <!-- project -->
                <div class="project">
                  <h1 id="project">Projects</h1>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/orange-yellow.png" alt="ZenithZ" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>Personal Site</p>
                            <span>YES It is the site you are on right now :P</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/NHP.png" alt="SepsisUX" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>Sepsis UX</p>
                            <span>README TBD</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="project-item">
                        <img src="../assets/tbd.png" alt="" srcset="">
                        <div class="item-img-box">
                          <div>
                            <p>TBD</p>
                            <span>TBD</span>
                          </div>
                        </div>
                      </div>
                    </el-col>
                  </el-row>

                </div>

                <!-- WorKExperience -->
                <div class="experience">
                  <h1 id="experience">Work Experience</h1>
                  <span>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="@/assets/NHP.png" alt="nsw" />
                              </div>
                              <div class="title">
                                <strong>NSW Health Pathdology</strong>
                                <strong>PoCT Customer and Product Support Officer</strong>
                                <p>Jan. 2020 - May.2020 (Expect)</p>
                              </div>
                            </div>

                            <div>Expand Details</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="@/assets/usyd.png" alt="usyd" />
                              </div>
                              <div class="title">
                                <strong>The University Of Sydney</strong>
                                <strong>Academic Tutor - Human Computer Interaction</strong>
                                <p>Jul. 2019 - Dec.2019</p>
                              </div>
                            </div>

                            <div>Expand Details</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion class="collapse-box">
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/tbd.png" alt="tbd" />
                              </div>
                              <div class="title">
                                <p>Expand to view more</p>
                              </div>
                            </div>

                            <div>Expand</div>
                          </div>
                        </template>
                        <div>TBD</div>
                        <div>TBD</div>
                      </el-collapse-item>
                    </el-collapse>
                  </span>
                </div>

                <div class="cv" ref='cv'>
                  <h1 id="cv">
                    CV
                  </h1>
                  <span>For my full academic CV, please click
                    <a href="Resume_LinFU _2020.pdf" target="_blank" type="application/pdf">here.</a>
                  </span>
                </div>

                <div class="enquiry" ref='enquiry'>
                  <h1 id="enquiry">
                    Enquiry
                  </h1>
                  <span>If you are willing to submit an enquiry, please click
                    <a href="Resume_LinFU _2020.pdf" target="_blank" type="application/pdf">here</a> in order to navigate to the Enquiry page.
                  </span>
                </div>

              </el-main>
            </el-col>
          </el-row>
        </el-container>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    navList: [
      {text: 'About me', isActive: true, value: 'about', key: 0},
      {text: 'Education', isActive: false, value: 'Education', key: 1},
      {text: 'Project', isActive: false, value: 'project', key: 2},
      {text: 'Work Experience', isActive: false, value: 'experience', key: 3},
      // {text: 'Work Experience', isActive: false, value: 'experience', top: document.getElementById('experience').offsetTop, key: 3}
      {text: 'CV', isActive: false, value: 'cv', key: 4},
      {text: 'Enquiry', isActive: false, value: 'enquiry', key: 5}
    ]
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // leftside scroll
    handleScroll(item) {
      if (item === 'about'
          || item === 'project'
          || item === 'Education'
          || item === 'experience'
          || item === 'cv'
          || item == 'enquiry') {
        var items = document.getElementById(item);
        window.console.log('items.offsetTop', items.offsetTop)
        window.scrollTo({
          top: items.offsetTop + 106,
          behavior:'smooth'
        })
      }
      // this.navList.map((item) => {
      //   item.top = document.getElementById('about').offsetTop
      // })
      let elementTop = document.documentElement.scrollTop || document.documentElement.scrollTop;
      this.navList.find((item, i) => {
        if (elementTop >= (document.getElementById(item.value).offsetTop + 86)) {
          this.navList.forEach(function(obj){
            obj.isActive = false;
          });
          this.navList[i].isActive = true
        } else if (elementTop <= document.getElementById('Education').offsetTop) {
          this.navList = [
            {text: 'About me', isActive: true, value: 'about', key: 0},
            {text: 'Education', isActive: false, value: 'Education', key: 1},
            {text: 'Project', isActive: false, value: 'project', key: 2},
            {text: 'Work Experience', isActive: false, value: 'experience', key: 3},
            {text: 'CV', isActive: false, value: 'cv', key: 4},
            {text: 'Enquiry', isActive: false, value: 'enquiry', key: 5}
          ]
        }
      })
    },
    // click handling left nav
    activeFun(data) {
      this.navList.forEach(function(obj){
        obj.isActive = false;
      });
      data.isActive = !data.isActive;
    },
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: left;

  .content {
    background: #181818;
    width: 100%;
    min-width: 900px;
    .aside {
      padding-top: 70px;
      position: fixed;
      z-index: 1;
      max-width: 200px;
      ul {
        li {
          border-bottom: 1px solid #333;
          padding: 5px 5px 5px 16px;
          cursor: pointer;
          &:first-child {
            border-top: 1px solid #333333;
          }
          &:hover {
            background: #c1bfbf;
            color: #fff;
          }
          .active {
            font-weight: bold;
          }
        }
      }
    }

    .main {
      margin-top: 20px;
      border-top-left-radius: 30px;
      background: rgba(0, 0, 0, 0.4);
      min-height: calc(100vh - 143px);

      .about {
        height: 200px;

        span {
          display: inline-block;
          float: left;
          width: calc(100% - 110px);
          word-break: break-all;
        }
        img {
          float: right;
          width: 100px;
        }
      }

      .Education, .experience {
        .collapse-box {
          margin-bottom: 20px;
          .edu-header .edu-header-title {
            width: 100%;
            display: flex;
            .img {
              img {
                width: 100px;
                margin: 10px 20px;
              }
            }
            .title {
            }
          }
        }

      }

      .project {
        .project-item {
          text-align: center;
          height: 200px;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 0 8px rgba(136, 136, 136, 0);
          transition: 0.8s;
          margin: 10px 0;
          &:hover {
            box-shadow: 0 0 8px rgba(136, 136, 136, 1);
          }
          img {
            width: 100%;
          }
          .item-img-box {
            background-color: rgba(0, 0, 0, 0.4);
            position: relative;
            width: 100%;
            height: 100%;
            top: -205px;
            opacity: 0;
            transition: 0.8s;
            &:hover {
              opacity: 1;
            }
            div {
              position: absolute;
              bottom: 10px;
              width: 88%;
              left: 6%;
              p {
                font-weight: bold;
                color: #000000;
              }
            }
          }
        }
        .project-card {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          .clearfix:before,
          .clearfix:after {
            display: table;
            content: "";
          }
          .clearfix:after {
            clear: both;
          }

          .box-card {
            max-width: 460px;

            .image {
              width: 100%;
              display: block;
              object-fit: cover;
              // height: 280px;
            }

            &:first-child {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h1 {
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 28px;
    line-height: 56px;
    color: whitesmoke;

    i {
      font-size: 2.25rem;
    }
  }

  span {
    color: #808080;
  }

  h4 {
    color: #696969;
  }

  li {
    padding-bottom: 10px;
  }
}
</style>