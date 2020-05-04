const LiqPay = require('liqpayjs-sdk');
module.exports = async (req, res) => {
  const {
    amount
  } = req.body
  const public_key = "sandbox_i60561439950"
  const private_key = "sandbox_FYJPFYbeddSheWm20U31UPdgZ6mnpmXnLsTGRemV"
  const user = Base64.encode(JSON.stringify({
    "userid": "diawkuhdwaidh321"
  }));
  const liqpay = new LiqPay(public_key, private_key);
  const html = liqpay.cnb_form({
    'action': 'pay',
    'amount': amount,
    'currency': 'UAH',
    'description': 'description text',
    'order_id': Math.floor(Math.random() * 99999),
    'version': '3',
    'dae': user
  });

  return res.send(html)
}
