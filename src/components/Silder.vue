<template>
  <div class="header_menu">
    <ul class="header_one_menu">
      <div class="shu_start"></div>
      <li
        v-for="(item, i) in menuList"
        :key="i"
        :class="{ active_menu: activeIndex == i }"
        @click="menuClick(item, i)"
        :ref="'menu' + i"
      >
        <em :class="item.icon"></em>
        <span>{{ item.name }}</span>
        <i class="el-icon-arrow-down" v-if="item.children"></i>
        <div class="shu"></div>
      </li>
      <li
        class="my-tabs__active-bar"
        :style="navStyle"
        ref="myTabsActiveBar"
      ></li>
    </ul>
    <transition name="el-zoom-in-top">
      <ul class="header_two_menu" v-show="menuTwo">
        <li
          v-for="(item, i) in menuList[activeIndex].children"
          :key="i"
          :class="{ active_menu_two: item.url == urls }"
          @click="menuClickTwo(item, i)"
        >

          <span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "silder",
  data() {
    return {
      menuList: [
        {
          name: "首页",
          url: "index",
          icon: "el-icon-house",
        },
        {
          name: "test",
          children: [
            {
              name: "test3",
              url: "test3",
            },
            {
              name: "test1",
              url: "test1",
            },
            {
              name: "test",
              url: "test",
            },
          ],
        },
      ],
      activeIndex: 0,
      navStyle: 0,
      urls: "",
      menuTwo: false,
    };
  },
  mounted() {
    this.defaultMenu();
  },
  methods: {
    //点击菜单
    menuClick(obj, i) {
      this.subscript(i)
      this.activeIndex = i;
      if (this.menuList[i].children && this.menuList[i].children.length > 0) {
        this.$parent.$parent.heights = `85px`;
        this.menuTwo = true;
      } else {
        if (obj.url) {
          this.$router.push(obj.url);
          this.url = obj.url;
        }
        this.$parent.$parent.heights = `60px`;
        this.menuTwo = false;
      }
    },
    //点击第二级菜单
    menuClickTwo(item,i){
        if(item.url){
          this.urls = item.url
          this.$router.push(item.url)
        }
    },
    defaultMenu(){
      let path =this.$route.path.substr(1);
      this.urls = path;
      this.menuList.map((item,i)=>{
        if(item.children&&item.children.length>0){
          item.children.map((data,j)=>{
            if(data.url==path){
              this.menuClick(item,i)
            }
          })
        }else{
           if(item.url==path){
            this.activeIndex = i;
            this.subscript(i)
          }
        }
      })
    },
    //下标
    subscript(i){
       let dom = this.$refs["menu" + i][0];
              this.$refs.myTabsActiveBar.style.cssText = `width: ${
                dom.offsetWidth - 32
              }px; transform: translateX(${dom.offsetLeft}px);`;
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
//头部菜单
.header_menu {
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 0 0px 0;
  background: rgba(0, 6, 45, 0.9);

  //一级菜单
  .header_one_menu {
    display: flex;
    //   margin-bottom: 4px;
    position: relative;
    height: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 100%;
      height: 4px;
      // background-color: #e4e7ed;
      z-index: 10;
    }
    .my-tabs__active-bar {
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 4px;
      background-color: #95de53;
      z-index: 100;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
    }
    .shu_start,
    .shu {
      width: 1.5px;
      height: 30px;
      position: absolute;
      right: -0.5px;
      top: 15px;
      background: #426794;
      z-index: 2;
    }
    .shu_start {
      left: 0;
    }
    li {
      min-width: 80px;
      text-align: center;
      cursor: pointer;
      // background: #4e4e4e;
      color: #fff;
      padding: 0 16px;
      font-size: 18px;
      height: 100%;
      line-height: 60px;
      position: relative;
      &:hover {
        color: #fff;
        background: rgba(63, 94, 142, 0.8);
      }
      i {
        float: right;
        height: 100%;
        margin-right: 6px;
        line-height: 60px;
      }
      span {
        margin-left: 6px;
      }
    }
    .active_menu {
      color: #fff;
      background: rgba(63, 94, 142, 0.8);
      i {
        animation: rotation 0.2s linear forwards;
      }
    }
  }
  //二级菜单
  .header_two_menu {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 24px;
    font-size: 14px;
    position: absolute;
    bottom: -26px;
    left: 0;
    border-top: solid 1px rgba(45, 69, 159, 0.5);
    border-bottom: solid 2px rgb(45, 69, 159);
    background: rgba(0, 6, 45, 0.9);
    z-index: 1000;
    li {
      min-width: 70px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      position: relative;
      display: flex;
      align-items: center;
      &:hover {
        color: #6ce9ee;
      }
      span {
        width: 100%;
        height: 20px;
        padding: 0 4px;
        border-right: 1.5px solid #8090b4;
      }
      &:first-child {
        span {
          border-left: 1.5px solid #8090b4;
        }
      }
    }
    .active_menu_two {
      color: #6ce9ee;
    }
  }
}
</style>