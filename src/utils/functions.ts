export const namifySlug = (slug: string): string => {
    const words = slug.split("-");
    const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return transformedWords.join(" ");
}

function bezierFunction1(t: number) {
    const P0 = { x: 5, y: 0 };
    const P1 = { x: -145, y: 150 };
    const P2 = { x: -145, y: 320 };
    const P3 = { x: 5, y: 470 };

    const Q0 = P0;
    const Q1 = {
        x: P0.x + (2 / 3) * (P1.x - P0.x),
        y: P0.y + (2 / 3) * (P1.y - P0.y),
    };
    const Q2 = {
        x: P3.x + (2 / 3) * (P2.x - P3.x),
        y: P3.y + (2 / 3) * (P2.y - P3.y),
    };
    const Q3 = P3;

    return {
        x:
            Math.pow(1 - t, 3) * Q0.x +
            3 * Math.pow(1 - t, 2) * t * Q1.x +
            3 * (1 - t) * Math.pow(t, 2) * Q2.x +
            Math.pow(t, 3) * Q3.x,
        y:
            Math.pow(1 - t, 3) * Q0.y +
            3 * Math.pow(1 - t, 2) * t * Q1.y +
            3 * (1 - t) * Math.pow(t, 2) * Q2.y +
            Math.pow(t, 3) * Q3.y,
    };
}

function bezierFunction2(t: number) {
    const P0 = { x: 0, y: 470 };
    const P1 = { x: 100, y: 320 };
    const P2 = { x: 100, y: 150 };
    const P3 = { x: 0, y: 0 };

    const Q0 = P0;
    const Q1 = {
        x: P0.x + (2 / 3) * (P1.x - P0.x),
        y: P0.y + (2 / 3) * (P1.y - P0.y),
    };
    const Q2 = {
        x: P3.x + (2 / 3) * (P2.x - P3.x),
        y: P3.y + (2 / 3) * (P2.y - P3.y),
    };
    const Q3 = P3;

    return {
        x:
            Math.pow(1 - t, 3) * Q0.x +
            3 * Math.pow(1 - t, 2) * t * Q1.x +
            3 * (1 - t) * Math.pow(t, 2) * Q2.x +
            Math.pow(t, 3) * Q3.x,
        y:
            Math.pow(1 - t, 3) * Q0.y +
            3 * Math.pow(1 - t, 2) * t * Q1.y +
            3 * (1 - t) * Math.pow(t, 2) * Q2.y +
            Math.pow(t, 3) * Q3.y,
    };
}

export function getXfromY1(y: number, tolerance = 0.001) {
    let t = 0;
    let step = 1;
    let currentY = bezierFunction1(t).y;

    while (Math.abs(currentY - y) > tolerance && t <= 1) {
        if (currentY < y) {
            t += step;
        } else {
            t -= step;
        }
        step /= 2;
        currentY = bezierFunction1(t).y;
    }

    return bezierFunction1(t).x;
}

export function getXfromY2(y: number, tolerance = 0.001) {
    let t = 0;
    let step = 1;
    let currentY = bezierFunction2(t).y;
  
    while (Math.abs(currentY - y) > tolerance && t <= 1) {
      if (currentY < y) {
        t += step;
      } else {
        t -= step;
      }
      step /= 2;
      currentY = bezierFunction2(t).y;
    }
  
    return bezierFunction2(t).x;
  }