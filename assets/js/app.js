
const btnSubmit = document.querySelector("button");
const form = document.querySelector("form");
const ctx = document.getElementById('canvas').getContext('2d');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());
    draw(data.im_text, data.im_color, data.im_info);
})

function draw(text, color, info) {
    const x = canvas.width / 2;
    ctx.font = '48px serif';
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    wrapText(ctx, text, canvas.width / 2, (canvas.height / 2) - 100 );
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = '18px serif';
    ctx.fillText(info, canvas.width / 2 , canvas.height - 20);
  }
  

  const wrapText = (ctx, text, x, y, maxWidth = 500, lineHeight = 48) => {
    const words = text.split(' ');
    let line = '';
    for (const [index, w] of words.entries()) {
      const testLine = line + w + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && index > 0) {
        ctx.fillText(line, x, y);
        line = w + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }
  