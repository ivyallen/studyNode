var sspPingReport = 'p.ssp.qq.com';
var sspClickReport= 'c.ssp.qq.com';
var sspDp3Reoprt='op.ssp.qq.com';
var spaPingReport='v.gdt.qq.com';



//筛选请求处理的请求,如：曝光上报、点击上报
exports.filterReq= function(req) {

    switch (req.data.url.split('/')[2]){
        case  sspPingReport : return true;break;
        case  sspClickReport: return true;break;
        case  sspDp3Reoprt: return true;break;
        case  spaPingReport: return true;break;

        default :false

    }
}

