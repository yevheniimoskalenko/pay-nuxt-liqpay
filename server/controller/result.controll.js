const LiqPay = require('liqpayjs-sdk');
const Base64 = require('js-base64').Base64;
const Pay = require('../model/pay.model')

const sha1 = require('sha1')
module.exports = (req, res) => {
  const private_key = "sandbox_FYJPFYbeddSheWm20U31UPdgZ6mnpmXnLsTGRemV"
  const public_key = "sandbox_i60561439950"
  const {
    signature,
    data
  } = req.body
  const sign = Base64.encode(sha1(private_key + data + private_key))
  if (signature != sign) {
    const datas = JSON.parse(Base64.decode(data))
    const UserId = JSON.parse(Base64.decode(datas.dae))
    const pay = new Pay({
      amount: datas.amount,
      payment_id: datas.payment_id,
      status: datas.status,
      order_id: datas.order_id,
      userId: UserId.userid

    })
    pay.save();
    // console.log(dae)
    //    const {payment_id,status,} = datas
  }
}
