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
    const index = messages.findIndex((elem) => elem.id === +req.params.id);
    messages[index] = {
      id: messages[index].id,
      text: req.body.text || messages[index].text,
      time: messages[index].time,
    };
    // console.log(req.param.id)
    // console.log(index)
    // console.log(messages)
    // console.log(messages[index].time)
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const index = messages.findIndex((elem) => elem.id === +req.params.id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
};
