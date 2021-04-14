window.onload = function(){
    var allChecked = document.getElementById("allChecked");
    var itemChecked = document.getElementsByClassName("item_checked");
// function1 功能：allCheck被点击，获取全部aihao的checkbox
        // 遍历获取每一个checkbox，使其状态与allCheck相同（全选或不选）
    allChecked.onclick = function(){
        for(var i = 0; i < itemChecked.length; i++){
            itemChecked[i].checked = allChecked.checked;
        }
    }
// function2 功能：取消某一个checked 全选也取消,itemChecked全选 全选也被选中
    // 对以上数组进行遍历
    var allChild = itemChecked.length;
    for (var i = 0; i < itemChecked.length; i++) {
        // 点击事件：
        itemChecked[i].onclick = function(){
            var allChildCount = 0;
            // 复选框总量 = 被选中的总量-->checked全选框
            // 复选框总量 != 被选中的总量-->not checked全选框
            // 计算被选中的总量
            for(var i = 0; i < itemChecked.length; i++) {
                if(itemChecked[i].checked){
                    allChildCount ++;
                }
            }
            allChecked.checked = (allChildCount == allChild);
        }
    }
}