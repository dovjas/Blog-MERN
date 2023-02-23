export default function Article(){
    return(
    <div className="article">
    <div className="image">
      <img src="https://pbs.twimg.com/profile_images/1619236295020277761/8Tx5fmuZ_400x400.jpg"></img>
    </div>        
    <div className="content">
      <h2>My first post</h2>
      <p className="info">
        <span className="author">Dovyydas J</span>
        <time>2023.01.01 11:30</time>
      </p>
      <p className="summary">As you read this message, please take a moment to pause and breathe. Notice the sensations in your body and the rhythm of your breath. </p>
    </div>
  </div> 
    );
};