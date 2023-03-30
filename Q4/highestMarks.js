let marks = [67,87,78,89,99];

highest_mark = marks[0];

for(let i=1; i<marks.length; i++){
    if(marks[i] > highest_mark){
        highest_mark = marks[i];
    }
}

console.log(highest_mark);