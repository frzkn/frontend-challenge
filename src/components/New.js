import React from 'react'
import { useHistory } from 'react-router-dom'

function New({ speeches, setSpeeches, speechId, setSpeechId }) {
  console.log(speeches)
  let history = useHistory()

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [speech, setSpeech] = React.useState('')
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleContent = () => {

  }
  const getDate = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()

    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = dd + '-' + mm + '-' + yyyy
    return today
  }
  const handleClick = () => {
    if (title !== '' && author !== '' && speech !== '') {
      if (speech.length < 50) {
        alert('Please Enter at least 50 words of speech')
      } else {
        setSpeeches((state) => [
          ...state,
          {
            id: speechId + 1,
            author: author,
            title: title,
            date: getDate(),
            content: speech
          }
        ])

        setSpeechId((state) => state + 1)
        history.push('/')
      }
    } else {
      alert('Please fill all the input fields')
    }
  }
  return (
    <div className="new">
      <p>Title</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Author</p>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <p>Speech</p>
      <textarea
        value={speech}
        onChange={(e) => setSpeech(e.target.value)}
        onFocus={() => setButtonDisabled(false)}
      ></textarea>
      <button onClick={() => handleClick()} disabled={buttonDisabled}>
        +
      </button>
    </div>
  )
}

export default New
