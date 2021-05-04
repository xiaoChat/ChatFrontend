// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require("mockjs");

const data = Mock.mock({
  token: "@string(32)",
  "items|30": [
    {
      id: "@id",
      username: "@string(2,5)",
      age: "@integer(10, 60)",
      address: "@sentence(10, 20)"
    }
  ]
});

module.exports = [
  {
    url: `/user/login`,
    type: "post",
    response: () => {
      const { items, token } = data.items;
      return {
        code: 200,
        message: "success",
        data: {
          token: token,
          userinfo: items
        }
      };
    }
  },
  {
    url: `/user/register`,
    type: "post",
    response: () => {
      const { items, token } = data.items;
      return {
        code: 200,
        message: "success",
        data: {
          token: token,
          userinfo: items
        }
      };
    }
  },
  {
    url: `/user/add`,
    type: "post",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: {
          success: "success"
        }
      };
    }
  }
];
