export default function rgbaToHex(color){
    let r = parseInt(color[0], 10).toString(16);
    let g = parseInt(color[1], 10).toString(16);
    let b = parseInt(color[2], 10).toString(16);
    let a = parseInt(color[3], 10).toString(16);

    r = r.length == 1 ? '0' + r : r; 
    g = g.length == 1 ? '0' + g : g;
    b = b.length == 1 ? '0' + b : b;
    a = a.length == 1 ? '0' + a : a;
    return ("#"+r+g+b);
}