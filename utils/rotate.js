export const up = (first, last, current) => (current < last ? current + 1 : first);
export const down = (first, last, current) => (current > first ? current - 1 : last);
