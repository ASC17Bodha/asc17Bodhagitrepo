var map1=new Map();
map1.set('NitishJ','Maggi');
map1.set('Rajat','Noodles');
map1.set('NitishV','Pongal');
map1.set('HarshM','Mushroom');
map1.set('Jalaj','Paneer chili');

console.log(map1);

for(let[keys,values]of map1){
    console.log(keys," likes ",values);
}


var map2=new Map([
    ['Nitish','Pongal'],
    ['Rajat','Noodles']
]);

map2.forEach((foodname , pname)=>{
    console.log(`${pname} likes ${foodname}`);
});
