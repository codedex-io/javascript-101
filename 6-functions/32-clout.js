// YouTube Stats ▶️
// Codédex
'use strict'
const weeklyYouTubeStats = [2.3, 4.8, 6.7, 7.0, 1.9, 8.4, 5.2];

function mean() {
  let totalViews = 0;
  
  for (let i = 0; i < weeklyYouTubeStats.length; i++) {
    totalViews += weeklyYouTubeStats[i];
  }
  
  return totalViews / weeklyYouTubeStats.length;
}

function median() {
  const sortedStats = weeklyYouTubeStats.sort();
  const middleIndex = Math.floor(weeklyYouTubeStats.length / 2);
  
  return sortedStats[middleIndex];
}

console.log(mean());
console.log(median());