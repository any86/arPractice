var ghpages = require('gh-pages');

// 发布
ghpages.publish('./dist', {
    branch: 'gh-pages',
}, function(err) {
    console.log('同步gh-pages完成!');
});