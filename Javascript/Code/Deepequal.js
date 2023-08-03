

function deepequal(valueone,valuetwo){
    if(typeof valueone!='object'&& typeof valuetwo!='object'){
        const isvalueoneNaN=isNaN(valueone)&&typeof valueone==='number';
        const isvaluetwoNaN=isNaN(valueone)&& typeof valuetwo=='number';
        if(isvalueoneNaN&&isvaluetwoNaN) return true;
        return valueone===valuetwo;
    }

    // type of both is different
    if(typeof valueone!=typeof valuetwo) return false;
    if(valueone===null && valuetwo===null) return true;    
    if(valueone===null || valuetwo===null) return false;
    if(valueone===valuetwo) return true;


    if(Array.isArray(valueone)&&Array.isArray(valuetwo)){
        if(valueone.length!=valuetwo.length) return false;
        for(let i=0;i<valueone.length;i++){
            if(!deepequal(valueone[i],valuetwo[i])) return false;
        }
        return true;
    }


    //object check
    const valueonekey=object.keys(valueone);
    const valuetwokey=object.keys(valuetwo);

    if(valueonekey.length!=valuetwokey.length) return false;
    if(!deepequal(valueonekey,valuetwokey))    return false;


    for(let i=0;i<valueonekey.length;i++){
        const key=valueonekey[i];
        const valueoneValue=valueone[key];
        const valuetwoValue=valuetwo[key];
        if(!deepequal(valueoneValue,valuetwoValue)) return false;
    }


    return true;
}

console.log(deepequal(undefined,undefined))