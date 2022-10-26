let candName = document.getElementById('name_input')
let candAge = document.getElementById('age_input')
let candJambScore = document.getElementById('jamb_input')
let candOneSitting = document.getElementById('one_sitting_input')
let candEng = document.getElementById('olevel_english_input')
let candMaths = document.getElementById('olevel_maths_input')
let candSubj1 = document.getElementById('olevel_subject1_input')
let candSubj2 = document.getElementById('olevel_subject2_input')
let candSubj3 = document.getElementById('olevel_subject3_input')
let candPostUtme = document.getElementById('post_utme_input')
let candStateOfOrigin = document.getElementById('state_of_origin_input')
let admissionResult = document.getElementById('result')

let btn = document.getElementById('checkAdmission')

let checkCircle = document.getElementsByClassName("check_circle")

let circleArray = Object.values(checkCircle)

function candWaec() {
  if (candEng.value === "A1") {
    candEng = 10;
  }
  if (candMaths.value === "A1") {
    candMaths = 10;
  }
  if (candSubj1.value === "A1") {
    candSubj1 = 10;
  }
  if (candSubj2.value === "A1") {
    candSubj2 = 10;
  }
  if (candSubj3.value === "A1") {
    candSubj3 = 10;
  }
  if (candEng.value === "B2") {
    candEng = 9;
  }
  if (candMaths.value === "B2") {
    candMaths = 9;
  }
  if (candSubj1.value === "B2") {
    candSubj1 = 9;
  }
  if (candSubj2.value === "B2") {
    candSubj2 = 9;
  }
  if (candSubj3.value === "B2") {
    candSubj3 = 9;
  }
  if (candEng.value === "B3") {
    candEng = 8;
  }
  if (candMaths.value === "B3") {
    candMaths = 8;
  }
  if (candSubj1.value === "B3") {
    candSubj1 = 8;
  }
  if (candSubj2.value === "B3") {
    candSubj2 = 8;
  }
  if (candSubj3.value === "B3") {
    candSubj3 = 8;
  }
  if (candEng.value === "C4") {
    candEng = 7;
  }
  if (candMaths.value === "C4") {
    candMaths = 7;
  }
  if (candSubj1.value === "C4") {
    candSubj1 = 7;
  }
  if (candSubj2.value === "C4") {
    candSubj2 = 7;
  }
  if (candSubj3.value === "C4") {
    candSubj3 = 7;
  }
  if (candEng.value === "C5") {
    candEng = 6;
  }
  if (candMaths.value === "C5") {
    candMaths = 6;
  }
  if (candSubj1.value === "C5") {
    candSubj1 = 6;
  }
  if (candSubj2.value === "C5") {
    candSubj2 = 6;
  }
  if (candSubj3.value === "C5") {
    candSubj3 = 6;
  }
  if (candEng.value === "C6") {
    candEng = 5;
  }
  if (candMaths.value === "C6") {
    candMaths = 5;
  }
  if (candSubj1.value === "C6") {
    candSubj1 = 5;
  }
  if (candSubj2.value === "C6") {
    candSubj2 = 5;
  }
  if (candSubj3.value === "C6") {
    candSubj3 = 5;
  }
  if (candEng.value === "D7") {
    candEng = 4;
  }
  if (candMaths.value === "D7") {
    candMaths = 4;
  }
  if (candSubj1.value === "D7") {
    candSubj1 = 4;
  }
  if (candSubj2.value === "D7") {
    candSubj2 = 4;
  }
  if (candSubj3.value === "D7") {
    candSubj3 = 4;
  }
  if (candEng.value === "E8") {
    candEng = 3;
  }
  if (candMaths.value === "E8") {
    candMaths = 3;
  }
  if (candSubj1.value === "E8") {
    candSubj1 = 3;
  }
  if (candSubj2.value === "E8") {
    candSubj2 = 3;
  }
  if (candSubj3.value === "E8") {
    candSubj3 = 3;
  }
  if (candEng.value === "F9") {
    candEng = 0;
  }
  if (candMaths.value === "F9") {
    candMaths = 0;
  }
  if (candSubj1.value === "F9") {
    candSubj1 = 0;
  }
  if (candSubj2.value === "F9") {
    candSubj2 = 0;
  }
  if (candSubj3.value === "F9") {
    candSubj3 = 0;
  }
}
candWaec();




