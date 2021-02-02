const friends = ["qw", "er", "rt", "df", "as"];
// const [choto, next]=friends;
// console.log(choto,next);
const [choto, next, ...rest] = friends;
console.log(...rest);


const complexObject = {
    name: "abc",
    info: {
        address: "Kolabagan",
        leader: "Tiger"
    }
}
const { leader } = complexObject.info;