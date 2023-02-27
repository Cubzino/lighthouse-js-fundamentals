const calculateRectangleArea = function (length, width){
  if (length < 0 || width < 0) {
    return undefined;
  }
  
  const area = length * width
  return area

}
const calculateTriangleArea = function (base, height){
  if (base < 0 || height < 0) {
    return undefined;
  }
  
  
  const area = (base*height)/2
  return area
}

const calculateCircleArea = function (radius){
  if (radius < 0) {
    return undefined;
  }
  
  
  const area = Math.PI * (radius*radius)
  return area
}
