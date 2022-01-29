const scoreList = [{
  name: 'Milan',
  score: 100,
},
{
  name: 'Milan2',
  score: 90,
},
{
  name: 'Milan3',
  score: 80,
},
{
  name: 'Milan4',
  score: 70,
},
{
  name: 'Milan5',
  score: 60,
},
];

const loadList = (items, container) => {
  items.forEach((e) => {
    const liItem = document.createElement('li');
    liItem.classList.add('score');
    container.appendChild(liItem);
    liItem.innerHTML = `${e.name}: ${e.score}`;
  });
};

export { scoreList, loadList };