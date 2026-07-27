/**
 * Janeiro.ai — living point-field organism
 * Lineage: #つぶやきProcessing / yuruyurau-style parametric body
 * Palette: cyan / teal + soft green pulse
 *
 * Caption for X (not drawn into the frame):
 *   janeiro.ai — calm intelligence for LatAm
 */

let t = 0;

function setup() {
  createCanvas(400, 400);
}

/**
 * Maps one particle into the organism body.
 * Same structural family as the reference: mag + nested sin/cos,
 * then a folded spiral into screen space.
 */
function bodyPoint(index, y) {
  const k = (4 + cos(index / 9 - t * 2)) * cos(index / 35);
  const e = y / 7 - 13;
  const d = mag(k, e) + sin(e / 9 + t / 2) - 4;
  const q =
    2 * sin(k * 3) -
    (y / 35) * k * (9 + k * sin(cos(e) * 9 - d * 2 + t));
  const c = d - t;
  point(q + 40 * cos(c) + 200, q * sin(c) + d * 35);
}

function draw() {
  // Soft trail wash — the field breathes instead of hard-clearing
  background(6, 10, 16, 32);

  t += PI / 80;

  // ~10k points: dense enough for a continuous organism, not a logo
  for (let i = 1e4; i--; ) {
    const green = 150 + 55 * sin(t + i / 4000);
    stroke(12, green, 200, 90);
    bodyPoint(i, i / 235);
  }
}
