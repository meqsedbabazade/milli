$(document).ready(function(){
 $(".add").click(function(){
      var yeni_tr=document.createElement("tr")  
      var yeni_check=document.createElement("th")
      var is_yeri=document.createElement("th")
      var baslama_tarixi=document.createElement("th")
      var bitme_tarixi=document.createElement("th")
       check_input=document.createElement("input")
      check_input.setAttribute("type","checkbox")
      check_input.classList.add("thh")
      var is_yeri_input=document.createElement("input")
      var baslama_tarixi_input=document.createElement("input")
      baslama_tarixi_input.value="0/0/0"
      baslama_tarixi_input.placeholder="ay/gun/il"
      baslama_tarixi_input.classList.add("start")
      var bitme_tarixi_input=document.createElement("input")
      bitme_tarixi_input.value="0/0/0"
      bitme_tarixi_input.placeholder="ay/gun/il"
      bitme_tarixi_input.classList.add("end")
      yeni_check.appendChild(check_input)
      is_yeri.appendChild(is_yeri_input)
      baslama_tarixi.appendChild(baslama_tarixi_input)
      bitme_tarixi.appendChild(bitme_tarixi_input)
      yeni_tr.appendChild(yeni_check)
      yeni_tr.appendChild(is_yeri)
      yeni_tr.appendChild(baslama_tarixi)
      yeni_tr.appendChild(bitme_tarixi)
      document.getElementsByTagName("tbody")[0].appendChild(yeni_tr)
    })//add kliki yeni elementler ve claslar elave olunur

    $(document).on("click",".tekrar",function(){
        $("tbody input[type='checkbox']").each(function(x) {
            
            if( $(this).is(':checked') ){
                $(this).parent().parent().clone().appendTo("tbody");
            }
           });
           $("input[type='checkbox']").prop("checked", false);
    })// checked edilmis elementleri tekrarliyir

    $(document).on("click",".del",function(){
        $(" tbody input[type='checkbox']").each(function(x) {
            if( $(this).is(':checked') ){
                $(this).parent().parent().remove()
            }
           });
           $("input[type='checkbox']").prop("checked", false);
    })// checked edilmis elementleri  silir

$(".inp").click(function(){
        $("input[type='checkbox']").prop('checked',$(this).prop("checked"))
})// checked all butun checkboxlari checked edir

 $(".tik").click(function(){
    var cem1=0
var cem2=0
var cem3=0
var cem4=0
var cem5=0
var cem6=0
  $("h3").remove()
    $(".start").each(function(x){
        start=$(this).val()
   var c1=Number(start.split("/")[0])
   var c2=Number(start.split("/")[1])
   var c5=Number(start.split("/")[2])
   cem1+=c1
   cem2+=c2
   cem5+=c5
    })
    $(".end").each(function(){
       end=$(this).val()
       var c3=Number(end.split("/")[0])
       var c4=Number(end.split("/")[1])
       var c6=Number(end.split("/")[2])
       cem3+=c3
       cem4+=c4
       cem6+=c6
    })
  var ay=cem3-cem1
  var gun=cem4-cem2
 var il=cem6-cem5
 if(gun>31 ){
    gun=0
    ay+=1
}
else if(gun<0){
    gun=Math.abs(31+gun)
    ay-=1
}
if(ay>=12){
    il+=1
    ay=0
}
else if(ay<0){
    ay=Math.abs(12+ay)
    il-=1
}
var a=il+"il"+" "+ay+"ay"+" "+gun+"gun"
console.log(a)
$("#in").val(a)
})// staj hesabllanmasi 
})