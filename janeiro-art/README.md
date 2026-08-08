# janeiro.ai organism

Generative full-canvas piece in the lineage of [@yuruyurau](https://x.com/yuruyurau) / `#つぶやきProcessing`.

## Idea

Not a logo. A living field of ~10k points that the eye binds into one organism:

- dark void background
- cyan / teal intelligence
- soft green life pulse (LatAm / growth)
- calm continuous breath

`janeiro.ai` belongs in the **X caption**, like yuruyurau leaves the art pure.

## Preview locally

Open `index.html` in a browser (needs network for the p5 CDN), or:

```bash
npx --yes serve janeiro-art
```

## Tweet-sized p5.js (つぶやきProcessing)

Paste into the [p5.js editor](https://editor.p5js.org/) or post with `#つぶやきProcessing` (see `tweet.txt`):

```js
a=(y,d=mag(k=(4+cos(i/9-t*2))*cos(i/35),e=y/7-13)+sin(e/9+t/2)-4)=>{q=2*sin(k*3)-y/35*k*(9+k*sin(cos(e)*9-d*2+t));c=d-t;point(q+40*cos(c)+200,q*sin(c)+d*35)}
t=0,draw=$=>{t||createCanvas(w=400,w);background(6,10,16,32);for(t+=PI/80,i=1e4;i--;)stroke(12,150+55*sin(t+i/4e3),200,90),a(i/235)}//janeiro.ai
```

## Files

- `index.html` — viewer shell
- `organism.js` — readable full sketch (for craft / recording)
- `tweet.txt` — compressed one-tweet body
