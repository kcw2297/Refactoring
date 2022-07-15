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
    result.push(`<p>제목: ${person.photo.title}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n")
}

function photoDiv(p){
    return [
        "<div>",
        `<p>제목: ${p.title}</p>`,
        emitPhotoData(p),
        "</div>"
    ].join("\n");
}

function emitPhotoData(aPhoto){
    const result = [];
    result.push(`<p> 위치: ${aPhoto.location}</p>`);
    result.push(`<p>제목: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
}
