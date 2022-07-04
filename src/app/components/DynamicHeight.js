
export function getAllChartHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.7);
    } else {
      height = height * 0.57;
    }
    return height;
  }
  
export  function getChartHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.325);
    } else {
      height = height * 0.24;
    }
    return height;
  }

  export function getD2ChartHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.83);
    } else {
      height = height * 0.78;
    }
    return height;
  } 
  
  export function getFilterHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.325);
    } else {
      height = height * 0.245;
    }
    return height;
  }  

  export function getD3ChartHeight({ dfHeight, height }) {
  
    if (height === 969) {
      return dfHeight;
    } else if (height > 969) {
      return (height = height * 0.38);
    } else {
      height = height * 0.35;
    }
    return height;
  } 

  export function getMasonryHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.15);
    } else {
      height = height * 0.12;
    }
    return height;
  } 

  export function getCardHeight({ chartHeight, height }) {
  
    if (height === 969) {
      return chartHeight;
    } else if (height > 969) {
      return (height = height * 0.415);
    } else {
      height = height * 0.43;
    }
    return height;
  } 
    
export  function getYAxisSize(height) {
    var size=0
    size=height/60
    return size;
  }