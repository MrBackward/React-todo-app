export const sortItems = (items, position1, position2) => {
  if (position1 < position2) {
    let i = position1;
    while (i <= position2) {
      items[i].position = items[i].position - 1;
      i++;
    }
    items[position1].position = position2;
  }

  if (position2 < position1) {
    let i = position2;
    while (i <= position1) {
      items[i].position = items[i].position + 1;
      i++;
    }
    items[position1].position = position2;
  }

  items.sort((a, b) => {
    const posA = a.position;
    const posB = b.position;
    return posA - posB;
  });
};
