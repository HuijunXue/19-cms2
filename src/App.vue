<template>
  <div id="app">
  <mt-header title="CMS" fixed>
    <mt-button icon="back" slot="left" v-if="$route.path != '/home'" @click="$router.go(-1)">返回</mt-button>
  </mt-header>
  <div class="page">
    <router-view/>
  </div>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
  body{
    background-color: white;
  }
  .page{
    margin: 40px 0 50px 0;
  }
</style>
