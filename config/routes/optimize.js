const { getOptimizedValue } = require('../../controller/optimize_controller');

module.exports = function(app){
    app.get('/optimize', getOptimizedValue);
}