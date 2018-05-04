<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in pics" :key="index">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
      return{
          pics:[]
      }
  },
  methods:{
      getPics(){
          axios({
              url:"http://www.escook.cn:3000/api/getlunbo"
          }).then(res => {
              console.log(res);
              this.pics = res.data.message;
          });
      }
  },
  created(){
      this.getPics();
  }
}
</script>
<style scope>
    .mint-swipe{
        height: 157px;
    }
    .mint-swipe-item img{
        width: 100%;
    }
    .mui-table-view-cell img{
        width: 60%
    }

    .mui-grid-view.mui-grid-9{
        background-color: white;
    }
</style>