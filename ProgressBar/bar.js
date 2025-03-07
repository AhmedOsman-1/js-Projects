

// const progress = document.querySelector(".progress");
// const loading = document.querySelector(".loading");


// let i = 0;
// const fakeUploadPerc = [0, 10, 20, 32, 33, 45, 70, 78, 90, 100];
// const interval = setInterval(()=>{
//     progress.style.width = fakeUploadPerc[i] + "%"; 
//     loading.innerHTML = fakeUploadPerc[i] + "%";
//     i++; 
//     if(i === fakeUploadPerc.length){
//         clearInterval(interval);
//         loading.innerHTML=("Upload Complete");
//     }
// },1000);
const circle =  document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

 let i = 0;
const fakeUploadPerc = [0, 10, 20, 32, 33, 45, 70, 78, 90, 100];



const circumference = circle.getTotalLength();

const interval = setInterval(()=>{
    circle.style.strokeDashoffset = circumference - (circumference * fakeUploadPerc[i] / 100);
    loading.innerHTML = fakeUploadPerc[i] + "%";
    i++;
    if(i==fakeUploadPerc.length){
        clearInterval(interval)
        loading.innerHTML = "ok 🙂"
    }
},1000);