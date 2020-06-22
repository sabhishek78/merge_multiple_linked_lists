let listA = {
    value : 2,
    next: {
        value : 3,
        next : {
            value : 7
        }
    }
};

let listB = {
    value: 1,
    next: {
        value : 5,
        next: {
            value : 8,
            next: {
                value : 9
            }
        }
    }
};


let listD = { value: 6 };

function mergeLinkedLists(listArray){
    let listResult = { val : -1, next : null };
    let pointerResult=listResult;
    while(anyPointerIsNotUndefined(listArray)){
        let [minimumValue,indexOfMinimumValue]=findMinimumValueNode(listArray);
        if(listArray[indexOfMinimumValue].next){
            listArray[indexOfMinimumValue]=listArray[indexOfMinimumValue].next ;
        }
        else{
            console.log("hello");
        listArray[indexOfMinimumValue]=undefined;
        }

        pointerResult.next={value:minimumValue};
        pointerResult=pointerResult.next;
    }
 return JSON.stringify(listResult.next);
    
}
function anyPointerIsNotUndefined(listArray){
   return listArray.some((e)=>e!==undefined);
}
function findMinimumValueNode(listArray){
    let minValue;
    let indexOfMinValue;
    let start=false;
    for(let i=0;i<listArray.length;i++){
        if(listArray[i]!==undefined && !start){
            minValue=listArray[i].value;
            indexOfMinValue=i;
            start=true;
        }
        if(listArray[i]!==undefined && start){
            if(listArray[i].value<minValue){
                minValue=listArray[i].value;
                indexOfMinValue=i;
            }
        }
    }
    return [minValue,indexOfMinValue];
}

console.log(mergeLinkedLists([listA, listB,listD]));