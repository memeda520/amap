<template>
    <el-container class="home" direction="vertical">
        <v-head ref="header"></v-head>
        <el-main class="main">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view  ></router-view>
                </keep-alive>
            </transition>
            <!-- <el-backtop target=".content"></el-backtop> -->
        </el-main>
    </el-container>
</template>

<script>
import vHead from './Header.vue';

export default {
    data() {
        return {
            tagsList: [],
         
        };
    },
    components: {
        vHead,
    },
    created() {
       
    },
    mounted() {
      
    },
    methods: {
      
    },
};
</script>

<style lang="scss">

.main{
    padding: 0px;
}
</style>