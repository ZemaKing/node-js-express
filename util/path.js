const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

// Alternative
// module.exports = path.dirname(require.main.filename);
