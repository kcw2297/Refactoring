/* 
함수 옮기기
*/

function trackSummary(points){
    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistance(points);
    return {
        time : totalTime,
        distance : totalDistance(),
        pace : pace
    };

    
    function calculateTime(){}
}

function totalDistance(points){
    let result = 0;
    for (let i = 1; i < points.length; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;    
}
function distance(p1, p2){}
function radians(degrees){}


/* 
문장을 함수로 옮기기
*/

function renderPerson(outStream, person){
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n")
}

function photoDiv(p){
    return [
        "<div>",
        emitPhotoData(p),
        "</div>"
    ].join("\n");
}


function emitPhotoData(p){
    return [
        `<p>제목: ${p.title}</p>`,
        `<p> 위치: ${aPhoto.location}</p>`,
        `<p>제목: ${aPhoto.date.toDateString()}</p>`
    ].join("\n");
}


/* 
반복문 쪼개기
*/
let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people){
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
}
return `최연소 ${youngest}, 총 급여: ${totalSalary}`;

