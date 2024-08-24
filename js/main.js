// function mess(fname,lname) {
//     let message = `hello`;
//     function concatm() {
//         message = `${message} ${fname} ${lname}`;
//     }
//     concatm();
//     return message;
// }
// console.log(mess("yossef", "tamer"));



// ===============================================
/*


****create*****:
name={
  property:value,
  property:value,
  property:value,
  property:value,
  nameOfMethod:function(){
     .............
  },
};


-------------------
user=newObject()
-----------------

name=Object.create({})||name=Object.create()-> take example form object exist 
------------------
dot vs []

------------------
object:
     1-
     2-
     3-
     4-
     5-
     6-
-----------------
*/
// v="count"
// let user = {
//   name: "yossef",
//   age: 20,
//   count:"egypt",
//   "the Name": 'Ahmed',
//   skills: ["html", "css", "java"],
//   availabel: true,
//   add: {
//     ksa: "gdahh",
//     egypt: {
//       one:"ain shams",
//       two:"giza",
//     },
//   },
  
//   check: function () {
//     if (user.availabel===true) {
//       return "its free to hire";
//     } else {
//       return "not free to work";
//     }
//   },
// };
/**
 * 
 -------------------------------
 this->
  1-in method this refer to the owner object
  2-in global refer to window
  3-in func refer to window
  4-in strict mode this refer to undefined 
  5- un event this refer to the element that have even
-------------------------------------
 */
// console.log(user);
// console.log(user.add.egypt.one);
// console.log(user.add.egypt.two);
// console.log(user.add.ksa);
// console.log(user.availabel);
// console.log(user.count);
// console.log(user.skills.join(" | "));
// console.log(user.check());
// console.log(user.name);
// console.log(user.age);

// console.log(user[v]);





// let user = new Object({});
// user.age = 25;
// user["name"] = "yossef";
// user.say = function () {
//   return `your name is ${this.name}`;
  
// };
// console.log(user.say());
// console.log(user);



























/*
  reduce-> return one value
  reduce(function(acc->start , current->index=1 , index , arr),initial value)
  


  forEach-> retrun undefined
  forEach(function(ele,index,arr))
























// for(start,condition,action)
/*
============
array
============
unshift()->add at first
push()-> add at end
shift()-> remove first element
pop()->remove last
======================================
iOf(value,position)
lastiOf(value,position)-> from right to left
includes()
======================================
sort()
reverse()
==========================================
slice()-> return a new array
splice(start,number of elemnt deleted,value to replace deleted)
==========================================
concat()
join()
*/
/*
----------------------------------------------------
----------------------------------------------------
----------------------------------------------------
   DOM:
    -- find by id
    -- by tag name
    -- by class
    -- by css selector
    -- by collection
    -- by title
    -- body
    -- images
    -- forms
    -- links
    -----------------
    --innerHTML
    --textContent
    --get-/set/remove
    x.style.prop="value"
    x.style.cssText='prop:value;'
    


*/








