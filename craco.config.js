const CracoAntDesignPlugin = require("craco-antd");

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@primary-color": "#1DA57A",
                    "@link-color": "#1DA57A"
                }
            }
        }
    ]
};