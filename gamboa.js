/*
 * gamboa.js
 * Functionality that should be default in HTML.
 * 
 * 1. Textbox with Decimal Precision
 * Example: <input type="text" data-precision="4" />
 * 
 * 
 */


/* 1. Textbox with Decimal Precision
 * Example: <input type="text" data-precision="4" />
 * Output: 123.1234
 * */
$('input[type=text]').keydown(function (k) {
    var p = $(this).data('precision');
    if (p !== undefined) {
        if (k.keyCode >= 96 && k.keyCode <= 105 || k.keyCode >= 48 && k.keyCode <= 57 || k.keyCode === 110 || k.keyCode === 189 || k.key.toString().length > 1 && k.keyCode === 9) {
            var v = $(this).val();
            if (k.key === '.' && v.toString().indexOf('.') > -1) { 
                if (k.keyCode !== 9) return false;
            }
            if (v.toString().indexOf('.') > -1) {
                var d = v.split('.')[1];
                if (k.keyCode === 8) {
                    $(this).val(v);
                }
                else if (d.toString().length + 1 > p) { if (k.keyCode !== 9) return false; }
            }
        }
        else { return false; }
    }
});