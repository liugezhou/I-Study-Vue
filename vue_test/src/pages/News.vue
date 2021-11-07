<template>
  <div>
		<h2 :style="{opacity}">定时器</h2>
    <ul>
      <li v-for="item in NewsList" :key="item.id">
        <router-link
          replace
          :to="{
            name: 'newsDetail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
           </router-link>
					 <input type="text" />
        &nbsp;&nbsp;
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
			opacity:1,
      NewsList: [
        { id: "001", title: "News01" },
        { id: "002", title: "News02" },
        { id: "003", title: "News03" },
      ],
    };
  },
	destroyed() {
		console.log('News销毁了')
	},
	// New出现在眼前
	activated() {
		this.timer = setInterval(() => {
			console.log('$')
			if(this.opacity < 0) {
				this.opacity = 1
			}
			this.opacity -=0.01
		}, 10);
	},
	// News消失在窗口
	deactivated() {
		clearInterval(this.timer)
	},
	mounted() {
		
	},
};
</script>