var temp = document.querySelector('#temp');
var tempInstance = Handlebars.compile(temp.innerHTML);

var usersName = document.querySelector('#usersName');
var goal = document.querySelector('#goal');
var goalTitle = document.querySelector('#goalTitle');

var submitBtn = document.querySelector('#submit');

var outPut = document.querySelector('.outPut')
var secondOutPut = document.querySelector('.secondOutPut')

var pastGoals = document.querySelector('#pastGoals')

var pastGoalList = document.querySelector('#pastGoalList')
var pastGoalListTemplate = Handlebars.compile(pastGoalList.innerHTML);

var sCheckBox = document.querySelector("#sBox")
var mCheckBox = document.querySelector("#mBox")
var aCheckBox = document.querySelector("#aBox")
var rCheckBox = document.querySelector("#rBox")
var tCheckBox = document.querySelector("#tBox")

var smartGoals = [];

submitBtn.addEventListener("click", function() {

  if (usersName.value === "" && goal.value === "" && goalTitle.value === "") {
    secondOutPut.innerHTML = "fill all empty fields"
    return;
  }

  if (sCheckBox.checked && mCheckBox.checked && aCheckBox.checked && rCheckBox.checked && tCheckBox.checked) {

    secondOutPut.innerHTML = tempInstance({
      goalDefination: goal.value,
      goalTitle: goalTitle.value,
      name: usersName.value
    })
    smartGoals.push({
      goalDefination: goal.value,
      goalTitle: goalTitle.value,
      name: usersName.value
    });

    goal.value = ""
    goalTitle.value = ""
    usersName.value = ""
    // add to LocalStorage
    localStorage['smartGoals'] = JSON.stringify(smartGoals);

  } else if (!sCheckBox.checked && mCheckBox.checked && aCheckBox.checked && rCheckBox.checked && tCheckBox.checked) {
    secondOutPut.innerHTML = "your goal is not SPECIFIC!!!"
  } else if (sCheckBox.checked && !mCheckBox.checked && aCheckBox.checked && rCheckBox.checked && tCheckBox.checked) {
    secondOutPut.innerHTML = "your goal is not MEASURABLE!!!"
  } else if (sCheckBox.checked && mCheckBox.checked && !aCheckBox.checked && rCheckBox.checked && tCheckBox.checked) {
    secondOutPut.innerHTML = "your goal is not ACHIEVABLE!!!"
  } else if (sCheckBox.checked && mCheckBox.checked && aCheckBox.checked && !rCheckBox.checked && tCheckBox.checked) {
    secondOutPut.innerHTML = "your goal is not RELEVANT!!!"
  } else if (sCheckBox.checked && mCheckBox.checked && aCheckBox.checked && rCheckBox.checked && !tCheckBox.checked) {
    secondOutPut.innerHTML = "your goal is not TIME-BOUND!!!"
  } else {
    secondOutPut.innerHTML = "This is not a <mark>SMART</mark> goal"
  }




});

pastGoals.addEventListener("click", function(){
var pastGoalsObj = JSON.parse(localStorage.getItem('smartGoals'));

outPut.innerHTML =  pastGoalListTemplate({goals : pastGoalsObj}) //JSON.stringify(pastGoalsObj);
console.log(pastGoalsObj);

  });
  // done
