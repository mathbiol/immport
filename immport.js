console.log('immport.js')

// config
ImmPort={
    // from hackign through the web page it looks like the serarch service is
    // rooted at a "search-facet" JSON service. No documentation was found.
    // an example of search migh be as ugly as
    // http://www.immport.org/immport-open/search/immport-share/search-facet?q=&fq=clinicalTrial%3A(%22N%22)&hl.simple.pre=%3Cspan+class%3D%22search-highlight-term+search-highlight-mark%22%3E&hl.simple.post=%3C%2Fspan%3E&start=0&rows=10
    searchRoot:'http://www.immport.org/immport-open/search/immport-share/search-facet',
    searchUrl:'https://script.google.com/a/macros/mathbiol.org/s/AKfycby4NWHJERwnuoUvz2nui9rJMAuwx-NF7mhNm31ElYsC0M0qm78X/exec'
}

ImmPort.job={}
ImmPort.get=function(parms,fun){
    if(typeof(parms)=='function')
    if(!parms){parms={}}
    var uid = 'UID'+Math.random().toString().slice(2)
    if(!fun){
        fun=function(x){console.log(x)}
    }
    ImmPort.job[uid]=fun
    var q = ''
    for (var i in parms){
        q+='&'+i+'='+parms[i]
    }
    $.getScript(ImmPort.searchUrl+'?callback=ImmPort.job.'+uid+q)
    //$.getScript(ImmPort.searchUrl+'?callback=ImmPort.job.'+uid)
}


ImmPort.get()
