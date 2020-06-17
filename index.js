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
        let newNode={value:minimumValue};
        pointerResult.next=newNode;
        pointerResult=pointerResult.next;
    }
 return JSON.stringify(listResult.next);
    
}
function anyPointerIsNotUndefined(listArray){
   return listArray.some((e)=>e!==undefined);
}
function findMinimumValueNode(listArray){
    console.log(listArray);
    let valueArray=[];
    for(let i=0;i<listArray.length;i++){
        if(listArray[i]!==undefined){
            valueArray.push(listArray[i].value);
        }
        else if(listArray[i]===undefined){
            valueArray.push(undefined);
        }
    }
    let minimumValue=findMinimumValue(valueArray);
    let indexOfMinimumValue=valueArray.indexOf(minimumValue);
    return [minimumValue,indexOfMinimumValue];
}
function findMinimumValue(valueArray){
    let temp=[];
    for(let i=0;i<valueArray.length;i++){
        if(valueArray[i]!==undefined){
            temp.push(valueArray[i]);
        }
    }
    return Math.min(...temp);
}
console.log(mergeLinkedLists([listA, listB,listD]));