import { UserData } from '@/api/interface/user';
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      name: 'Yexk'
    }
  },
  setup() {
    const user = ref<Array<UserData>>();
    return {
      user
    }
  },
  render() {
    const tr = this.user?.map(v => {
      return (
        <tr>
          <td>{v.id}</td>
          <td>{v.username}</td>
          <td>{v.age}</td>
          <td>{v.address}</td>
        </tr>
      )
    })
    return (
      <>
        <h1>{this.name} API Demo</h1>
        <table>
          {tr}
        </table>
      </>
    );
  },
});
