/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let start_pixel = image[sr][sc];

  dfs(image, sr, sc, color, start_pixel);

  return image;
};

const dfs = (image, sr, sc, color, start_pixel) => {
  // image[sr][sc] == newColor or image[sr][sc] != initial
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[0].length ||
    image[sr][sc] === color ||
    image[sr][sc] !== start_pixel
  )
    return;

  image[sr][sc] = color;

  dfs(image, sr + 1, sc, color, start_pixel);
  dfs(image, sr - 1, sc, color, start_pixel);
  dfs(image, sr, sc + 1, color, start_pixel);
  dfs(image, sr, sc - 1, color, start_pixel);
};

// https://leetcode.com/problems/flood-fill/discuss/2458678/javascript-solution-99-faster-95-memory-efficient
