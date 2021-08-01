
module.exports ={
    configureWebpack: {
        plugins: [],
    },
    publicPath: process.env.NODE_ENV === "production" ? "/book-of-war/" : "/"
}