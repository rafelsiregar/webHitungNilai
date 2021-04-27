var text_sekolah = 
`
<div class="form-inline">
    <label> Nama Sekolah : </label>
     <input type="text" name="school" value="" class="form-control ml-sm-2">
  </div>
  <div class="d-flex mt-2">
     <p>Nilai rata-rata UN</p>
 </div>
`

var text_sd = 
`<div class="form-group col-sm-4">
<label>Bahasa Indonesia : </label> 
<input type="number" name="bind" value="" step="0.01" min="0" max="100" class="form-control">
<label>Matematika : </label>
<input type="number" name="mat" value="" step="0.01" min="0" max="100" class="form-control">
<label>IPA : </label>
<input type="number" name="ipa" value="" step="0.01" min="0" max="100" class="form-control">
</div>
`

var text_smp =
`<div class="form-group col-sm-4">
        <label>Bahasa Indonesia : </label> 
        <input type="number" name="bind" value="" step="0.01" min="0" max="100" class="form-control">
        <label>Bahasa Inggris : </label>
        <input type="number" name="bing" value="" step="0.01" min="0" max="100" class="form-control">
        <label>Matematika : </label>
        <input type="number" name="mat" value="" step="0.01" min="0" max="100" class="form-control">
        <label>IPA : </label>
        <input type="number" name="ipa" value="" step="0.01" min="0" max="100" class="form-control">
    </div>
`

var text_sma =
`<div class="form-group col-sm-4">
        <label>Bahasa Indonesia : </label> 
        <input type="number" name="bind" value="" step="0.01" min="0" max="100" class="form-control">
        <label>Bahasa Inggris : </label>
        <input type="number" name="bing" value="" step="0.01" min="0" max="100" class="form-control">
        <label>Matematika : </label>
        <input type="number" name="mat" value="" step="0.01" min="0" max="100" class="form-control">
        <label class='pil1'>Pilihan 1 : </label>
        <input type="number" name="pil1" value="" step="0.01" min="0" max="100" class="form-control">
        <label class='pil2'>Pilihan 2 : </label>
        <input type="number" name="pil2" value="" step="0.01" min="0" max="100" class="form-control">
        <label class='pil3'>Pilihan 3 : </label>
        <input type="number" name="pil3" value="" step="0.01" min="0" max="100" class="form-control">
    </div>`


var text_jurusan = 
`<div class="d-flex justify-content-center">
<p>Jurusan : </p>
<div class="custom-control custom-radio ml-2">
  <input type="radio" id="ipa" name="jurusan" value="ipa" class="custom-control-input" 
  onclick="set_jurusan(this.value)">
  <label class="custom-control-label ml-2" for="ipa">IPA</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="ips" name="jurusan" value="ips" class="custom-control-input"
  onclick="set_jurusan(this.value)">
  <label class="custom-control-label ml-2" for="ips">IPS</label>
</div>
</div>
`

var report_text =
`<div id="report" style="display:none">
    <p>Rata-rata UN <output id="sekolah1"></output> : <output id="avg1" class="avg"></output></p>
    <p>Rata-rata UN <output id="sekolah2"></output> : <output id="avg2" class="avg"></output></p>
    <p>Selisih : <output id="selisih"></output></p>
</div>
`

var button = `<div class="justify-content-center d-flex ml-sm-2">
<button type="button" 
class="btn btn-light mb-5 mt-4" onclick="compare()">Bandingkan</button>
</div>`

var school = document.getElementsByClassName("info_sekolah")
var jenjang = 
{sd :document.getElementsByClassName("info_sd"), 
smp:document.getElementsByClassName("info_smp"),
sma : document.getElementsByClassName("info_sma")
}
for(var i=0;i<school.length;i++){
    school[i].innerHTML=text_sekolah;
}


for(var i=0;i<jenjang['sd'].length;i++){
    jenjang['sd'][i].innerHTML=text_sd;
}

for(var i=0;i<jenjang['smp'].length;i++){
    jenjang['smp'][i].innerHTML=text_smp;
}

for(var i=0;i<jenjang['sma'].length;i++){
    jenjang['sma'][i].innerHTML=text_sma;
}


if(document.getElementById("info_jurusan")!=null)
document.getElementById("info_jurusan").innerHTML=text_jurusan;
document.getElementById('report_info').innerHTML=report_text;
document.getElementById('main_button').innerHTML=button;