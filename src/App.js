import React , { useState, useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css';
import useStyles from './styles.js';

const alanKey='a0dd92611fb0a3a258a2d20b1168a3c02e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

 const [newsArticles, setNewsArticles] = useState([]);
 const [activeArticle,setActiveArticle] = useState(0);
 const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand: ( {command, articles} ) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
        } else if(command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
        }
      }
    })
  },[]);

  return (
    <div>
     <div className={classes.logoContainer}>
     <img src="https://media-exp1.licdn.com/dms/image/C561BAQFzAiAvq0Jg8Q/company-background_10000/0/1565260089604?e=2159024400&v=beta&t=ygcEIMzRHClwTjBwChX2naoGiS2TCeDwozFfEAM73ek" className={classes.alanLogo} alt="logo"/>
     </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
