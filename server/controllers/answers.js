const Answers = require('../models/answers');

// mengecek sudah ada atau belum akses token di local storage
// kalau udah ada bisa bikin pertanyaan

class Answer {

  static postAnswer(req, res) {
    Answers.create({
      question: req.body.question,
      answer: req.body.answer,
      user: req.body.user
    })
      .then(newAnswer => {
        let response = {
          message: 'New answer has been added!',
          newAnswer
        }
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static viewAnswer (req, res) {
    Answers.find()
      .then(answer => {
        res.status(200).send(answer)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  static deleteAnswer(req, res) {
    Answers.findByIdAndRemove(req.params.id)
      .then(deleteAnswer => {
        let response = {
          deleteAnswer,
          message: 'Answer has been deleted!'
        }
        res.send(response).status(200)
      })
      .catch(err => {
        res.status(400).send(err1)
      })
  }

  static upVote(req, res) {
    Answers.findByIdAndUpdate(req.params.id, {
      $push: {
        like: req.body.userId
      }
    })
      .then(response => {
        res.status(200).json(response)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static downVote(req, res) {
    Answers.findByIdAndUpdate(req.params.id, {
      $push: {
        dislike: req.body.userId
      }
    })
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = Answer;