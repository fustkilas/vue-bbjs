module.exports = {
    files: {
        javascripts: {joinTo: 'app.js'},
        stylesheets: {joinTo: 'app.css'},
    },
    plugins: {
        babel: {
            presets: ['es2015']
        }
    }
}