function Candidate(candName, candAge, candJambScore, candOneSitting, candPostUtme, candStateOfOrigin) {
  this.name = candName.value;
  this.age = candAge;
  this.jambScore = candJambScore;
  this.oneSitting = candOneSitting;
  this.pUtme = candPostUtme;
  this.stateOfOrigin = candStateOfOrigin.value;
  this.oLevelScore = Math.floor(
    (candEng + candMaths + candSubj1 + candSubj2 + candSubj3) * 30 / 50
  );
  // console.log(this.oLevelScore)
  btn.addEventListener('click', this.verifyCandidate = () => {
    // console.log('hyuuutrr');
    this.age = Number(candAge.value)
    this.jambScore = Number(candJambScore.value)
    this.oneSitting = Number(candOneSitting.value)
    this.pUtme = Number(candPostUtme.value)
    // console.log("I'm in")
  
    this.totalScore = Math.floor(
      this.jambScore / 8 + this.pUtme + this.oLevelScore
    );
    if(this.jambScore > 400 || this.pUtme > 20){
      admissionResult.innerText = 'Invalid Input in your scores'
    }
    if (
      this.jambScore < 180 ||  
      this.pUtme < 12 ||
      this.age < 16 ||
      this.oneSitting > 1 ||
      this.totalScore < 60 ||
      candEng < 5 ||
      candMaths < 5 ||
      candSubj1 < 5 ||
      candSubj2 < 5
    ) {
      admissionResult.innerText = "I'm sorry, you did not qualify for admission";
      // console.log(this.totalScore)
    } else if (this.totalScore >= 80 && this.totalScore <= 100) {
      admissionResult.innerText = "You gained admission on merit list";
      
    } else if (this.totalScore >= 75 && this.totalScore < 80) {
      admissionResult.innerText = "You passed on conscensionary";
    } else if (
      this.totalScore >= 65 &&
      this.totalScore < 75 &&
      this.stateOfOrigin === "Lagos" &&
      this.stateOfOrigin === "Edo" &&
      this.stateOfOrigin === "Niger" &&
      this.stateOfOrigin === "Ogun" &&
      this.stateOfOrigin === "Ondo" &&
      this.stateOfOrigin === "Osun" &&
      this.stateOfOrigin === "Oyo" &&
      this.stateOfOrigin === "Ekiti"
    ) {
      admissionResult.innerText = "You got admitted on Catchment List";
    } 
    else if (
      this.totalScore >= 65 &&
      this.totalScore < 75 &&
      this.stateOfOrigin !== "Lagos" &&
      this.stateOfOrigin !== "Edo" &&
      this.stateOfOrigin !== "Niger" &&
      this.stateOfOrigin !== "Ogun" &&
      this.stateOfOrigin !== "Ondo" &&
      this.stateOfOrigin !== "Osun" &&
      this.stateOfOrigin !== "Oyo" &&
      this.stateOfOrigin !== "Ekiti"
    ) {
      admissionResult.innerText = "You are on VC list";
      
    } 
    else if (this.totalScore >= 60 && this.totalScore < 64) {
      admissionResult.innerText = "You are on VC List";
    }
  });

}

candName.addEventListener('keyup', () => {
  circleArray[0].style.backgroundColor = 'lightgreen';
})

candAge.addEventListener('keyup', () => {
    circleArray[1].style.backgroundColor = 'lightgreen'
})

candJambScore.addEventListener('keyup', () => {
  circleArray[2].style.backgroundColor = 'lightgreen'
})

candOneSitting.addEventListener('keyup', () => {
  circleArray[3].style.backgroundColor = 'lightgreen'
})

candPostUtme.addEventListener('keyup', () => {
  circleArray[9].style.backgroundColor = 'lightgreen'
})

candStateOfOrigin.addEventListener('keyup', () => {
  circleArray[10].style.backgroundColor = 'lightgreen'
})


let candidate1 = new Candidate(candName, candAge, candJambScore, candOneSitting, candPostUtme, candStateOfOrigin);


