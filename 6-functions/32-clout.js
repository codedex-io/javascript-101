// Clout 😎
// Codédex

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

function mean(viewsArray) {
  let totalViews = 0;

  for(let i = 0; i < viewsArray.length; i++) {
    totalViews += viewsArray[i];
  }

  return totalViews / viewsArray.length;
}

function median(viewsArray) {
  const sortedStats = viewsArray.sort();
  const middleIndex = Math.floor(viewsArray.length / 2);
  
  return sortedStats[middleIndex];
}

// TikTok
console.log("TikTok");
console.log("Mean:", mean(recentTikTokViews));
console.log("Median:", median(recentTikTokViews));

// Instagram
console.log("Instagram");
console.log("Mean:", mean(recentInstagramViews));
console.log("Median:", median(recentInstagramViews));

// YouTube
console.log("YouTube");
console.log("Mean:", mean(recentYouTubeViews));
console.log("Median:", median(recentYouTubeViews));