//Условие задачи: В каплю воды, где находились 1000 бактерий, посадили один вирус. 
//После этого каждую минуту стало происходить следующее: каждый вирус уничтожал по одной бактерии, 
//после чего каждая бактерия делилась на две бактерии, а каждый вирус — на два вируса. 
//Верно ли, что через некоторое время не останется ни одной бактерии?

var bacteries = 1000;
var viruses = 1;
var minutes = 0;
while (true) {
    minutes = minutes + 1;
    bacteries = bacteries - viruses;
    bacteries = bacteries * 2;
    viruses = viruses * 2;
    if (minutes === 10) {
        break;
    }
}
console.log(bacteries);
