var weight=document.querySelector("#weight").value ;
var distance=document.querySelector("#distance").value ;
var time=document.querySelector("#time").value ;
var button=document.querySelector("#btn") ;
var result=document.querySelector("#result") ;
var select=document.querySelector("#item").value ;


button.addEventListener("click" , ()=>{
    if (select == "option1") {
        var caloriesBurned = 0.03 * weight * distance/1000 * 3.5 * time/200;
        result.innerHTML=(`میزان کالری سوخته شده :${caloriesBurned}`);
    } else if (select == "option2") {
        var caloriesBurned = 0.08 * weight * distance/1000 * 3.5 * time/200;
        result.innerHTML=(`میزان کالری سوخته شده :${caloriesBurned}`);
    } else if (select == "option3") {
        var caloriesBurned = 0.05 * weight * distance/1000 * 3.5 * time/200;
        result.innerHTML=(`میزان کالری سوخته شده :${caloriesBurned}`);
    }
})
