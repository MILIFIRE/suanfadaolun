const maze = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0]
]
function rat_in_maze(maze, pos = [0, 0], path = [[0, 0]], throught = []) {
  const [x, y] = pos;
  if (maze[x][y] == 2) {
    path.forEach(([x, y]) => maze[x][y] = 'x')
    return maze;
  }
  throught[x * maze[0].length + y] = 1;
  const choice = [
    [x + 1, y], [x, y + 1],
    [x - 1, y], [x, y - 1]
  ].filter(([x, y]) => x >= 0 && y >= 0 && x < maze[0].length && y < maze.length && (maze[x][y] !== 1) && !throught[x * maze[0].length + y]);
  for (let [x, y] of choice) {
    let p = rat_in_maze(maze, [x, y], path.concat([[x, y]]), throught)
    if (p) return p;
  }

}
console.log(rat_in_maze(maze))