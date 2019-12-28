<html>

<head>

<title>Weightloss-Calc</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.5/datepicker.css" integrity="sha256-n3ci71vDbbK59GUg1tuo+c3KO7+pnBOzt7BDmOe87s4=" crossorigin="anonymous" />

<style>

body {
    font-size: small;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#ui-datepicker-div { 
  font-size: 10px;
  } 

</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/0.6.5/datepicker.min.js" integrity="sha256-/7FLTdzP6CfC1VBAj/rsp3Rinuuu9leMRGd354hvk0k=" crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" integrity="sha256-4iQZ6BVL4qNKlQ27TExEhBN1HFPvAvAMbFavKKosSWQ=" crossorigin="anonymous"></script>
        
<script>
  $(document).ready(function(){
        //calculates BMI, BMR, TOTAL CALS, LBS TO LOSE, AND 
        function calculateFatness() {
        var age = document.getElementById("age1").value;
        var weight = document.getElementById("weight1").value;
        var goalW = document.getElementById("weight2").value;
        var toLose = weight - goalW;
        var feetToInches = document.getElementById("ft").value *12;
        var inches =  document.getElementById("in").value;
        var parsedF = parseInt(feetToInches, 10);
        var parsedI = parseInt(inches, 10)
        var height = parsedF + parsedI;
        var bmi = weight / (height * height) * 703;
        var finalBmi = bmi.toFixed(2);
        var goalBmi = goalW / (height * height) * 703;
        var finalGoalBmi = goalBmi.toFixed(2);
        var today = moment();
        var goalD = document.getElementById("date1").value;
        var goalDform = moment(goalD).format("MMM Do YYYY"); 
        var daysToGoal = today.diff(goalD, 'day');
        var positiveDays = Math.abs(daysToGoal);
        var weeksToGoal = (positiveDays / 7).toFixed(0);
        var calsBurn = toLose * 3500;
        var calWeeks = calsBurn / weeksToGoal;
        var CalDay = calsBurn / positiveDays;
        var calWeeksString = numeral(calWeeks).format('0,0');
        var calsString = numeral(calsBurn).format('0,0');
        var calDayString = numeral(CalDay).format('0,0');
        var bmrMale = (66.47 + (6.24 * weight) + (12.7 * height) - (6.755 * age) ).toFixed(0);
        var bmrFemale = (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age) ).toFixed(0);
        var fBmrMale = (66.47 + (6.24 * goalW) + (12.7 * height) - (6.755 * age) ).toFixed(0);
        var fBmrFemale = (655.1 + (4.35 * goalW) + (4.7 * height) - (4.7 * age) ).toFixed(0);
        var bmrMaleNum = numeral(bmrMale).format('0,0');
        var bmrFemaleNum = numeral(bmrFemale).format('0,0');
        var fBmrMaleNum = numeral(fBmrMale).format('0,0');
        var fBmrFemaleNum = numeral(fBmrFemale).format('0,0');
        var fBmr;
        var bmr;
        var TDEE;

        console.log(height);
        console.log(feetToInches);
        console.log(inches);
//------------------------------------CURRENT BMI RESULTS------------------------------------
          if (weight > 0 && height > 0) {
            document.getElementById("myBmi").innerHTML = "<span style='color: #00D4FF;'>"+finalBmi+"</span>";
          }
          if (finalBmi < 18.5) {
            document.getElementById("fat").innerHTML = "<span style='color: orange;'>You are the opposite of fat, which can still be a problem.</span>"
          }
          if (finalBmi > 18.5 && finalBmi < 25) {
            document.getElementById("fat").innerHTML = "<span style='color: green;'>You are not fat. Congrats!</span>"
            fat.style.fontWeight = 'bold';
          }
          if (finalBmi > 25 && finalBmi < 30) {
            document.getElementById("fat").innerHTML = "<span style='color: orange;'>You are fat, but not crazy fat.</span>"
          }
          if (finalBmi > 30 && finalBmi < 35) {
            document.getElementById("fat").innerHTML = "<span style='color: orange;'>You are pretty fat.</span>"
          }
          if (finalBmi > 35 && finalBmi < 45) {
            document.getElementById("fat").innerHTML = "<span style='color: red;'>You are morbidly (deathly) fat.</span>"
          }
          if (finalBmi > 45) {
          document.getElementById("fat").innerHTML = "<span style='color: red;'>Something needs to change today.</span>";
          }
//------------------------------------FUTURE BMI RESULTS------------------------------------
          if (goalBmi < 18.5) {
            document.getElementById("futureFat").innerHTML = "<span style='color: orange;'>You will be the opposite of fat, which can still be a problem.</span>"
          }
          if (goalBmi > 18.5 && goalBmi < 25) {
            document.getElementById("futureFat").innerHTML = "<span style='color: green;'>You won't be fat. Congrats!</span>"
            fat.style.fontWeight = 'bold';
          }
          if (goalBmi > 25 && goalBmi < 30) {
            document.getElementById("futureFat").innerHTML = "<span style='color: orange;'>You will be fat, but not crazy fat.</span>"
          }
          if (goalBmi > 30 && goalBmi < 35) {
            document.getElementById("futureFat").innerHTML = "<span style='color: orange;'>You will be pretty fat.</span>"
          }
          if (goalBmi > 35 && goalBmi < 45) {
            document.getElementById("futureFat").innerHTML = "<span style='color: red;'>You will be morbidly (deathly) fat.</span>"
          }
          if (goalBmi > 45) {
          document.getElementById("futureFat").innerHTML = "<span style='color: red;'>You will need to continue your journey, because you will be ridiculously fat still.</span>";
          }
          if (goalBmi > 45) {
          document.getElementById("futureFat").innerHTML = "<span style='color: red;'>You will need to continue your journey, because you will be ridiculously fat still.</span>";
          }

//-----------------------------------TDEE Calc-------------------------------------------------
        
//------------------------------------Caloric-Weight-GoalBMI------------------------------------
          document.getElementById("weightLose").innerHTML = "<span style='color: #00D4FF;'>"+toLose+"lbs</span>";

          document.getElementById("calBurnTot").innerHTML = "<span style='color: #00D4FF;'>"+calsString+" calories</span>";

          document.getElementById("calBurnWk").innerHTML = "<span style='color: #00D4FF;'>"+calWeeksString+" calories</span>";

          document.getElementById("calBurnDay").innerHTML = "<span style='color: #00D4FF;'>"+calDayString+" calories</span>";

          document.getElementById("myGlBmi").innerHTML = "<span style='color: #00D4FF;'>"+finalGoalBmi+"</span>";

          document.getElementById("fDate").innerHTML = goalDform;
        
          document.getElementById("gWeight").innerHTML = "<span style='color: #00D4FF;'>"+goalW+"lbs</span>";

//-------------------------------------------BMR--------------------------------------------------------
        if(document.getElementById('s1') .checked) {
            bmr = bmrMale;
            fBmr = fBmrMale;
            document.getElementById("bmr1").innerHTML = "<span style='color: #00D4FF;'>"+numeral(bmr).format('0,0')+" cals per day.</span>";
            document.getElementById("bmr2").innerHTML = "<span style='color: #00D4FF;'>"+numeral(fBmr).format('0,0')+" cals per day.</span>";
          }else if(document.getElementById('s2') .checked) {
            bmr = bmrFemale;
            fBmr = fBmrFemale;
            document.getElementById("bmr1").innerHTML = "<span style='color: #00D4FF;'>"+bmr+" cals per day.</span>";
            document.getElementById("bmr2").innerHTML = "<span style='color: #00D4FF;'>"+fBmr+" cals per day.</span>";
          }
        if(document.getElementById('a1') .checked) {
            document.getElementById("totDee").innerHTML = "<span style='color: #00D4FF;'>"+(bmr * 1.2).toFixed(0)+" cals per day.</span>";
          }else if(document.getElementById('a2') .checked) {
            document.getElementById("totDee").innerHTML = "<span style='color: #00D4FF;'>"+(bmr * 1.375).toFixed(0)+" cals per day.</span>";
          }else if(document.getElementById('a3') .checked) {
            document.getElementById("totDee").innerHTML = "<span style='color: #00D4FF;'>"+(bmr * 1.55).toFixed(0)+" cals per day.</span>";
          }else if(document.getElementById('a4') .checked) {
            document.getElementById("totDee").innerHTML = "<span style='color: #00D4FF;'>"+(bmr * 1.725).toFixed(0)+" cals per day.</span>";
          }else if(document.getElementById('a5') .checked) {
            document.getElementById("totDee").innerHTML = "<span style='color: #00D4FF;'>"+(bmr * 1.9).toFixed(0)+" cals per day.</span>";
          }
        }

        function delay() {
            setTimeout(calculateFatness, 200);
         }
        function delay2() {
          setTimeout(checkDeficit, 250);
         }

       function checkDeficit() {
        var today = moment();
        var weight = document.getElementById("weight1").value;
        var goalW = document.getElementById("weight2").value;
        var toLose = weight - goalW;
        var goalD = document.getElementById("date1").value;
        var goalDform = moment(goalD).format("MMM Do YYYY"); 
        var daysToGoal = today.diff(goalD, 'day');
        var positiveDays = Math.abs(daysToGoal);
        var calsBurn = toLose * 3500;
        var CalDay = calsBurn / positiveDays;

        if (CalDay > 1000) { 
            alert("Warning, daily deficit is over 1000 calories which can be unsustainable or troublesome in your overall effort");
          }
         }

// attach to input with id of date1
$('#date1').datepicker({autoHide: true});
// Attach click here
$("#calculate").click(function(){
  delay();
  delay2();
});

$("input").keypress(delay);
$("input").click(delay
);
});
</script>
      
      </head>
      
      <body>
      
        <div style="float:left;">
          <form name="fatForm">
            <h1>Current You</h1>
            <h4>Sex</h4>
            <input type="radio" name="sex" id="s1" value="male" checked> Male<br />
            <input type="radio" name="sex" id="s2" value="female"> Female<br />
            <h4>Activity Level</h4>
            <input type="radio" name="activity" id="a1" value="a1" checked> Sedentary (little to no exercise + work a desk job)<br />
            <input type="radio" name="activity" id="a2" value="a2"> Lightly Active (light exercise 1-3 days / week)<br />
            <input type="radio" name="activity" id="a3" value="a3"> Moderately Active (moderate exercise 3-5 days / week)<br />
            <input type="radio" name="activity" id="a4" value="a4"> Very Active (heavy exercise 6-7 days / week)<br />
            <input type="radio" name="activity" id="a5" value="a5"> Extremely Active (very heavy exercise, hard labor job, training 2x / day)<br /> <br />
            Your Age: <input type="number" id="age1" size="10"><br />
            Your Weight(lb): <input type="number" id="weight1" size="10"><br />
            Your Goal Weight(lb): <input type="number" id="weight2" size="10"><br />
            Your Height: <input type="text" id="ft" size="2">ft <input type="text" id="in" size="2">in<br />
            When Do You Want To Meet Your Goal?:<input type="text" id="date1" name="date1"/> <br/>
            <u>Your BMI Now</u>: <span id="myBmi" style='color: grey;'>???</span><br />
            <u>Which Means</u>: <span id="fat" style='color: grey;'>???</span><br />
            <u>Your Basal Metabolic Rate</u>: <span id="bmr1" style='color: grey;'>???</span><br />
            <u>Your TDEE</u>: <span id="totDee" style='color: grey;'>???</span><br />
          </form>
          <Button id="calculate">Calculate</Button>
          <Button onClick="window.location.reload();">Reset</Button>
        </div>

        <div style="float:left;">
          <form name="futureForm">
            <h1>You On <span id="fDate"></span> </h1>
            <u>Weight</u>: <span id="gWeight" style='color: grey;'>???</span><br />
            <u>BMI</u>: <span id="myGlBmi" style='color: grey;'>???</span><br />
            <u>Which Would Mean</u>: <span id="futureFat" style='color: grey;'>???</span><br />
            <u>Total Calories Of Fat Burned</u>:  <span id="calBurnTot" style='color: grey;'>???</span><br />
            <u>Weekly Defecit To Meet My Goal</u>:  <span id="calBurnWk" style='color: grey;'>???</span><br />
            <u>Daily Deficit To Meet My Goal</u>:  <span id="calBurnDay" style='color: grey;'>???</span><br />
            <u>Total Weight Lost</u>:  <span id="weightLose" style='color: grey;'>???</span><br />
            <u>Future Basal Metabolic Rate</u>: <span id="bmr2" style='color: grey;'>???</span><br />
          </form>
        </div>

      </body>
      </html>