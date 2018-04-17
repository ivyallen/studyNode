var pingKey = ["replace_type", "ping_data", "dtype", "pf", "index", "refresh_type", "oid", "channel", "appversion", "chid","pv_type", "order_class", "loid",
    "exp", "cid", "soid", "order_source", "openApp", "seq", "sub_type", "loc", "server_data", "exp_action", "data","st"]

function verifyingRepeatedData(array) {
    var repeatData = [];
    //重复的字段赋给repeatData
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                repeatData.push(array[j])
            }

        }

    }
    if (repeatData.length == 0) {
        return true;
    }
    else {
        //重复的数据进行去重再返回
        if(repeatData.length==1){
            return repeatData;
        }
        else {
            return repeatData.sort().filter(function (a) {
                if (a != repeatData) {
                    repeatData = a;
                    //console.log(repeatData)
                    return repeatData;
                }
            })

        }
    }

}
function reportKeyCheck(checkKey,beCheckKey) {
    var missingKeys=[];
    beCheckKey.forEach(function (t) {
        if(checkKey.indexOf(t)==-1){
            missingKeys.push(t);
        }

    })
    if(missingKeys.length>0){
        return missingKeys;
    }
    else {
        return true;
    }

}
function correctURL(report) {
    if((report.includes('?') && report.includes('&')) == true){
        return true;
    }
    else
        return false;
}
function reportSplit(report) {
    var key=[];
    var value=[];
    report.split("?")[1].split("&").map(function (t) {
        return t.split('=')
    }).forEach(function (t) {
        key.push(t[0]);
        value.push(t[1]);
    })
    return {obj1:key,obj2:value};
}
function checkDateNull(objectReport) {
    var reObjectReport=[];
    for(var prop in objectReport){
        //console.log(objectReport[prop])
        if(objectReport[prop]==''){
            reObjectReport.push(prop);
        }
    }
    //console.log(reObjectReport);

    if(reObjectReport.length==0){
        return true;
    }
    else{
        return reObjectReport;
    }
}


function reportCheck(report) {
    var reportKey = [];         //存放请求的key数组
    var reportValue = [];       //存放请求的value数组
    var notKeyRepeat;            //Key是否重复
    var notMissingKey;           //key是否有缺失
    var notMoreKey;             //key是否有多余
    var reportSplitReturnObj;   //请求拆分返回的对象obj1为key的数组，obj2为value的数组
    var notDataNull;
    //判断请求是否含有'?'和'&'，若无return false
    if (correctURL(report) == true) {
        ;
    }
    else {
        return false;
    }

    //将请求中的key与value拆分
    reportSplitReturnObj=reportSplit(report);
    reportKey=reportSplitReturnObj.obj1;
    reportValue=reportSplitReturnObj.obj2;

    //验证key是否有重复，若有重复字段会返回key
    notKeyRepeat=verifyingRepeatedData(reportKey);
    if(notKeyRepeat==true){
        ;
    }
    else{
        return '\''+notKeyRepeat+ '\' is repeated.';
    }

    //验证key是否丢失，若有丢失返回丢失的key
    notMissingKey=reportKeyCheck(reportKey,pingKey);
    if(notMissingKey==true){
        ;
    }
    else{
        return '\''+notMissingKey+'\' is missing.';
    }
    //验证key是否有多余，若有多余返回多余的key
    notMoreKey=reportKeyCheck(reportKey,pingKey);
    if(notMoreKey==true){
        ;
    }
    else{
        return '\''+notMoreKey+'\' is more.';
    }
    //请求data保存为map形式
    var objectReport={}
    reportKey.forEach(function(t,index){
        key=t;
        value=reportValue[index];
        objectReport [key]=value;
    })


    //验证是否有值为空
    notDataNull=checkDateNull(objectReport);
    if(notDataNull==true){
        ;
    }
    else {
        return notDataNull+'的值为空';
    }

    return true;


}





