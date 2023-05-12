// let akram={
//     name:johan,
//     age:22,
//     nickname:sulthan
// }


//objects
// document.write("akram.nickname");
// let school={
//     name:"akrma",
//     age:"23",
//     nickname:"sulthan"
// }
// document.write(school.age);
// let ans=school['name'];
// document.write(ans);


//arrays
// let arr=["akram","sulthan",56];
// document.write(arr);
// arr[0]="sulthan";
// arr[2]=undefined;
// document.write(arr);

// let ans=78;
// let a="78";
// document.write(ans===a);

// for(let i=0;i<6;i++){
//     document.write(i);
// }

// let value=0;
// let ans={
//     length:45,
//     breadth:43,
//     cal:function(value){
//         document.write(this.length* this.breadth * value);
//     }
// }

// ans.cal(value);

// //adding 
// ans.first="akram";
// //method
// ans.stop=function(){
//    document.write("i created a function");
// }

// document.write(ans.stop() + " " +ans.cal() );


//factory for multiple objects 
// function akram(){
//     return ans={
//         length:10,
//         breadth:2,
//         cal(){
//             document.write(this.length * this.breadth);
//         }
//     };
// }
// let ak=akram();
// document.write(ak.ans);
// ak.extra=100;
// ak.show=function(){
//     document.write("hello world");
// }

// document.write(ak.cal()+" "+ak.breadth);
// document.write(ak.show());

// delete ak.length;
// document.write(ak.length);

// //with inputs 
// function akram(len ,bre){
//     return ans={
//         len,
//         bre,
//         cal(){
//             document.write(this.len * this.bre);
//         }
//     };
// }
// let ak=akram(100,10);
// document.write(ak.cal());

//constructor function
// function rectangle(){
//     this.length=1,
//     this.breadth=2,
//     this.cal=function(){
//           document.write("akram sulthan "+ this.length * this.breadth);
//     }
// }
// //objecr cereation
// let ak=new rectangle();
// document.write(ak.breadth +" " +ak.cal());

// let ans=rectangleobject.constructor;
// document.write(ans);

//for in loop in objects
// let ak={
//     length:10,
//     breadth:20,
//     age:"akrma"
// }
// // for(let i in ak){
// //     document.write( i+"=> " + ak[i]);
// // }

// if("ages" in ak){
//     document.write("present");
// }
// else{
//     document.write("not present");
// }

// //object  cloning 
// //iteration copying
// let ans={};
// ak.breadth++;
// for(let key in ak){
//     ans[key]=ak[key];
// }
// ak.breadth++;
// document.write("the new object is "+ans.breadth);

// //assiging cloning
// let as=Object.assign({},ans);
// document.write("the again object is "+as.age);
// ans.breadth++;
// document.write(as.breadth);

// //spread cloning
// let sp={...ak};
// document.write("the answer will be"+sp.length);

//template litera
//place holder 
// let ak="john cena ";

// let message =`this is ${ak}
// what we all want in our life
// hahha`;
// document.write(message);

// document.write("today date is "+ Date.getDate());

// //Arrays
// let ak=["akram","sulthan","mohammed"];
// document.write(ak[0]);

// let ans=new Array(20,230,40,40);
// document.write(ans);

//insertion 
//at the end
// ak.push("sulthan");
// document.write(ak);
// //at the middle
// ak.unshift("jong");
// document.write(ak);
// //at the begining
// ak.splice(2,0,"cena");
// document.write(ak);

// //includes for searching
// document.write(ak.includes("cena"));

//objects arrray in 
// let ak=[
//     {
//         length:20,
//         breadth:5,
//         age:23,
//         cal:function(){
//             document.write(this.length* this.age);
//         }
//     },
//     {
//         name:"john cena",
//         age:33
//     }
// ];
// document.write(ak[0].age);

// let ans=ak.finds(function(value){
//     return value.name==="john cena";
// })

// document.write(ans);

// //arrow function
// let akram=ak.open(value=>"this is what we need");
// document.write(akram);

// //combining the array
// let ak=["34",10,'hwlo'];
// let ans=[34,56,"sulthan"];
// let sol=ak.concat(ans);
// document.write(sol);
// let hen=ak.slice(0,1);
// document.write(hen);


// combining the array objects
// let ans=[{name:"akram",
//           age:23}];
// let ak=[{name:"sulthan",
// age:17
// }];
// let full=ans.map((item,i)=>Object.assign({},item,ak[i]));
// document.write(full[0].age);

// //slicing method
// let an=[...ak,...ans];
// document.write(an[0].age);

//arrys iteration using for of
// let ans=[10,20,304,04];
//for of methood
// for(let i of ans){
//     document.write(i);
// }
// //for each metod
// ans.forEach(function(value){
//     document.write(value);
// })

//using the arraow function
// ans.forEach(value=>document.write(value));
// let j=[34,54,56,56];
// let ak=ans.join(',');
// document.write(ak);
// let message=["this is my home town"];
// let ans2=Sentence.join('_');
// document.write(ans2);

// //sorting 
// let ak=ans.sort(a,b=>a-b);
// document.write(ak);

// //filtering the arrays
// let ak=ans.filter(vlaue=>vlaue<20);
// document.write(ak);

// //mapping the array with each element of the array
// let ak=ans.map(value=>"my name id "+value);
// document.write(ak);

// //map the array with additional objectss
// let a=ans.map(value=>{id:value},{name:value});
// document.write(a[0].id);

// //chaining the functions
// let ak=ans.filter(value=>value>10).map(value=>"the new filter id is"+value);
// document.write(ak);

// //reduce the array
// let a=ans.reduce(sum,value=> sum+value,0);
// document.write(a);

//unit 4 
//functions
// function akram(){
//     let ans=2*4;
//     document.write(ans);
// }
// document.write(akram());
// let ans=function move(value,len){
//     document.write("this is done by this" + value*len);
// }
// document.write(ans(1*2));

// //hoisting 
// document.write(name());
// function name(){
//     document.write("hello jee");
// }

// //anonymous function
// let ans=function(){
//     document.write("this is without name function");
// }
// ans();

//special arguments using passed the vlaue
// function sum(a,b){
//     let ans=0;
//     document.write("the arguments which you passed is "+arguments);
//     for(let i of arguments){
//         ans+=i;
//     }
//     document.write(ans);
// }
// sum(1,2,45,56);


//rest parameter
// function sum(...value){
//     // document.write(value);
//     let ans=0;
//     for(let i of value){
//         ans+=i;
//     }
//     document.write(ans);
// }
// let an=[1,2,34,5,5];
// sum(an);

// //default parameters value passed in the function
// function sum(p,v,r=10){
//     return p+v+r;
// }
// document.write(sum(10,10));

// //getters and setters
// let ak={
//     fname:"akram",
//     lname:"sulthan",

//     get fullname(){
//         return `${this.fname} and ${this.lname}`;
//     },
//     set fullname(value){
//         let parts=value.split(' ');
//         this.fname=parts[0],
//         this.lname=parts[1]
//     }
// }
// document.write(ak.fullname);
// ak.fullname="akram mohamed";
// document.write(ak.fullname);

// //try and catch
// try{
//     ak.fname=2;
// }
// catch(e){
//     alert("your the a wrong number");
// }