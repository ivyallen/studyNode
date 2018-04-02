var pingKey = ["replace_type", "ping_data", "dtype", "pf", "index", "refresh_type", "oid", "channel", "appversion", "chidpv_type", "order_class", "loid",
    "exp", "cid", "soid", "order_source", "openApp", "seq", "sub_type", "loc", "server_data", "exp_action", "data", "st"]
function verifyingRepeatedData(array) {
    var repeatedData=[];

    for(var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]==array[j])
            {
                repeatedData.push(array[j])
                // console.log(array[j]);
            }

        }

    }
    //foreach的方法遍历次数要比for循环多，暂时放弃
    // array.forEach(function (t) {
    //     array.forEach(function(y) {
    //         if (t == y) {
    //             repeatedData.push(y)
    //         }
    //     })
    // })

    if(repeatedData.length==0){
        return true
    }
    else {
        //重复的数据进行去重再返回
        var b;
        return repeatedData.sort().filter(function (a) {
            if(a!=b){
                b=a;
                return b;
            }
        })


    }
    
}



function reportToArray(stringReports) {
    reportKey = [];
    reportvalue = [];
    
    
    if ((stringReports.includes('?') && stringReports.includes('&')) == true) {
        //上报拆分为key和value两个数组
        stringReports.split("?")[1].split("&").map(function (t) {
            return t.split('=')
        }).forEach(function (t) {
            reportKey.push(t[0]);//存放请求的key数组
            reportvalue.push(t[1]);//存放请求的value数组
        })
        // console.log(reportKey)
        // console.log(reportvalue)

        console.log(reportKey)
        console.log(verifyingRepeatedData(reportKey))






        }



    else {
        console.log("请求格式不正确");
    }
}

test = 'http://p.ssp.qq.com/p?replace_type=0&ping_data=b21naWQ9NDg0YzBhMDJhOGJlOGU0MThjY2FkYjY5NjI2NWE2ODkwODQzMDAxMDExMGEwYSZxcT0wJmlwPTE4MC4xNTMuMjE5LjE1JnNvaWQ9QjQ5OURCMEY2NEM0NUFCQjU3QjQwQzY1QzQwMiZkaXNwbGF5X2lkPTkwMDAxJnVzZXJfaW5mbz1vQURqbWpjN0V4Q2cmZWNwbT1SVmlYNXBBRFdCd0hteEJjS3p0TGVLTjlyR3pyYUNEaiZjcGM9NW55RDRqNWxpakd0TEpzM3l2WS9lQ1hxVW5QRlVHMEMmaW5kdXN0cnlfaWQ9MzUwMSZhZHZlcnRpc2VyX2lkPTM2OTIyMTImcHJvZHVjdF9pZD0zMDUzNjUyMzU4JnByb2R1Y3RfdHlwZT0xMDAwJnN0YXR1c19jb2RlPTMzMiZkc3BfaXA9MTAuMjMxLjEzNC4yMyZvcmRlcl90eXBlPTI%3D&dtype=3&pf=iphone&index=1&refresh_type=2&oid=48451435&channel=news_news_finance&appversion=180402&chid=2&pv_type=0&order_class=0&loid=1&exp=0&cid=&soid=B499DB0F64C45ABB57B40C65C402&order_source=110&openApp=0&seq=4&sub_type=10&loc=App_Stream_news_news&server_data=c29pZD1CNDk5REIwRjY0QzQ1QUJCNTdCNDBDNjVDNDAyJnVwX3ZlcnNpb249IDEuMC40MQ%3D%3D&exp_action=0&data=Aejy45%2BNeSZw4VxymYnnIhMV%2BMEM%2B6sW9YStwv4s2apbZ1PpxG55cz04GajxbU9gURJINPNi%2BR90UE4JjkYfjWlhi6aMutu11%2Fu1BM4UOkL3G9jxcgyzw5smelogdsbpkOR4CNm7Up3zyH69HgZ8%2BC52o7SQJRDmunLmSQr2BMfe32qt5y1TAkGD4KHCFIoKfqbAp8ifZfEhm%2Ff5RdGuehXGLhATr%2Fvh%2FK3xQ%2BfM5%2FyAnJbPgV59OeHkyjL0L%2FiHDLJidhXi7EGh7%2FEerVyv7UIjUbSzuXN%2FCgeQJUGSy00RzXOvh5YdoqRs9xQEthePFshsl9a5%2FOE2Ro41EEoxeHWhRvHbrxAz44%2FtG8CmaOC6fl81GOp0QZyoaCYOv6ZW7R9M3qvezjPZ%2BAeB3H%2FS0bgW%2Fp67HlmJemGIGN9H%2FcbTQ6jcYh7B%2B%2FVkKq9tGAjg%2BAUDmddZfWPpICPLLiMb94FD3RkVnGjT4Ir7svVEt4T3l6%2FggUrEV2Pjwh8fGKotpgQsQUOycTQRxIgTcVMSDx%2FimTxVNh5jfVOT%2Fpeou9d7u4xt3br1T%2FA4d%2BoYK1W8JrIeRRM5z7cDzhQ7PTPM5Gx%2F0v6kSkEQerddWSFdEOQf87FTDvu0YyZ0RnCaGpAjlB121VyxJDT1RHoc8WFRyhmDvBz%2B4KdLdXQl%2BpBZB9C9kfggrQuq2SekY8JRY9gkqH9OcOJmqNJeIkh8MyuvA6%2Blm6rQb1JnARmJnQAHnMT7B6rnU4gkRNErvZ0zqVJza451iJ9rXxFpyLnQGnH6QMeZ6D9feLs%2B%2BFVsruTq47nI7h67U7haS5reATbNnmu%2BNeamokv3SgBnYomrhNMUFqkIk6XL1Xi6ek0h4Q4RJF5x%2FDb%2F3b5FfvGYwJviLgAFcaC9vljZo%2Fzt7CeHCbKm%2Bgu%2BfDTnaYK0Tw3Th8tDoaaPJ8SnH0pWAmJ42ni%2Fqcp4XhHQylvH40PWbKV%2F66%2BWJo%2BL%2BkBY9ELQj%2FAcmsbIFI8S64kilCfV9jh%2FIJj7xC2tIreUjgheq7CfbP9hc9pnMrNvl608OwUa%2FAHDq%2Fq9hML5h3pAHlVIOHZO%2FTElTD6jg07tegBrjuRBNvLO6vMym3Q%3D&st=0'
reportToArray(test)

// testVerifyingRepeatedData=['a','b','b','c','d','e','a','b','b','c','d','e','d','e','a','b','b','c'];
// console.log(verifyingRepeatedData(testVerifyingRepeatedData))