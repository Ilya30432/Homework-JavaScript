function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Apartments() {
    this.residents = [];
    this.addResident = function(resident) {
        if (resident instanceof Human) {
            this.residents.push(resident);
        } else {
            return 'Error';
        }
    };
}

function Building(maxFlat) {
    this.flats = [];
    this.maxFlat = maxFlat;
    this.addFlat = function(apartment) {
        if(apartment instanceof Apartments){
            if (this.flats.length < this.maxFlat) {
                this.flats.push(apartment);
            } else {
                console.log('Лимит перевышен по квартирам')
            }
        } else {
            return 'Error'
        }
    };
}

const Nikita = new Human('Nikita', 'Man');
const Nastya = new Human('Nastya', 'woman');
const Katya = new Human('Katya', 'woman');

const apartment = new Apartments();
apartment.addResident(Nikita);
const apartment1 = new Apartments();
apartment1.addResident(Nastya);
const apartment2 = new Apartments();
apartment2.addResident(Katya)

const building = new Building(2);
building.addFlat(apartment);
building.addFlat(apartment1);
building.addFlat(apartment2)
console.log(building.flats)