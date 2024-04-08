

$('#dot').hover(
  function() {
    $("#anther_cover").addClass("hoveredOn");
  },
);

$("#anther_close").click(function(event) {
  event.stopPropagation(); // 阻止点击事件冒泡
  $("#anther_cover").removeClass("hoveredOn");
});



$("#kuan").hover(function() {
  
  $("#kuan_cover").addClass("hoveredOn")
})

$("#kuan").hover(function() {
  $("#kuan_cover").addClass("hoveredOn");
});

$("#kuan_close").click(function() {
  $("#kuan_cover").removeClass("hoveredOn");
});

$("#roon").hover(function() {
  
  $("#roon_cover").addClass("hoveredOn")
})

$("#roon").hover(function() {
  $("#roon_cover").addClass("hoveredOn");
});

$("#roon_close").click(function() {
  $("#roon_cover").removeClass("hoveredOn");
});

$("#seba").hover(function() {
  
  $("#seba_cover").addClass("hoveredOn")
})

$("#seba").hover(function() {
  $("#seba").addClass("hoveredOn");
});

$("#seba_close").click(function() {
  $("#seba_cover").removeClass("hoveredOn");
});

    

  
  // 添加hover效果的事件监听器
$('#anther').hover(
  function() {
    $("#anther_cover").addClass("hoveredOn");
  },
);

// 监听窗口大小的变化
$(window).resize(function() {
  if ($(window).width() <= 968) { // 在小于等于768px的屏幕宽度下
    $('#anther').off('mouseenter mouseleave'); // 移除hover效果的事件监听器
  } else {
    // 如果大于768px的屏幕宽度，则重新添加hover效果的事件监听器
    $('#anther').hover(
      function() {
        $("#anther_cover").addClass("hoveredOn");
      },
    );
  }
});



