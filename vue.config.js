// 给路径起别名
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
              'assets':'@/asstes',  
              'components':'@/components',  
              'network':'@/network',  
              
            }
        }
    }
}