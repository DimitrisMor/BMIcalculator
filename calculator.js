var mass;
var height;
var age;
var gender;
var bmi;
var text;

function calculate(){
    mass=document.getElementById('weight').value;
    height=document.getElementById('height').value;
    age=document.getElementById('age').value;
    if (document.querySelector('input[id="maleCheck"]:checked')) {
        gender = "male";
        
    }else{
        gender = "female";
    }    
   
    if((mass=='')||(height=='')||(age=='')){
        alert('Complete all of the fields!');

    }else{
        bmi=mass*10000/(height**2);    
        bmi=parseFloat(bmi).toFixed(1);
    
        if(bmi<16){
            text="Severe Thinness";
        }else if(bmi<17){
            text="Moderate Thinness";
        }else if(bmi<18.5){
            text="Mild Thinness";
        }else if(bmi<25){
            text="Normal";
        }else if(bmi<30){
            text="Overweight";
        }else if(bmi<35){
            text="Obese Class I";
        }else if(bmi<40){
            text="Obese Class II";
        }else{
            text="Obese Class III";
        }

        document.getElementById('text').innerHTML='BMI = '+bmi+' kg/m² '+' ('+text+')';
    }
}

function reset(){
    document.getElementById('weight').value='';
    document.getElementById('height').value='';
    document.getElementById('age').value='';
    document.getElementById('maleCheck').checked=false;
    document.getElementById('femaleCheck').checked=false;
    document.getElementById('text').innerHTML='';
}