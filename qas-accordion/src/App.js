import React from 'react';
import Question from './Question';
import questions from './data';

const App = () => {
  return (
    <main>
      <div className='container'>
        <h2>QAs</h2>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
