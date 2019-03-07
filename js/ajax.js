$.ajax({
    url:AJAX_CONFIG.entryCheckinSwitch,
    type:'POST',
    headers:{
        "X-CSRFToken":RENDER.csrf_token
    },
    beforeSend: function () {
        // 禁用按钮防止重复提交
        $("#submit").attr({ disabled: "disabled" });
    },
    data:{
        entry_id:entryId,
        groupNumber:groupNumber
    },
    success:function(res){

    },
    complete: function () {
        $("#submit").removeAttr("disabled");
    },
    error:function(err){
        $alertMsg.html(err);
        $alert.show();
    }
});