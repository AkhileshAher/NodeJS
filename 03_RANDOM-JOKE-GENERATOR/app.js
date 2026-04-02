import https from "https";

const getJoke = () => {
  const url = `https://official-joke-api.appspot.com/random_joke`;
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
      console.log("Chunks : ", chunk.toString('utf-8'));
    });
    response.on("end", () => {
      const joke = JSON.parse(data);
      //   console.log(joke);
      console.log(`Here is Random ${joke.type} Joke :`);
      console.log(`${joke.setup}`);
      console.log(`${joke.punchline}`);
    });

    response.on("error", (err) => {
      console.log("Error Fetching the Joke");
    });
  });
};

getJoke();
