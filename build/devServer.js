const net = require ('net'); 
const chalk = require ('chalk'); 
var process = require('child_process');


let port = 8080; 
console.info(chalk.yellow.bold  ('\n端口检测中...'));
function setPort () {
  const server = net.createServer(); 
  server.listen (port, '0.0.0.0', () => {
    server.close(); 
    console.info(chalk.green.bold  ('\n检测完成 — port: ' + port + '\n'));
    process.execSync('yarn d', { 
      env: {
        ...process.env, 
        PORT: port, 
        HOST:'0.0.0.0'
      }, 
      stdio: 'inherit' 
    });
  })
  server.on ('error', () => {
    console.info(chalk.magenta.bold  ('\n重新寻找端口...'));
    port += 1; 
    setPort (); 
  })
}
setPort (); 