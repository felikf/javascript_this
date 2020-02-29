const arr = [8, 7, 2, 9, 6, 7 ,3 , 6, 1, 0, 5];

const sorted = mergeSort(arr);
console.log(sorted);

function mergeSort(arr) {
    const n = arr.length;

    if (n < 2) {
        return;
    }

    const mid = Math.floor(n/2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
}


function merge(left, right, result) {
    const l = left.length;
    const r = right.length;
    let i = 0;
    let j = 0 ;
    let k = 0;

    while (i < l && j < r) {
        if (left[i] <= k[j]) {
            result[k] = left[i];
            i++; k++;
        }
        else {
            result[k] = right[j];
            j++; k++;
        }
    }

    while (i < l) {
        result[k] = left[i];
        i++; k++;
    }

    while (j < r) {
        result[k] = right[j];
        j++; k++
    }
}
