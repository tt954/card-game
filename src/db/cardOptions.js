export const colors = [
  "#ecdb54",
  "#e34132",
  "#6ca0dc",
  "#944743",
  "#dbb2d1",
  "#ec9787",
  "#00a68c",
  "#645394",
  "#6c4f3d",
  "#ebe1df",
  "#bc6ca7",
  "#bfd833",
];

export const playingCards = (() => {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suits = ["C", "D", "H", "S"];
  const cards = [];
  values.forEach((v) => {
    suits.forEach((s) => {
      const card = v + s;
      const url = `/db/playing-cards/${card}.png`;
      cards.push({
        type: card,
        url
      });
    });
  });
  return cards;
})();