import { defineComponent, ref } from "vue";

interface T {
  abc: number;
  test: () => number;
}

export default defineComponent({
  data() {
    return {
      name: 'Yexk'
    }
  },
  setup() {
    const count = ref<T>({
      abc: 123123,
      test() {
        return 123123
      }
    })
    count.value.abc++
    return {
      count
    }
  },
  render() {
    return (
      <>
        <h1>{this.name} About</h1>
        <div>
          {this.count.abc}
          <br />
          {this.count.test()}
        </div>
      </>
    );
  },
});
