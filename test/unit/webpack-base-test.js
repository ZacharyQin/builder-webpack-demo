const assert = require('assert');
const path = require('path')
describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js');
    const basePath = path.join(__dirname, '../smoke/template/src/')
    it('entry', () => {
        assert.equal(baseConfig.entry.index, path.join(basePath, 'index/index.js').replace(/\\/g, '/'))
        assert.equal(baseConfig.entry.search, path.join(basePath, 'search/index.js').replace(/\\/g, '/'))
    })
})