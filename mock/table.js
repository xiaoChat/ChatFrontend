const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    username: '@string(2,5)',
    age: '@integer(10, 60)',
    address: '@sentence(10, 20)'
  }]
})

module.exports = [
  {
    url: `/user/list`,
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        msg: 'success',
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: `/user/add`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        msg: 'success',
        data: {
          success: "success"
        }
      }
    }
  },
]