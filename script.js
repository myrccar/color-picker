function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


  var hex_code = document.getElementById("test").value;
  document.getElementById("out_hex").innerHTML = hex_code;
  var rgb = "";
  rgb += "r"+hexToRgb(hex_code).r; +",";
  rgb += "g"+hexToRgb(hex_code).g; +",";
  rgb += "b"+hexToRgb(hex_code).b; +",";
  document.getElementById("out_rgb").innerHTML = rgb;


const selectElement = document.getElementById('test');

selectElement.addEventListener('change', (event) => {
  var hex_code = document.getElementById("test").value;
  document.getElementById("out_hex").innerHTML = hex_code;
  var rgb = "";
  rgb += "rgb"+hexToRgb(hex_code).r +",";
  rgb += ""+hexToRgb(hex_code).g +",";
  rgb += ""+hexToRgb(hex_code).b +",";
  document.getElementById("out_rgb").innerHTML = rgb;
});
 