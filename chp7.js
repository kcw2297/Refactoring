/*
레코드 캡슐화하기
*/

const organization = new Organization({name:"구스배리", country:"GB"}) 


result += `<h1>${getOrganization().name}</h1>`


function getOrganization(){
    return organization;
}

class Organization{
    constructor(data){
        this._name = data.name;
        this._country = data.country;
    }

    get name(){
        return this._name;
    }
    set name(aString) {this._name = aString;}

    get country(){
        return this._country;
    }
    set country(aString) {this._country = aString;}
}
