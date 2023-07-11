module.exports = {
    distDir: 'docs',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp3)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        })

        return config
    }
}