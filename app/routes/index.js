
const { Router } = require('express');

const router = Router();

router.route('/status').get((request, response) => {
  return response.status(200).send({
    message: "** 🚀 EnjoyIn! API is running! **"
  });
});

router.use('/auth', require('./auth.routes'));
// router.use('/episodios', require('./episodio.routes'));
// router.use('/series', require('./serie.routes'));
// router.use('/notification', require('./notification.routes'));
// router.use('/pay', require('./payment.routes'));
// router.use('/payment', require('./payment.routes'));
// router.use('/transaction', require('./transaction.routes'));
// router.use('/company', require('./company.routes'));
// router.use('/customer', require('./customer.routes'));
// router.use('/email', require('./email.routes'));

module.exports = router;