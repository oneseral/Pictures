function partition(arr, left, right) {
    var i = left, j = right, temp;
    var pivot = arr[Math.floor((left + right) / 2)];

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while  (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}

function quicksort(arr, left, right) {
    var index = partition(arr, left, right);

    if (left < index -1) {
        quicksort(arr, left, index - 1);
    }

    if (index < right) {
        quicksort(arr, index, right);
    }
}

var arr = [1, 4, 7, 3, 5];
quicksort(arr, 0, arr.length - 1);
console.log(arr);