var input = document.getElementById("input_state");
var aspect = document.getElementsByClassName("ket_state");
var button = document.getElementById("add_state"); 
var confirm = document.getElementById("confirm");




var state_list = [];



//Jalankan JQuery
$(document).ready(function(){
    $("#info_state").append(generateStateText("Benar"),generateStateText("Salah"), generateStateText("Kosong"));
    $('#another').append(generateStateInfo("Benar"), generateStateInfo("Salah"), generateStateInfo("Kosong"));
    
    var state = document.getElementsByClassName("state");
    for(var i=0;i<state.length;i++){
        state[i].value="";
    }

    var forbidden_delete = ["benar", "salah"]

    for(var i=0;i<forbidden_delete.length;i++)(document.getElementById("remove_state_"+forbidden_delete[i])).hidden = true;
    
    $('#add_state').click(function(){

        toggleButton();
        
        //Kalau udah menginput aspeknya
        $("#input_state").keyup(function(e) {
            if(e.keyCode == 13 && $(this).val()!=="") {
                    e.preventDefault();
                    $("#add_element").click() 
            }
        });
    });

    $("#add_element").click(function(){
        var val = $("#input_state").val();
        
        //Generate Aspek
        if(!state_list.includes(val.toLowerCase().replaceAll(" ", "_"))){
            $('#info_state').append(generateStateText(val));
            $('#another').append(generateStateInfo(val));
        }else alert("State sudah ada");
        //Mengembalikan button ke tempat semula
        toggleButton();
        $("#input_state").val("");
    });


});

function checkPointer(){
    if(pointer['state']>2){
        hs.openHidden("bobot_total_state");
        hs.openHidden("text_state");hs.openHidden("sub_state");
    }
    
    if(pointer['state']<=2){
        closeHidden("bobot_total_state");
        closeHidden("text_state");closeHidden("sub_state");
    }
}


//Coba pake jquery siapa tau bisa
function generateStateText(state){
    state_list.push(state.toLowerCase().replaceAll(" ", "_"));
    return `<div class="data_state" id="state_${state.toLowerCase().replaceAll(" ", "_")}">
         <p> ${state} </p>
         <div class="form-row data_state">
         <div class="form-group col-sm-2">
             <input type="number" class="state jumlah_state form-control input-sm"
             id= "jumlah_state_${state.toLowerCase().replaceAll(" ", "_")}"  placeholder="Jumlah" min="1">
         </div>
         <div class="form-group col-sm-2">
             <input type="number" class="state bobot_state form-control input-sm"  
             id="bobot_state_${state.toLowerCase().replaceAll(" ", "_")}" placeholder="Bobot" min="1">
         </div>
         <div class="form-group col-sm-2">
            <button type="button" id="remove_state_${state.toLowerCase().replaceAll(" ", "_")}" 
            class="btn btn-secondary state" onclick = removeState('${state.toLowerCase().replaceAll(" ", "_")}')>
            Hapus state </button>
         </div>
       </div>
       </div>`
}



function generateStateInfo(state){
    return `<div class="d-flex" id="info_${state.toLowerCase().replaceAll(" ", "_")}" hidden>
    <p>Jumlah ${state} : </p><output id="jumlah_${state.toLowerCase().replaceAll(" ", "_")}" class="secondary ml-2"></output>
    </div>`
}


function changeButton(){
    button.className = button.className.replaceAll(/col-sm-6/g, "col-sm-2");
    confirm.style.display="inline";
    button.innerHTML = "Batal Menambah State";
}


function returnToDefault(){
    button.className = button.className.replaceAll(/col-sm-2/g, "col-sm-6");
    confirm.style.display="none";
    button.innerHTML = "Tambah State";
}

function toggleButton(){
    //Mengecilkan button
    if(button.className.match(/col-sm-6/g)){
        changeButton();
    } else if(button.className.match(/col-sm-2/g)){
        returnToDefault();
    }
}

function removeElement(element, array){
    var index = array.indexOf(element);
    if (index !== -1) array.splice(index, 1);
}


function removeState(state){
    $("#state_"+state.toLowerCase().replaceAll(" ", "_")).remove();
    $("#info_"+state.toLowerCase().replaceAll(" ", "_")).remove();
    removeElement(state, state_list);
}

function count(){
    var nilai_akhir = 0;
    var jumlah_state = $(".jumlah_state");
    var bobot_state=$(".bobot_state");
    var soal = $('#input_jumlah_soal').val();
    var now = 0;
    var empty_pointer = -1;
    var true_pointer = -1;


//Kalau benar semua
if(jumlah_state[state_list.indexOf('benar')].value==soal){
    jumlah_state[state_list.indexOf('salah')].value=0;
    if(state_list.includes('kosong')) jumlah_state[state_list.indexOf('kosong')].value=0;
}

//Kalau ada nilai khusus untuk soal yang kosong    
if(state_list.includes("kosong")){
    for(var i=0;i<state_list.length;i++){
        if((jumlah_state[i].value=="" || bobot_state[i].value=="") && state_list[i]!="kosong"){
            unfilledAlert();
            return;
        }else{
            if(state_list[i]=="kosong") empty_pointer=i;
            if(state_list[i]=="benar") true_pointer=i;
            now += Number(jumlah_state[i].value);
            nilai_akhir+=Number(jumlah_state[i].value*bobot_state[i].value);
            console.log(nilai_akhir)
        }
    }
//Kalau tidak ada nilai khusus untuk soal yang kosong
}else{
    for(var i=0;i<state_list.length;i++){
        if((jumlah_state[i].value=="" || bobot_state[i].value=="") && state_list[i]!="salah"){
            unfilledAlert();
            return;
        }else{
            if(state_list[i]=="salah") empty_pointer=i;
            if(state_list[i]=="benar") true_pointer=i;
            now += Number(jumlah_state[i].value);
            nilai_akhir+=Number(jumlah_state[i].value*bobot_state[i].value);
            console.log(nilai_akhir)
        }
    }
}


if(now>soal) {errorAlert();return;}


//Mencari jumlah yang kosong
if(jumlah_state[empty_pointer].value==""){
    jumlah_state[empty_pointer].value = Number(soal-now);
    if(bobot_state[empty_pointer].value=="")
    bobot_state[empty_pointer].value=0;
    nilai_akhir += jumlah_state[empty_pointer].value*bobot_state[empty_pointer].value;
//Kalau jumlahnya tidak sama dengan jumlah seluruh soal
}else if(now<soal){
    if(state_list.includes("kosong")){
        var index = state_list.indexOf("kosong")
        jumlah_state[index].value = Number(jumlah_state[index].value)+Number(soal-now);
        nilai_akhir += Number(bobot_state[index].value)*Number(soal-now);
    }else{
        var index = state_list.indexOf("salah");
        jumlah_state[index].value = Number(jumlah_state[index].value)+Number(soal-now);
        nilai_akhir += Number(bobot_state[index].value)*Number(soal-now);
    }
}

    var nilai_akhir_ratusan = (nilai_akhir/Number(soal*bobot_state[true_pointer].value))*100
    document.getElementById("ket_nilai").style.display="block";
    document.getElementById('nilai_utama').innerHTML=nilai_akhir;
    document.getElementById('elemen_state').innerHTML=nilai_akhir_ratusan.toFixed(2);
    for(var i=0;i<state_list.length;i++)
    document.getElementById('jumlah_'+state_list[i]).innerHTML=jumlah_state[i].value+" (Nilai : "+jumlah_state[i].value*bobot_state[i].value+")";

    console.log(nilai_akhir);

}

