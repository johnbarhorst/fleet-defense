async function getCorrectAnswer(fetchPath) {
  const path = window.location.href;
  const questionNumber = parseInt(path.split('%20')[1]);
  const data = await fetch(fetchPath);
  const json = await data.json();
  const result = {...json[0]};
  const filteredQuestions = result.pages.filter(item => item.templateName === 'Question');
  const currentQuestion = filteredQuestions.filter(question => question.contents[0].settings[0].value === questionNumber);
  return currentQuestion[0].contents.filter((item => item.translations[1]?.value === "100"))[0].translations[2].value;
}