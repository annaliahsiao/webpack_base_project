module.exports = {
    plugins: [ "@vue/babel-plugin-jsx" ],
    presets: [
        ["@babel/preset-env", {
            "targets": {
            "browsers": ["last 1 chrome version"]
        }
        }]
    ],
    
}