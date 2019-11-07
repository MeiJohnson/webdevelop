const a = {
  "date":"17-10-2019",
  "lecture":
  {
    "title":"objects","length":"2hours","structure":
    {
      "part1":"theory","part2":"practice"
    }
  }
}

const { lecture: { structure : { part2 } } } = a;

console.log(part2);

///////

new Clicker(async () => {
    const URL = 'https://fork.kodaktor.ru/17102019';
    const result = await fetch(URL)
     .then(x => x.json());
    Out.slog(result);
  }, caption = 'Щёлкни');
  
