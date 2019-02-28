
let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js', //точка входа
    output: {   //выход 
        path: path.resolve(__dirname, './dist'),  //корректныйй путь до нужной папки
        filename: 'main.js',  //название файла  для вывода
        publicPath: 'dist/'  //для того, чтобы можно было бы запускать сервер и вносить изменения на лету и видеть их(запуск через mpn run dev + удалить папку dist, еси она была создана, а можно и не удалять)
    },
    devServer:{
        overlay: true  //нужна для того,чтобы в окне браузера сразу писалась ошибка,если она есть в коде
    },
    module: {
        rules: [
            { //правила для обработки модулей(файлы css и т.п.)
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules/'
            },
            { //правила для обработки модулей(файлы css и т.п.)
                test: /\.css$/,
                /*use: [
                    'style-loader', //считывает файл и возвращает в конктретной интерпритации
                    'css-loader' //
                ],*/
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
      ],
    devtool: 'eval-sourcemap' //чтобы смотреть карту сайта коррекктно, а именно в консоли вывод строк js из какого файла, при этом карта сайта увеличивает код в main.js
};


module.exports = conf;


/*Карты входа, настроиваемый самостоятельно(сами объяснем системе какую нужно строить карту сайта) при которой оздается отдельный файл-карта*/
/*Для активации нужно убрать module.exports = conf; и devtool: 'eval-sourcemap' */
/*module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? 'sourсe-map' : 'eval-sourcemap';

    return conf;
};*/
/*конец*/