function testReportCheck(){

    test = 'http://p.ssp.qq.com/p?replace_type=0&a=&tomczhang=0&ping_data=b21naWQ9NDg0YzBhMDJhOGJlOGU0MThjY2FkYjY5NjI2NWE2ODkwODQzMDAxMDExMGEwYSZxcT0wJmlwPTE4MC4xNTMuMjE5LjE1JnNvaWQ9QjQ5OURCMEY2NEM0NUFCQjU3QjQwQzY1QzQwMiZkaXNwbGF5X2lkPTkwMDAxJnVzZXJfaW5mbz1vQURqbWpjN0V4Q2cmZWNwbT1SVmlYNXBBRFdCd0hteEJjS3p0TGVLTjlyR3pyYUNEaiZjcGM9NW55RDRqNWxpakd0TEpzM3l2WS9lQ1hxVW5QRlVHMEMmaW5kdXN0cnlfaWQ9MzUwMSZhZHZlcnRpc2VyX2lkPTM2OTIyMTImcHJvZHVjdF9pZD0zMDUzNjUyMzU4JnByb2R1Y3RfdHlwZT0xMDAwJnN0YXR1c19jb2RlPTMzMiZkc3BfaXA9MTAuMjMxLjEzNC4yMyZvcmRlcl90eXBlPTI%3D&dtype=3&pf=iphone&index=1&refresh_type=2&oid=48451435&channel=news_news_finance&appversion=180402&chid=2&pv_type=0&order_class=0&loid=1&exp=0&cid=&soid=B499DB0F64C45ABB57B40C65C402&order_source=110&openApp=0&seq=4&sub_type=10&loc=App_Stream_news_news&server_data=c29pZD1CNDk5REIwRjY0QzQ1QUJCNTdCNDBDNjVDNDAyJnVwX3ZlcnNpb249IDEuMC40MQ%3D%3D&exp_action=0&data=Aejy45%2BNeSZw4VxymYnnIhMV%2BMEM%2B6sW9YStwv4s2apbZ1PpxG55cz04GajxbU9gURJINPNi%2BR90UE4JjkYfjWlhi6aMutu11%2Fu1BM4UOkL3G9jxcgyzw5smelogdsbpkOR4CNm7Up3zyH69HgZ8%2BC52o7SQJRDmunLmSQr2BMfe32qt5y1TAkGD4KHCFIoKfqbAp8ifZfEhm%2Ff5RdGuehXGLhATr%2Fvh%2FK3xQ%2BfM5%2FyAnJbPgV59OeHkyjL0L%2FiHDLJidhXi7EGh7%2FEerVyv7UIjUbSzuXN%2FCgeQJUGSy00RzXOvh5YdoqRs9xQEthePFshsl9a5%2FOE2Ro41EEoxeHWhRvHbrxAz44%2FtG8CmaOC6fl81GOp0QZyoaCYOv6ZW7R9M3qvezjPZ%2BAeB3H%2FS0bgW%2Fp67HlmJemGIGN9H%2FcbTQ6jcYh7B%2B%2FVkKq9tGAjg%2BAUDmddZfWPpICPLLiMb94FD3RkVnGjT4Ir7svVEt4T3l6%2FggUrEV2Pjwh8fGKotpgQsQUOycTQRxIgTcVMSDx%2FimTxVNh5jfVOT%2Fpeou9d7u4xt3br1T%2FA4d%2BoYK1W8JrIeRRM5z7cDzhQ7PTPM5Gx%2F0v6kSkEQerddWSFdEOQf87FTDvu0YyZ0RnCaGpAjlB121VyxJDT1RHoc8WFRyhmDvBz%2B4KdLdXQl%2BpBZB9C9kfggrQuq2SekY8JRY9gkqH9OcOJmqNJeIkh8MyuvA6%2Blm6rQb1JnARmJnQAHnMT7B6rnU4gkRNErvZ0zqVJza451iJ9rXxFpyLnQGnH6QMeZ6D9feLs%2B%2BFVsruTq47nI7h67U7haS5reATbNnmu%2BNeamokv3SgBnYomrhNMUFqkIk6XL1Xi6ek0h4Q4RJF5x%2FDb%2F3b5FfvGYwJviLgAFcaC9vljZo%2Fzt7CeHCbKm%2Bgu%2BfDTnaYK0Tw3Th8tDoaaPJ8SnH0pWAmJ42ni%2Fqcp4XhHQylvH40PWbKV%2F66%2BWJo%2BL%2BkBY9ELQj%2FAcmsbIFI8S64kilCfV9jh%2FIJj7xC2tIreUjgheq7CfbP9hc9pnMrNvl608OwUa%2FAHDq%2Fq9hML5h3pAHlVIOHZO%2FTElTD6jg07tegBrjuRBNvLO6vMym3Q%3D&st=0'
    testVerifyingRepeatedData1 = ['a', 'b', 'b', 'c', 'd', 'e', 'a', 'b', 'b', 'c', 'd', 'e', 'd', 'e', 'a', 'b', 'b', 'c'];
    testVerifyingRepeatedData2=['a','b','c','d'];
    console.log(reportCheck(test));
    //console.log(verifyingRepeatedData(testVerifyingRepeatedData1))
    //console.log(verifyingRepeatedData(testVerifyingRepeatedData2))
    //console.log(verifyingRepeatedData(testVerifyingRepeatedData))

}

testReportCheck()

