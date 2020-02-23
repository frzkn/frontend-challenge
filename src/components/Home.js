import React from 'react'
import userImg from '../images/user.png'

const Home = ({ speeches }) => {
  const [diplayingSpeech, setDisplayingSpeech] = React.useState(0)
  const foo = () => {

  }
  return (
    <section className="home">
      <aside className="speech-list">
        <h3>All Speeches</h3>
        {speeches &&
          speeches.map((speech) => {
            return (
              <div
                className="speech-list-item"
                onClick={() => setDisplayingSpeech(speech.id - 1)}
              >
                <h4>{speech.title}</h4>
                <p className="speech-list-item-content">
                  {speech.content.substring(0, 38)+'...'}
                </p>
              </div>
            )
          })}
      </aside>
      <div class="speech-content">
        {speeches && console.log(speeches[diplayingSpeech])}
        <div className="speech-content-header">

          <div className="speech-content-header-text">
          <h2>{speeches[diplayingSpeech].title}</h2>
          <p>{speeches[diplayingSpeech].date}</p>
          </div>

          <div className="speech-content-header-author">
            <img class="author-img" src={userImg} alt="prof-pic" />
          <p>{speeches[diplayingSpeech].author}</p>
          </div>

        </div>
        <div className="speech-content-body">
          {speeches[diplayingSpeech].content}
        </div>
      </div>
    </section>
  )
}

export default Home
