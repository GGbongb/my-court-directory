document.addEventListener("DOMContentLoaded", function() {
  // 模拟法院数据，实际应用中需替换为真实数据
  var courts = [
    { name: "北京市人民法院", address: "北京市东城区东交民巷27号", phone: "010-12345678" },
    { name: "上海市人民法院", address: "上海市黄浦区人民大道123号", phone: "021-87654321" },
    // 添加更多法院信息
  ];

  var courtList = document.getElementById("court-list");

  // 动态生成法院列表
  courts.forEach(function(court) {
    var li = document.createElement("li");
    li.innerHTML = "<strong>" + court.name + "</strong><br>" + court.address + "<br>电话：" + court.phone;
    courtList.appendChild(li);
  });
});
