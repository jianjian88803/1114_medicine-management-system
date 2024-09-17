const base = {
    get() {
        return {
            url : "http://localhost:8080/yiyaoguanlixitong/",
            name: "yiyaoguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiyaoguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医药管理系统"
        } 
    }
}
export default base
