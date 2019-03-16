// 实例化 vue 对象
new Vue({
    el: "#vue-app",
    data: {
        // name: "zby",
        // job: "Web 开发",
        // website:"https://www.google.com",
        // websiteTag: "<a href='https://www.google.com'>websiteTag</a>"

        age:12,
        x:0,
        y:0
    },
    methods:{
        // greet: function(time) {
        //     return "Good" + time + this.name + "!";
        // }
        add:function (inc) {
            this.age += inc;
        },
        subtract:function (dec) {
            this.age -= dec;
        },
        updateXY: function (envent) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        StopMoving: function () {
            event.stopPropagation();
        },
        alert: function () {
            alert("hello");
        }
    }
});

/*
    el:element 需要获取的元素，一定是 html 中的跟容器元素
    data:用于数据的存储
    methdos:用处存储各种方法
    data-binding: 给属性绑定对应的值
*/
