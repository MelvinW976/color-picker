// source: https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
function luminance(r, g, b) {
    var a = [r, g, b].map(function(v) {
      return v <= 0.03928 ?
        v / 12.92 :
        Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
function computeCon(rgb1, rgb2){
var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
var brightest = Math.max(lum1, lum2);
var darkest = Math.min(lum1, lum2);
var res= (brightest + 0.05) /
(darkest + 0.05);
return isNaN(res) ? "1.000"  :res.toFixed(3) ;
}
export {computeCon}
