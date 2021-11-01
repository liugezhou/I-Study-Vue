.<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为:{{sum}}</h3>
    <div>
      <input type="text" v-model="inputName" />
      <button @click="addPer">添加</button>
    </div>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      inputName: "",
    };
  },
  computed: {
    ...mapState(["personList","sum"]),
  },
  methods: {
    addPer() {
      if (this.inputName) {
        let person = {
          id: nanoid(),
          name: this.inputName,
        };
        this.$store.commit("ADD_PERSON", person);
        this.inputName=''
      }
    },
  },
};
</script>

<style>
</style>