let person = {
    fullname: "le gia thuan",
    age: 2009,
    gender: "male",
};
/=================
truy vấn đề ///
console.log("cách 1: ", person.fullname);
console.log("cách 2: ", person["fullname"]);
=========
thêm key và value vô object
cách1


===================================
lặp qua từng key trong object
for(let item in person) {
    console.log(person)
}
