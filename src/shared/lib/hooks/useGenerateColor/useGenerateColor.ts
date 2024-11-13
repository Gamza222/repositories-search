export const generateColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
  }

  const hue = Math.abs(hash % 360);
  const saturation = 70 + (Math.abs(hash * 3) % 30);
  const lightness = 50 + (Math.abs(hash * 5) % 20);

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
