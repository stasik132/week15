let user = {
    name: "Stas",
    age: 16,
    height: 170,
    place: "Lviv",
    toString:function(){
        return `name: ${this.name}; age:{this.age}; height:{this.height}; place:{this.place};`;
    }
};
console.log(user.name);
console.log(user.age);
console.log(user.height);
console.log(user.place);
console.log(user.toString());
for(let key in user){
    console.log("key: " + key + "; value: " + [user]);
}
let userJson = JSON.stringify(user);
console.log(userJson);






var contacts = new Map();
contacts.set("kuk", "0673712006").set("ura","0980172804").set("monkey","0679505714");
console.log(contacts)
for(let [key,value] of contacts){
    console.log(key + " contact " + value);
}