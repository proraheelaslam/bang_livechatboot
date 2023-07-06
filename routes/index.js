var express = require('express');
var router = express.Router();
const token = '7xiFFu6NiMGmHwvB';
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', userController.getUsers);

router.get('/chatboot', function(req, res, next) {
   // check if verification token is correct
   if (req.query.token !== token) {
    return res.sendStatus(401); // if not, return unauthorized error
   }
   // return challenge
   return res.end(req.query.challenge);
});

router.post('/chatboot', userController.bootSendMessage);
// router.get('/chatboot', function(req, res, next) {
//      // check if verification token is correct
//       if (req.query.token !== token) {
//         return res.sendStatus(401);
//       }
//     // print request body
//     console.log(req.body);
//     // return a text response
//     const data = {
//         responses: [
//             {
//                 type: 'randomText',
//                 messages: ['Hi', 'Hello']
//             }
//         ]
//     };
//     res.json(data);
// });


module.exports = router;
