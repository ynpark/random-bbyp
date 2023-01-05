const bb_path = 'bb.txt'
const bb_text = fs.readFileSync(bb_path).toString()
const bb_lines = bb_text.split('\n')
const bb_count = bb_lines.length
// console.log(bb_count)

const yp_path = 'yp.txt'
const yp_text = fs.readFileSync(yp_path).toString()
const yp_lines = yp_text.split('\n')
const yp_count = yp_lines.length
// console.log(yp_count)

const nthline = require('nthline')
let bb_random = getRandomInt(bb_count)
let yp_random = getRandomInt(yp_count)

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// nthline(bb_random, bb_path).then(console.log)
// nthline(yp_random, yp_path).then(console.log)

export default await new nthline(bb_random, bb_path)