//Question 1

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function organizesRooms(arr){
    const filteredRooms = arr.sort((a, b) => a - b);

    let newArr = [];
    let arrToGroup = [];
    let start = filteredRooms[0];

    for(i=0; i< filteredRooms.length; i++){
        let item = filteredRooms[i];

        if(item === start){
            arrToGroup.push(item);
        } else{
            if (arrToGroup.length !== 0){
            newArr.push(arrToGroup);
            arrToGroup = [];
            }
            
            start = item;
            if (filteredRooms.length === i || item !== filteredRooms[i+1]){
                newArr.push(item);
            } else {
                arrToGroup.push(item);
            }
        }
    }
    console.log(newArr);
}

organizesRooms(array);

//Question 2

function answer(arr, number){
let twoNum = [];
    for(i=0; i<arr.length; i++){
        for(j=1; j<arr.length; j++){
            if (arr[i] + arr[j] === number){
                twoNum.push(arr[i]);
                twoNum.push(arr[j]);
                break;
            }
        }
        if(twoNum.length > 0){
            break;
        }
    }
    console.log(twoNum);
}

answer([1, 4, 2, 9, 3], 7);


