.<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为:{{ sum }}</h3>
    <h3>列表中第一个名字为：{{ firstName }}</h3>
    <div>
      <input type="text" v-model="inputName" />
      <button @click="addPer">添加</button>
      <button @click="addWang">添加姓王的人</button>
      <button @click="asyncAdd">异步获取一个数据</button>
    </div>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      inputName: "",
    };
  },
  computed: {
    sum() {
      return this.$store.state.CountAbout.sum;
    },
    personList() {
      return this.$store.state.PersonAbout.personList;
    },
    firstName() {
      return this.$store.getters["PersonAbout/firstPersonName"];
    },
  },
  methods: {
    addPer() {
      if (this.inputName) {
        let person = {
          id: nanoid(),
          name: this.inputName,
        };
        this.$store.commit("PersonAbout/ADD_PERSON", person);
        this.inputName = "";
      }
    },
    addWang() {
      console.log(this);
      this.$store.dispatch("PersonAbout/addPersonWang", {
        id: nanoid(),
        name: this.inputName,
      });
      this.inputName = "";
    },
    asyncAdd(){
      this.$store.dispatch('PersonAbout/addPersonServer')
    }
  },
};
</script>

<style>
</style>