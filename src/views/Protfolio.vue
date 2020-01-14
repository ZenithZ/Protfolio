<template>
  <div>
    <article>
      <section>
        <el-container>
          <el-row class="content">
            <el-col :span="4">
              <el-aside class="aside" width="100%">
                <ul>
                  <!-- links -->
                  <li>
                    <a href="#about">About-me</a>
                  </li>
                  <li>
                    <a href="#Education">Eduacation</a>
                  </li>
                  <li>
                    <a href="#project">Project</a>
                  </li>
                  <li>
                    <a href="#WorKExperience">Work Experience</a>
                  </li>
                </ul>
              </el-aside>
            </el-col>
            <el-col :span="20">
              <el-main class="main">
                <!-- about -->
                <div class="about">
                  <h1 id="about">
                    About Me
                    <i class="fas fa-user-circle"></i>
                  </h1>
                  <img src="../assets/under_construction.png" alt />
                  <span>
                    My name is Lin Fu. Also known as Flynn and ZenithZ.
                  </span>
                </div>
                
                <!-- Education -->
                <div class="Education">
                  <h1 id='Education'>
                    Education
                  </h1>
                  <span>
                    <el-collapse accordion>
                      <el-collapse-item>
                        <template slot="title">
                          <div class="edu-header">
                            <div class="edu-header-title">
                              <div class="img">
                                <img src="../assets/unimelb_icon.jpg" alt="UniMelb">
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
                    <!-- <ul>
                      <li>
                        Graduate of
                        <strong>Bachelor of Computer Science and Technology</strong> majoring
                        <strong>Computer Science</strong> and
                        <strong>Information Systems</strong> from @
                        <strong>The University of Sydney</strong>.
                      </li>
                      <li>
                        First year
                        <strong>Master of Information Technology</strong> specialising
                        <strong>Human Computer Interaction</strong> at @
                        <strong>The University of Melbourne</strong>.
                      </li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                      <li>aaa</li>
                    </ul> -->
                  </span>
                </div>

                <!-- project -->
                <div class="project">
                  <h1 id='project'>
                    Projects
                  </h1>
                  <span>
                    <ul>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                    </ul>
                  </span>
                </div>
                
                <!-- WorKExperience -->
                <div>
                  <h1 id='WorKExperience'>
                    Work Experience
                  </h1>
                  <span>
                    <ul>
                      <li>
                        <strong>Academic Tutor</strong> for
                        <strong>Human Computer Interaction</strong> at @
                        <strong>USYD</strong>
                      </li>
                      <li>
                        <strong>PoCT Customer and Product Support Officer</strong> at @
                        <strong>NSW Health Pathology</strong>
                      </li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tbd</li>
                    </ul>
                  </span>
                </div>
                
              </el-main>
            </el-col>
          </el-row>
        </el-container>
        <!-- <h1>
          About Me
          <i class="fas fa-user-circle"></i>
        </h1>
        <br />
        <img src="@/assets/under_construction.png" alt />
        <span>
          My name is Lin Fu. Also known as Flynn and ZenithZ.
          <br />
          <br />
          <h4>
            <b>Eduacation</b>
          </h4>
          <ul>
            <li>
              Graduate of
              <b>Bachelor of Computer Science and Technology</b> majoring
              <b>Computer Science</b> and
              <b>Information Systems</b> from @
              <b>The University of Sydney</b>.
            </li>
            <li>
              First year
              <b>Master of Information Technology</b> specialising
              <b>Human Computer Interaction</b> at @
              <b>The University of Melbourne</b>.
            </li>
          </ul>
          <h4>
            <b>Work Experiences</b>
          </h4>
          <ul>
            <li>
              <b>Academic Tutor</b> for
              <b>Human Computer Interaction</b> at @
              <b>USYD</b>
            </li>
            <li>
              <b>PoCT Customer and Product Support Officer</b> at @
              <b>NSW Health Pathology</b>
            </li>
            <li>tbd</li>
          </ul>
          <h4>
            <b>Projects</b>
          </h4>
          <ul>
            <li>tbd</li>
          </ul>
        </span>-->
      </section>
    </article>

    <article class="main-image">
      <section class="container">
        <h1>Welcome to ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('ZenithZ')">Check it out</button>
      </section>
    </article>

    <!-- <article id="ZenithZ" class="white-section">
      <section class="container">
        <h3>You might know me as ZenithZ</h3>
        <span>blah blah blah</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Flynn')"> Next section</button>
      </section>
    </article>

    <article id="Flynn" class="blue-section">
      <section class="container">
        <h2>You might also know me as Flynn</h2>
        <h4>blah blah blah</h4>
        <button class="btn btn-xl btn-dark" @click="scrollTo('projects')"> Next section</button>
      </section>
    </article>

    <article id="projects" class="white-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project,index) in recentProjects" :key="index">
            <a href="" class="protfolio-item">
              <span class="caption">
                <span class="caption-content">
                  <h2> {{ project.title }} </h2>
                  <p class="mb-0"> {{ project.description }} </p>
                </span>
              </span>
              <img class="img-fluid" :src="require('../assets/'+project.img)"> 
            </a>  
          </div>
        </div>
      </section>
    </article>

    <article id="contact" class="white-section">
      <section class="container">
        <h3>Enquires</h3>
        <span>form tobe constructed</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Home')"> Back to top</button>
      </section>
    </article>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  text-align: left;
  // padding-top: 8%;
  // padding-left: 5%;

  .content {
    background: #efefef;
    margin-top: 86px;
    width: 100%;
    min-width: 900px;
    .aside {
      padding-top: 70px;
      ul {
        li {
          border-bottom: 1px solid #333;
          padding: 5px 5px 5px 16px;
          &:first-child {
            border-top: 1px solid #333333;
          }
        }
      }
    }

    .main {
      margin-top: 20px;
      border-top-left-radius: 30px;
      background: #fff;
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
      
      .Education {
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
  }

  h1 {
    font-weight: bold;
    // text-decoration: underline;
    margin-bottom: 28px;
    color: #000000;

    i {
      font-size: 2.25rem;
    }
  }

  span {
    color: #c0c0c0;
  }

  h4 {
    color: #696969;
  }

  li {
    padding-bottom: 10px;
  }
}
</style>