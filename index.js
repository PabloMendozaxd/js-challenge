class User {
  constructor(userData) {
    this.name=userData.name;
    this.lastname=userData.lastname;
    this.username=userData.username;
    this.age=userData.age;
    this.email=userData.email;
    this.isAdult=userData.isAdult;
    this.savedMoney=userData.savedMoney;
    this.debtAmount=userData.debtAmount;
  }
  displayUserInformation(){
    if (this.isAdult) {
      console.log(`Hi there ${this.name} ${this.lastname}, your username is @${this.username}, you are ${this.age} years old and your email is ${this.email}`);
    }else{
      console.log('Only 21 or older users can access, sorry.')
    }
  }
  collectDebt(){
    if (this.debtAmount>0) {
      let newAmount=this.savedMoney-this.debtAmount;
      console.log(`Stop your horse cowboy! 🤠 You ow me ${this.debtAmount} cash... We can make a deal, you have ${this.savedMoney}, If I take the money from your account you will have ${newAmount}`)
    }
  }
}

let myUser={
  name:'José',
  lastname:'Mendoza',
  username: 'prrocontento',
  age: 21,
  email:'prro@contento.com',
  isAdult:true,
  savedMoney: 51000.50,
  debtAmount: 10000.75
}

// new User(myUser).collectDebt()

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function nameUser(name,lastname,nickname) {
  let completeName=`${name} ${lastname}`
  return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

nameUser('José','Mendoza','prrocontento');