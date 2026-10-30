function markscalculating(...marks) {
    let total = 0;

    for (let m of marks) {
        total += m;
    }

    let count = marks.length;
    let average = total / count;

    console.log("Total =", total);
    console.log("Count =", count);
    console.log("Average =", average);
}

markscalculating(80, 90, 70, 60, 100);