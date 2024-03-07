
// console.log(403092344823094);


// triangle-function
function triangle(){
    const triangleBase = document.getElementById('1st-triangle-Box');
    triangleBaseValue = parseFloat(triangleBase.value);
    // console.log(triangleBaseValue);
    const triangleHeight = document.getElementById('2th-triangle-Box');
    triangleHeightValue = parseFloat(triangleHeight.value);
    const result = 0.5 * triangleBaseValue * triangleHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    triangleBase.value = '';
    triangleHeight.value = '';
}
// rectangle-function
function rectangle(){
    const rectangleBase = document.getElementById('1st-rectangle-Box');
    rectangleBaseValue = parseFloat(rectangleBase.value);
    const rectangleHeight = document.getElementById('2th-rectangle-Box');
    rectangleHeightValue = parseFloat(rectangleHeight.value);
    // 
    const result = rectangleBaseValue * rectangleHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    rectangleBase.value = '';
    rectangleHeight.value = '';
}
// Parallenlogram
function Parallenlogram(){
    const ParallenlogramBase = document.getElementById('1st-Parallenlogram-Box');
    ParallenlogramBaseValue = parseFloat(ParallenlogramBase.value);
    const ParallenlogramHeight = document.getElementById('2th-Parallenlogram-Box');
    ParallenlogramHeightValue = parseFloat(ParallenlogramHeight.value);
    // 
    const result = ParallenlogramBaseValue * ParallenlogramHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    ParallenlogramBase.value = '';
    ParallenlogramHeight.value = '';
}
// rhombus
function rhombus(){
    const rhombusBase = document.getElementById('1st-rhombus-Box');
    rhombusBaseValue = parseFloat(rhombusBase.value);
    const rhombusHeight = document.getElementById('2th-rhombus-Box');
    rhombusHeightValue = parseFloat(rhombusHeight.value);
    // 
    const result = 0.5* rhombusBaseValue * rhombusHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    rhombusBase.value = '';
    rhombusHeight.value = '';
}
// pentagon
function pentagon(){
    const pentagonBase = document.getElementById('1st-pentagon-Box');
    pentagonBaseValue = parseFloat(pentagonBase.value);
    const pentagonHeight = document.getElementById('2th-pentagon-Box');
    pentagonHeightValue = parseFloat(pentagonHeight.value);
    // 
    const result = 0.5* pentagonBaseValue * pentagonHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    pentagonBase.value = '';
    pentagonHeight.value = '';
}
//  ellipse       pi=3.14159265359
function ellipse(){
    const ellipseBase = document.getElementById('1st-ellipse-Box');
    ellipseBaseValue = parseFloat(ellipseBase.value);
    const ellipseHeight = document.getElementById('2th-ellipse-Box');
    ellipseHeightValue = parseFloat(ellipseHeight.value);
    // 
    const result = 3.14159265359 * ellipseBaseValue * ellipseHeightValue;
    document.getElementById('result-Box').innerText = result.toFixed(2);
    ellipseBase.value = '';
    ellipseHeight.value = '';
}






















