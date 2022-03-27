const express = require('express');
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// get methods:
app.get('/calculator/addition', (req, res) => {
  const firstParam = req.query.firstParam;
  const secondParam = req.query.secondParam;
  const firstParamErrorMsg = ' first param is not a number';
  const secondParamErrorMsg = ' the second param is not a number';
  let answer;

  if (isNaN(firstParam)) {
    return res.send(firstParamErrorMsg);
  }
  if (typeof secondParam === 'object') {
    answer =
      secondParam.reduce((one, another) => Number(one) + Number(another)) +
      Number(firstParam);

    if (isNaN(answer)) {
      return res.send(secondParamErrorMsg);
    }
    return res.json(answer);
  }
  if (isNaN(secondParam)) {
    return res.send(secondParamErrorMsg);
  }
  answer = Number(firstParam) + Number(secondParam);

  res.json(answer);
});

app.get('/calculator/substraction', (req, res) => {
  const firstParam = req.query.firstParam;
  const secondParam = req.query.secondParam;
  const firstParamErrorMsg = ' first param is not a number';
  const secondParamErrorMsg = ' the second param is not a number';
  let answer;

  if (isNaN(firstParam)) {
    return res.send(firstParamErrorMsg);
  }

  if (typeof secondParam === 'object') {
    answer = secondParam.reduce(
      (one, another) => Number(one) + Number(another),
    );

    if (isNaN(answer)) {
      return res.send(secondParamErrorMsg);
    }
    return res.json(Number(firstParam) - answer);
  }
  if (isNaN(secondParam)) {
    return res.send(secondParamErrorMsg);
  }
  answer = Number(firstParam) - Number(secondParam);

  res.json(answer);
});

app.get('/calculator/multiplication', (req, res) => {
  const firstParam = req.query.firstParam;
  const secondParam = req.query.secondParam;
  const firstParamErrorMsg = ' first param is not a number';
  const secondParamErrorMsg = ' the second param is not a number';
  let answer;

  if (isNaN(firstParam)) {
    return res.send(firstParamErrorMsg);
  }

  if (typeof secondParam === 'object') {
    answer =
      secondParam.reduce((one, another) => Number(one) * Number(another)) *
      Number(firstParam);

    if (isNaN(answer)) {
      return res.send(secondParamErrorMsg);
    }
    return res.json(answer);
  }
  if (isNaN(secondParam)) {
    return res.send(secondParamErrorMsg);
  }
  answer = Number(firstParam) * Number(secondParam);

  res.json(answer);
});

app.get('/calculator/division', (req, res) => {
  const firstParam = req.query.firstParam;
  const secondParam = req.query.secondParam;
  const firstParamErrorMsg = ' first param is not a number';
  const secondParamErrorMsg = ' the second param is not a number';
  let answer;

  if (isNaN(firstParam)) {
    return res.send(firstParamErrorMsg);
  }

  if (typeof secondParam === 'object') {
    answer = secondParam.reduce(
      (one, another) => Number(one) * Number(another),
    );
    if (isNaN(answer)) {
      return res.send(secondParamErrorMsg);
    }
    return res.json(Number(firstParam) / answer);
  }
  if (isNaN(secondParam)) {
    return res.send(secondParamErrorMsg);
  }
  answer = Number(firstParam) / Number(secondParam);

  res.json(answer);
});

//  post method
app.post('/calculator', (req, res) => {
  const firstParam = req.body.firstParam;
  const secondParam = req.body.secondParam;
  const firstParamErrorMsg = ' first param is not a number';
  const secondParamErrorMsg = ' the second param is not a number';
  let answer;

  if (isNaN(firstParam)) {
    return res.send(firstParamErrorMsg);
  }

  if ('addition' in req.body) {
    if (typeof secondParam === 'object') {
      answer =
        secondParam.reduce((one, another) => Number(one) + Number(another)) +
        Number(firstParam);

      if (isNaN(answer)) {
        return res.send(secondParamErrorMsg);
      }
      return res.json(answer);
    }
    if (isNaN(secondParam)) {
      return res.send(secondParamErrorMsg);
    }
    answer = Number(firstParam) + Number(secondParam);

    res.json(answer);
  }

  if ('substraction' in req.body) {
    if (typeof secondParam === 'object') {
      answer = secondParam.reduce(
        (one, another) => Number(one) + Number(another),
      );

      if (isNaN(answer)) {
        return res.send(secondParamErrorMsg);
      }
      return res.json(Number(firstParam) - answer);
    }
    if (isNaN(secondParam)) {
      return res.send(secondParamErrorMsg);
    }
    answer = Number(firstParam) - Number(secondParam);

    res.json(answer);
  }

  if ('multiplication' in req.body) {
    if (typeof secondParam === 'object') {
      answer =
        secondParam.reduce((one, another) => Number(one) * Number(another)) *
        Number(firstParam);

      if (isNaN(answer)) {
        return res.send(secondParamErrorMsg);
      }
      return res.json(answer);
    }
    if (isNaN(secondParam)) {
      return res.send(secondParamErrorMsg);
    }
    answer = Number(firstParam) * Number(secondParam);

    res.json(answer);
  }
  if ('division' in req.body) {
    if (typeof secondParam === 'object') {
      answer = secondParam.reduce(
        (one, another) => Number(one) * Number(another),
      );
      if (isNaN(answer)) {
        return res.send(secondParamErrorMsg);
      }
      return res.json(Number(firstParam) / answer);
    }
    if (isNaN(secondParam)) {
      return res.send(secondParamErrorMsg);
    }
    answer = Number(firstParam) / Number(secondParam);

    res.json(answer);
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
