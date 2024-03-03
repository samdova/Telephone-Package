class Telephone {
    constructor() {
        this.phoneNumber = new Set()
        this.observer = new Set()
    }

    AddPhoneNumber (phoneNumber) {
        this.phoneNumber.add(phoneNumber)
    }

    RemovePhoneNumber(phoneNumber) {
        this.phoneNumber.delete(phoneNumber)
    }

    DialPhoneNumber(phoneNumber) {
        if(this.phoneNumber.has(phoneNumber)) {
            this.notifyObserver(phoneNumber)
        } else {
            console.log(`${phoneNumber} has not being added`)
        }
        
    }

    addObserver(observer) {
        this.observer.add(observer)
    }

    removeObserver(observer) {
        this.observer.delete(observer)
    }

    notifyObserver(phoneNumber){
        for (let observer of this.observer) {
            observer.update(phoneNumber);
        }
    }
}

class PhoneNumberObserver {
    update(phoneNumber) {
        console.log(phoneNumber);
    }
}

class PhoneNumberObserver2 {
    update(phoneNumber) {
        console.log(`Dalling: ${phoneNumber}`)
    }
}

const telephone = new Telephone();
const observer1 = new PhoneNumberObserver();
const observer2 = new PhoneNumberObserver2();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.AddPhoneNumber ("08028374658");
telephone.AddPhoneNumber ("09177346728");
telephone.AddPhoneNumber ("07033457838");
telephone.AddPhoneNumber ("08104503385");

telephone.RemovePhoneNumber("08104503385");

telephone.DialPhoneNumber("08104503385");
telephone.DialPhoneNumber("08028374658");