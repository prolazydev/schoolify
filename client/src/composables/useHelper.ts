export function selectRandomItem<T = any>(arr: T[],) {
    const index = Math.floor(Math.random() * arr.length,);
    return arr[index];
}

export function scrollArray<T = Array>(arr: T, element,) {
    let pos = arr.indexOf(element,);
    if (pos === -1) throw new Error('Element not found in the array!',);

    if (pos === arr.length - 1) pos = 0;
    else pos++;

    return arr[ pos ];
}
