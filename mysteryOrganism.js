// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate(){
      let randomBaseIndex = Math.floor(Math.random()*array.length);
      let originalBase = array[randomBaseIndex];
      while(array[randomBaseIndex] = originalBase){
        array[randomBaseIndex] = returnRandBase();
      }
      return this.dna;
    },
    compareDNA(sample){
      let counter = 0
      for(let i = 0; i < 15; i++){
        if(sample.dna[i] == this.dna[i]){
          counter += 1;
        }
      }
      let percentage = counter/15;
      return  `specimen #${sample.specimenNum} and specimen #${this.specimenNum} have ${percentage}% DNA in common.`
    },
    willLikelySurvive(){
      let counter = 0;
      for(let i = 0; i < 15; i++){
        if(this.dna[i] == 'C' || this.dna[i] == 'G'){
          counter += 1;
        }
      }
      let percentage = counter/15;
      if(percentage >= 0.60){
        return true;
      } else {
        return false;
      }
    }
  }
};

let pAequorArray = [];

//Creating 30 instances of survivable pAequor
let n = 1;

while(pAequorArray.length < 30){
  let instance = pAequorFactory(n, mockUpStrand());
  console.log(instance.willLikelySurvive());
  if(instance.willLikelySurvive()){
    pAequorArray.push(instance);
    n++;
  } 
}

console.log(pAequorArray);



