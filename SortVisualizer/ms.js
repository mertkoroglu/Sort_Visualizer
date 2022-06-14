var container = document.getElementById("array");
var btn1 = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var drop = document.getElementById("drop");
var desc = document.getElementById("desc");


function generatearray() {
  for (var i = 0; i < 110; i++) {
    var value = Math.ceil(Math.random() * 100);
  
    var array_ele = document.createElement("div");
    array_ele.classList.add("block");
    blue = 255 - i*3;
    array_ele.style.backgroundColor = `rgb(100, 35, ${blue})`;
    
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i*11}px)`;
    var array_ele_label = 
    document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
  container.style.width = i*11 + 'px';

}

async function shuffle(delay = 1) {
    var blocks = document.querySelectorAll(".block");
    let currentIndex = blocks.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      var temp1 = blocks[currentIndex].style.height;
      var temp2 = blocks[currentIndex].childNodes[0].innerText;
      blocks[currentIndex].style.height = blocks[randomIndex].style.height;
      blocks[randomIndex].style.height = temp1;
      blocks[currentIndex].childNodes[0].innerText =
      blocks[randomIndex].childNodes[0].innerText;
      blocks[randomIndex].childNodes[0].innerText = temp2;
      await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay));
    }
  }


  
async function lometo_partition(l, r, delay = 10) {
    var blocks = document.querySelectorAll(".block");
  
    // Storing the value of pivot element
    var pivot = 
    Number(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    
    for (var j = l; j <= r - 1; j++) {
      // To change background-color of the
      // blocks to be compared
      // To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      var value = 
      Number(blocks[j].childNodes[0].innerHTML);
    
      // To compare value of two blocks
      if (value < pivot) {
        i++;
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText =
        blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        //To wait for 700 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      } 
    }
    // Swapping the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =
    blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    
    // To wait for 2100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay * 3)
    );
    
    return i;
  
}

async function QuickSort(l, r, delay = 10) {
    if (l < r) {
        var pivot_idx = await lometo_partition(l, r);
        await QuickSort(l, pivot_idx - 1);
        await QuickSort(pivot_idx + 1, r);
    }else{
        
    btn2.style.display = "inline";
    btn1.style.display = 'inline';

    }
}


async function bubbleSort(delay = 1){
    var blocks = document.querySelectorAll(".block");
    for (let i = 0; i < 109; i++) {
        for (let j = 0; j < 109; j++) {
            value1 = Number(blocks[j].childNodes[0].innerHTML);
            value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
            if (value1 > value2) {
                var temp1 = blocks[j + 1].style.height;
                var temp2 = blocks[j + 1].childNodes[0].innerText;
                blocks[j + 1].style.height = blocks[j].style.height;
                blocks[j].style.height = temp1;
                blocks[j + 1].childNodes[0].innerText =
                blocks[j].childNodes[0].innerText;
                blocks[j].childNodes[0].innerText = temp2;

                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay));
            }
            var blocks = document.querySelectorAll(".block");

        }
    }
    btn2.style.display = "inline";
    btn1.style.display = 'inline';

};



async function insertionSort(delay  = 5) {
    var blocks = document.querySelectorAll(".block");
    
    for (let i = 1; i < 110; i++) {
      let currentValue = Number(blocks[i].childNodes[0].innerHTML);
      let j
      for (j = i - 1; j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > currentValue; j--) {
        var temp1 = blocks[j + 1].style.height;
        var temp2 = blocks[j + 1].childNodes[0].innerText;
        blocks[j + 1].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[j + 1].childNodes[0].innerText =
        blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay));
      }
      blocks[j + 1] = currentValue
    }
    btn2.style.display = "inline";
    btn1.style.display = 'inline';

  }



async function selectionSort(delay = 50)
{
var blocks = document.querySelectorAll(".block");

    var min_idx;

    for (var i = 0; i < 109; i++)
    {
        
    min_idx = i;
    for (var j = i+1; j < 110; j++){
        value1 = Number(blocks[j].childNodes[0].innerHTML);
        value2 = Number(blocks[min_idx].childNodes[0].innerHTML);
        if (value1 < value2)
        min_idx = j;
    }
    

    var temp1 = blocks[min_idx].style.height;
    var temp2 = blocks[min_idx].childNodes[0].innerText;
    blocks[min_idx].style.height = blocks[i].style.height;
    blocks[i].style.height = temp1;
    blocks[min_idx].childNodes[0].innerText =
    blocks[i].childNodes[0].innerText;
    blocks[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
    }, delay));
    }
    btn2.style.display = 'inline';
    btn1.style.display = 'inline';

}


generatearray();

function states(){
    switch(drop.value){
    case "ss":
        desc.innerHTML =`<div>
        The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
        <ul>
          <li>The subarray which is already sorted. </li>
          <li>Remaining subarray which is unsorted.</li>
        </ul>
        <div>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.</div>
      </div>`;
        break;
    case "bs":
        desc.innerHTML =`<div>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst case time complexity is quite high.
      </div>`;
        break;
    case "qs":
        desc.innerHTML =`<div>
        Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks
        an element as pivot and partitions the given array around the picked
        pivot. There are many different versions of quickSort that pick pivot in
        different ways.
        <ul>
          <li>Always pick first element as pivot.</li>
          <li>Always pick last element as pivot</li>
          <li>Pick a random element as pivot.</li>
          <li>Pick median as pivot.</li>
        </ul>
      </div>`;
        break;
    case "is":
        desc.innerHTML =`<div>
        Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
        <ul>
          <li>This algorithm is one of the simplest algorithm with simple implementation</li>
          <li>Basically, Insertion sort is efficient for small data values</li>
          <li>Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.</li>
        </ul>
      </div>`;
        break;      
}
}
state = setInterval(states);

btn1.addEventListener('click', function(){
    btn2.style.display = 'none';
    btn1.style.display = 'none';

    switch(drop.value){
        case "ss":
            selectionSort();
            break;
        case "bs":
            bubbleSort();
            break;
        case "qs":
            QuickSort(0, 109);
            break;
        case "is":
            insertionSort();
            break;      
    }

});

btn2.addEventListener('click', function(){
    shuffle();
})
  