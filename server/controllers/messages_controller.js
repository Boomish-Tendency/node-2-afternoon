// Saving Messages as Array
const messages = [];
// Setting ID to num datatype.
let id = 0;

module.exports = {
  create: (req, res) => {
    console.log(req.body);
    const { text, time } = req.body;
    let message = {
      id,
      text,
      time,
    };
    messages.push(message);
    //increment
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const index = messages.findIndex((elem) => elem.id === +req.param.id);
    messages[index] = {
      id: messages[index].id,
      text: req.body.text || messages[index].text,
      time: messages[index].time,
    };
    res.statue(200).send(messages);
  },
  delete: (req, res) => {
    const index = messages.findIndex((elem) => elem.id === +req.param.id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
};
