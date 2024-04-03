// 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)

// let brithday=new Date ("03-28-2024");
// setInterval(() => {
//     let now= new Date();
//     let between=now-brithday;
//     let saniye=Math.trunc((between/1000)%60)
//     let deqiqe=Math.trunc(between/(1000*60)%60);
//     let saat =Math.trunc((between/(1000*60*60))%24);
//     let gun=Math.trunc(between/(1000*60*60*24));
//     let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     console.log(`%c${gun} gün %c${saat} saat %c${deqiqe} deqiqe %c${saniye} saniye`, `color:${color};`, `color:${color};`, `color:${color};`, `color:${color};`);
// }, 1000);

// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let students = [
//     {
//         name: "Farid Rustamli",
//         Surname: "Aliyev",
//         age: 24,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],
//     },
//     {
//         name: "Nail",
//         surname: "Akhundov",
//         age: 32,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],

//     },
//     {
//         name: "Ulvi",
//         surname: "Rustamli",
//         age: 25,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],
//     },
//     {
//         name: "Nazim",
//         surname: "Babayev",
//         age: 33,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],
//     },
//     {
//         name: "Remzi",
//         surname: "Yehyalı",
//         age: 32,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],
//     },
//     {
//         name: "Nigar",
//         surname: "Yusifli",
//         age: 23,
//         hobbies: ["skiing", "football", "travel"],
//         skills: ["Analyzing data ", " Team leadership", " Innovation", "Imagination"],
//     },
//     ]
// console.log(students);

// let studentNames = students.map(student => student.name);

// let studentName = prompt("Tələbənin adını daxil edin:");

// let index = studentNames.indexOf(studentName);

// if (index !== -1) {
//     console.log(students[index]);
// } else {
//     console.log("Belə bir tələbə tapılmadı.");
// }




// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

// let word = prompt("Bir söz daxil edin:");
// let length = word.length;


// for (let i = 0; i < length; i++) {
//     console.log(word.slice(0, length - i));
// }

// for (let i = 1; i < length; i++) {
//     console.log(word.slice(0, i + 1));
// }



// 4. toLocaleDateString(); ->arashdirmaq
