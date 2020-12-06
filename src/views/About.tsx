import { defineComponent } from "vue";
import Echarts from "@/components/Echarts";

export default defineComponent({
  data() {
    return {
      name: "Yexk",
    };
  },
  render() {
    return (
      <>
        <h1>{this.name} About</h1>
        <div>
          <Echarts msg="Page"></Echarts>
        </div>
      </>
    );
  },
});
