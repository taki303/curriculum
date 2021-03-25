var app = new Vue({
    el: '#app',
    data: {
        keyword: '',
        list: [],
        addText: '',
        
        
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    
    methods: {
        
        
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    },
    computed: {
		remain: function() {
            
			var count = 0;

			var lis = this.list;
			
			for(var i = 0; i < lis.length; i++) {
				if(!lis[i].isChecked) {
					count++;
				}
			}
			return count;
		},
        result: function (){
            let dic = [];
            var lis = this.list;
            if(this.keyword !== ''){
                for(var i = 0; i < lis.length;i++){
                    if(lis.indexOf(this.keyword) !== -1){
                        dic.push(lis[i])
                        
                    }
                }   return dic;
            }
            

        }
    }
});



