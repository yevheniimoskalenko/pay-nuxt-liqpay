const {
  Schema,
  model
} = require("mongoose")

const Pay = new Schema({
  amount: {
    type: String
  },
  payment_id: {
    type: Number
  },
  status: {
    type: String
  },
  order_id: {
    type: String
  },
  userId: {
    type: String

  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('pay', Pay)
