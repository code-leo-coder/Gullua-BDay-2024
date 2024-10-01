// lifeTime 祯数
const color1 = {
  h: 279,
  s: '100%',
  l: '50%',
  a: '80%'
};
const color2 = {
  h: 197,
  s: '100%',
  l: '50%',
  a: '80%'
};
const color3 = {
  h: 0,
  s: '100%',
  l: '50%',
  a: '80%'
};
const points1 = [];
const points2 = [];


const Actions = [
  {
    lifeTime: 90,
    texts: [
      {
        text: 'Eshan',
        hsla: color2
      },
      {
        text: ' ❤️ ',
        hsla: color3
      },
      {
        text: 'Anchal',
        hsla: color2
      },
    ]
  },
{
    lifeTime: 90,
    texts: [
      {
        text: 'I',
        hsla: color2
      },
      {
        text: ' ❤️ ',
        hsla: color3
      },
      {
        text: 'U',
        hsla: color2
      },
    ]
  },

  {
    lifeTime: 0,
    func: (width, height) => {
      if (!points1.length) {
        for (let i = 0; i < 1200; i++) {
          let x = (i - 1200 / 2) / 300;
          let y = Math.sqrt(Math.abs(x)) - Math.sqrt(Math.cos(x)) * Math.cos(30 * x);
          if (!isNaN(y)) {
            points1.push({ x, y })
          }
        }
      }

      const p = points1[~~(Math.random() * points1.length)]
      const radius = Math.min(width * 0.4, height * 0.4);
      return {
        x: p.x * radius / 2,
        y: p.y * radius / 2,
        z: ~~(Math.random() * 30),
        color: {
          h: 0,
          s: '100%',
          l: '70%',
          a: '80%'
        }
      };
    }
  },

  {
    lifeTime: 0,
    texts: [{
      text: '2',
      hsla: color1
    }]
  },

  {
    lifeTime: 20,
    func: (width, height) => {
      if (!points1.length) {
        for (let i = 0; i < 1200; i++) {
          let x = (i - 1200 / 2) / 300;
          let y = Math.sqrt(Math.abs(x)) - Math.sqrt(Math.cos(x)) * Math.cos(30 * x);
          if (!isNaN(y)) {
            points1.push({ x, y })
          }
        }
      }

      const p = points1[~~(Math.random() * points1.length)]
      const radius = Math.min(width * 0.4, height * 0.4);
      return {
        x: p.x * radius / 2,
        y: p.y * radius / 2,
        z: ~~(Math.random() * 30),
        color: {
          h: 0,
          s: '100%',
          l: '70%',
          a: '80%'
        }
      };
    }
  },

  {
    lifeTime: 0,
    texts: [{
      text: '1',
      hsla: color1
    }]
  },

  {
    lifeTime: 0,
    texts: [
      {
        text: 'Sandy',
        hsla: color2
      },
      {
        text: ' ❤️ ',
        hsla: color3
      },
      {
        text: 'Saanj',
        hsla: color2
      },
    ]
  },

  {
    lifeTime: 30,
    texts: [
      {
        text: 'I',
        hsla: color2
      },
      {
        text: ' ❤️ ',
        hsla: color3
      },
      {
        text: 'U',
        hsla: color2
      },
    ]
  },
]
