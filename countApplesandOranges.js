function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // console.log(apples);
    // console.log(oranges);
    var outapple = 0;
    var m = apples.length;
    for (let i = 0; i < m; i++) {
        let appleFall = 0;
        appleFall = appleFall + parseInt(apples[i]);
        let appleDistance = appleFall + a;
        if (appleDistance >= s) {
            if (appleDistance <= t) {
                outapple++;
            }
        }
    }
    var outorange = 0;
    var n = oranges.length;
    for (let i = 0; i < n; i++) {
        let orangeFall = 0;
        orangeFall = orangeFall + parseInt(oranges[i]);
        let orangeDistance = orangeFall + b;
        if (orangeDistance >= s) {
            if (orangeDistance <= t) {
                outorange++;
            }
        }
    }
    console.log(outapple);
    console.log(outorange);
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1],[5, -6]));
