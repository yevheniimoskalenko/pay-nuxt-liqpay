const LiqPay = require('liqpayjs-sdk');
module.exports = async (req, res) => {
    const { amount } = req.body
    const public_key = "sandbox_i60561439950"
    const private_key = "sandbox_FYJPFYbeddSheWm20U31UPdgZ6mnpmXnLsTGRemV"
    const liqpay = new LiqPay(public_key, private_key);
    const html = liqpay.cnb_form({
        'action': 'pay',
        'amount': amount,
        'currency': 'USD',
        'description': 'description text',
        'order_id': 'order_id_2',
        'version': '3'
    });
    // console.log(html)
    return res.send(html)
}