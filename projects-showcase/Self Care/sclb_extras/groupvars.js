/**
 *  SoftChalk LessonBuilder
 *  ================ DO NOT EDIT ================
 */

var groupFinished = new Array();
var currentQPNum = new Array();
var quizGroupSize = new Array();
var firstDisplayed = new Array();
function randomizeQp(myArray) {
var i = myArray.length;
  while ( --i ) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempi = myArray[i];
    var tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
}


groupFinished[6] = false;
firstDisplayed[6] = false;
currentQPNum[6] = 1;
var groupQpArray6 = new Array();
var groupQpStateArray6 = new Array();
var qpNumbersArray6 = new Array();
qpNumbersArray6[0] = 1;
qpNumbersArray6[1] = 2;
quizGroupSize[6] = 2;
groupQpArray6[1]='<div id="quizpopper17"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f17"><div class="qp-the-question"><p>&quot;Isn&#39;t it Selfish to Put Myself First?&quot;, what are your thoughts for this question. There is no right or wrong answer for this, just write your thoughts on it.</p><p>&nbsp;</p><p>[Tip: Taking care of your needs exists in a balanced, steady place on the middle of a continuum, with intense selfishness on one end, and extreme sacrificing what you need or want for others&#39; sake on the other end. Nurturing oneself is a key factor in being able to maintain strength, resolve, motivation, and inner resources to continue to give to others. In fact, doing too much for others could deprive them of the opportunity to learn how to provide their own self-care.]</p></div><div class="qpindent"><textarea class="form-control" name="q17" id="q17" rows="16" cols="46" onfocus="clearEssayFeedback(17)"></textarea></div><div class="qpqcheckbutton"><input onclick="check_q(17, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(17)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done17"></div><div class="collapse qpqfeedback2" id="feed17"></div></div></div>';
groupQpArray6[2]='<div id="quizpopper18"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f18"><div class="qp-the-question"><p>Reflect on the different situations you have just learnt about. Now think of any other situation you might have faced and write about what you think you should in those situations.</p></div><div class="qpindent"><textarea class="form-control" name="q18" id="q18" rows="16" cols="46" onfocus="clearEssayFeedback(18)"></textarea></div><div class="qpqcheckbutton"><input onclick="check_q(18, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(18)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done18"></div><div class="collapse qpqfeedback2" id="feed18"></div></div></div>';


groupFinished[1] = false;
firstDisplayed[1] = false;
currentQPNum[1] = 1;
var groupQpArray1 = new Array();
var groupQpStateArray1 = new Array();
var qpNumbersArray1 = new Array();
qpNumbersArray1[0] = 1;
qpNumbersArray1[1] = 2;
quizGroupSize[1] = 2;
groupQpArray1[1]='<div id="quizpopper6"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f6"><div class="qp-the-question"><p>Choose the best answer. The most important thing you have to do is....</p></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q6" value="a" id="q6a"></div><div class="qp-m-choice-cell-middle">a.</div><div class="qp-m-choice-cell-right"><label for="q6a"><p>focus only in your job.</p></label></div></div><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q6" value="b" id="q6b"></div><div class="qp-m-choice-cell-middle">b.</div><div class="qp-m-choice-cell-right"><label for="q6b"><p>work on yourself. Fill yourself up and keep yourself full.</p></label></div></div><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q6" value="c" id="q6c"></div><div class="qp-m-choice-cell-middle">c.</div><div class="qp-m-choice-cell-right"><label for="q6c"><p>work for others.</p></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done6"></div><div class="collapse qpqfeedback2" id="feed6"></div></div></div>';
groupQpArray1[2]='<div id="quizpopper7"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f7"><div class="qp-the-question"><p>You should not be afraid of honoring yourself.</p></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q7" value="true" id="q7a"></div><div class="qp-t-f-cell-right"><label for="q7a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q7" value="false" id="q7b"></div><div class="qp-t-f-cell-right"><label for="q7b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done7"></div><div class="collapse qpqfeedback2" id="feed7"></div></div></div>';


groupFinished[2] = false;
firstDisplayed[2] = false;
currentQPNum[2] = 1;
var groupQpArray2 = new Array();
var groupQpStateArray2 = new Array();
var qpNumbersArray2 = new Array();
qpNumbersArray2[0] = 1;
qpNumbersArray2[1] = 2;
qpNumbersArray2[2] = 3;
quizGroupSize[2] = 3;
groupQpArray2[1]='<div id="quizpopper8"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f8"><div class="qp-the-question"><p>How to eat healthy foods?</p></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q8" value="a" id="q8a"></div><div class="qp-m-choice-cell-middle">a.</div><div class="qp-m-choice-cell-right"><label for="q8a"><p>Eat whole grains, more dark green vegetables and variety of fresh or frozen fruit.</p><p>&nbsp;</p></label></div></div><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q8" value="b" id="q8b"></div><div class="qp-m-choice-cell-middle">b.</div><div class="qp-m-choice-cell-right"><label for="q8b"><p>Try only single type of lean proteins.</p></label></div></div><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q8" value="c" id="q8c"></div><div class="qp-m-choice-cell-middle">c.</div><div class="qp-m-choice-cell-right"><label for="q8c"><p>Eat only snacks.</p></label></div></div><div class="qp-row"><div class="qp-m-choice-cell-left"><input type="radio" name="q8" value="d" id="q8d"></div><div class="qp-m-choice-cell-middle">d.</div><div class="qp-m-choice-cell-right"><label for="q8d"><p>Eat once a day only.</p></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done8"></div><div class="collapse qpqfeedback2" id="feed8"></div></div></div>';
groupQpArray2[2]='<div id="quizpopper9"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f9"><div class="qp-the-question"><p>How would you monitor your physical health?</p></div><div class="qpindent"><div class="qp-m-answer-instruction">[mark all correct answers]</div><div class="qp-table"><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q9" value="a" id="q9a"></div><div class="qp-m-answer-cell-middle">a.</div><div class="qp-m-answer-cell-right"><label for="q9a"><p>Take time to appreciate every amazing thing your body does</p><p>&nbsp;</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q9" value="b" id="q9b"></div><div class="qp-m-answer-cell-middle">b.</div><div class="qp-m-answer-cell-right"><label for="q9b"><p>Work even though you are sick</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q9" value="c" id="q9c"></div><div class="qp-m-answer-cell-middle">c.</div><div class="qp-m-answer-cell-right"><label for="q9c"><p>Schedule regular appointments with your doctor</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q9" value="d" id="q9d"></div><div class="qp-m-answer-cell-middle">d.</div><div class="qp-m-answer-cell-right"><label for="q9d"><p>Do not take medicine when you are sick</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q9" value="e" id="q9e"></div><div class="qp-m-answer-cell-middle">e.</div><div class="qp-m-answer-cell-right"><label for="q9e"><p>Pay attention to body sensations and notice spots of attention</p></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done9"></div><div class="collapse qpqfeedback2" id="feed9"></div></div></div>';
groupQpArray2[3]='<div id="quizpopper24"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f24"><div class="qp-the-question"><p>How often do you stretch? What kind of movement makes you truly happy? How regularly do you do it?</p></div><div class="qpindent"><textarea class="form-control" name="q24" id="q24" rows="16" cols="46" onfocus="clearEssayFeedback(24)"></textarea></div><div class="qpqcheckbutton"><input onclick="check_q(24, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(24)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done24"></div><div class="collapse qpqfeedback2" id="feed24"></div></div></div>';


groupFinished[3] = false;
firstDisplayed[3] = false;
currentQPNum[3] = 1;
var groupQpArray3 = new Array();
var groupQpStateArray3 = new Array();
var qpNumbersArray3 = new Array();
qpNumbersArray3[0] = 1;
qpNumbersArray3[1] = 2;
quizGroupSize[3] = 2;
groupQpArray3[1]='<div id="quizpopper10"><div class="qpqvalue">Value: 1</div><div class="qpq"><form class="qp-form" name="f10"><div class="qp-the-question"><p>Emotional self-care is not as important as physical self-care.</p></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q10" value="true" id="q10a"></div><div class="qp-t-f-cell-right"><label for="q10a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q10" value="false" id="q10b"></div><div class="qp-t-f-cell-right"><label for="q10b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done10"></div><div class="collapse qpqfeedback2" id="feed10"></div></div></div>';
groupQpArray3[2]='<div id="quizpopper22"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f22"><div class="qp-the-question"><p>Tina is an undergrad, she schedules every moment of every day except for the five hours she sleeps each night. She has been told that having an impressive resume would allow her to compete with other journalists once she graduats, so she juggles an overwhelming number of class credits, a job as editor-in-chief of the school&#39;s magazine, a role as a resident assistant, and an internship. This mountain of responsibilities leaves her little time to care for her emotional health.</p><p>What suggestions do you have for her? Give 4-5 tips that she can implement in her life for her emotional self-care.</p></div><div class="qpindent"><textarea class="form-control" name="q22" id="q22" rows="16" cols="46" onfocus="clearEssayFeedback(22)"></textarea></div><div class="qpqcheckbutton"><input onclick="check_q(22, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(22)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done22"></div><div class="collapse qpqfeedback2" id="feed22"></div></div></div>';


groupFinished[4] = false;
firstDisplayed[4] = false;
currentQPNum[4] = 1;
var groupQpArray4 = new Array();
var groupQpStateArray4 = new Array();
var qpNumbersArray4 = new Array();
qpNumbersArray4[0] = 1;
qpNumbersArray4[1] = 2;
quizGroupSize[4] = 2;
groupQpArray4[1]='<div id="quizpopper11"><div class="qpqvalue">Value: 1</div><div class="qpq"><form class="qp-form" name="f11"><div class="qp-the-question"><p>Spiritual Self-Care is as important as physical self-care.</p></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q11" value="true" id="q11a"></div><div class="qp-t-f-cell-right"><label for="q11a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q11" value="false" id="q11b"></div><div class="qp-t-f-cell-right"><label for="q11b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done11"></div><div class="collapse qpqfeedback2" id="feed11"></div></div></div>';
groupQpArray4[2]='<div id="quizpopper21"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f21"><div class="qp-the-question"><p>Which of the following can be considered as spiritual self-care?</p></div><div class="qpindent"><div class="qp-m-answer-instruction">[mark all correct answers]</div><div class="qp-table"><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q21" value="a" id="q21a"></div><div class="qp-m-answer-cell-middle">a.</div><div class="qp-m-answer-cell-right"><label for="q21a"><p>Engage in reflective practices like meditation.</p><p>&nbsp;</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q21" value="b" id="q21b"></div><div class="qp-m-answer-cell-middle">b.</div><div class="qp-m-answer-cell-right"><label for="q21b"><p>Go on walks.</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q21" value="c" id="q21c"></div><div class="qp-m-answer-cell-middle">c.</div><div class="qp-m-answer-cell-right"><label for="q21c"><p>Go to church/mosque/temple.</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q21" value="d" id="q21d"></div><div class="qp-m-answer-cell-middle">d.</div><div class="qp-m-answer-cell-right"><label for="q21d"><p>Pressuring yourself</p></label></div></div><div class="qp-row"><div class="qp-m-answer-cell-left"><input type="checkbox" name="q21" value="e" id="q21e"></div><div class="qp-m-answer-cell-middle">e.</div><div class="qp-m-answer-cell-right"><label for="q21e"><p>Go for medical check-up</p></label></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done21"></div><div class="collapse qpqfeedback2" id="feed21"></div></div></div>';


groupFinished[5] = false;
firstDisplayed[5] = false;
currentQPNum[5] = 1;
var groupQpArray5 = new Array();
var groupQpStateArray5 = new Array();
var qpNumbersArray5 = new Array();
qpNumbersArray5[0] = 1;
qpNumbersArray5[1] = 2;
quizGroupSize[5] = 2;
groupQpArray5[1]='<div id="quizpopper13"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f13"><div class="qp-the-question"><p>Match the items.</p></div><div class="hideqpstuff">The task is to match the lettered items with the correct numbered items. Appearing below is a list of lettered items. Following that is a list of numbered items. Each numbered item is followed by a drop-down. Select the letter in the drop down that best matches the numbered item with the lettered alternatives.</div><div class="qpindent"><div class="qp-matching-item-container"><div class="qp-table"><div class="qp-row"><div class="qp-match-cell-left">a.</div><div class="qp-match-cell-middle"><p>This self-care involves activities that improve your physical health, including diet and exercise.</p></div></div><div class="qp-row"><div class="qp-match-cell-left">b.</div><div class="qp-match-cell-middle"><p>This self-care involves practices that maintain your mental strength and emotional health.</p></div></div><div class="qp-row"><div class="qp-match-cell-left">c.</div><div class="qp-match-cell-middle"><p>This self-care involves practices that exercise your mind and soul.</p></div></div></div></div><div class="qp-table"><div class="qp-row"><div class="qp-match-cell-left">1.</div><div class="qp-match-cell-middle"><label for="q13_1"><p>Emotional Self-Care</p></label></div><div class="qp-match-cell-right"><select class="form-control qp-select" name="q13_1" id="q13_1"><option>a</option><option>b</option><option>c</option></select></div></div><div class="qp-row"><div class="qp-match-cell-left">2.</div><div class="qp-match-cell-middle"><label for="q13_2"><p>Physical Self-Care</p></label></div><div class="qp-match-cell-right"><select class="form-control qp-select" name="q13_2" id="q13_2"><option>a</option><option>b</option><option>c</option></select></div></div><div class="qp-row"><div class="qp-match-cell-left">3.</div><div class="qp-match-cell-middle"><label for="q13_3"><p>Spiritual Self-Care</p></label></div><div class="qp-match-cell-right"><select class="form-control qp-select" name="q13_3" id="q13_3"><option>a</option><option>b</option><option>c</option></select></div></div></div></div></form><div class="collapse qpqfeedback" id="f_done13"></div><div class="collapse qpqfeedback2" id="feed13"></div></div></div>';
groupQpArray5[2]='<div id="quizpopper19"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f19"><div class="qp-the-question"><p>Brinda has started her last semester of college. She ended up taking heavy course load, and started having panic attacks. She is overloaded with stress, and anxiety, and fear. What advice would you give her?</p></div><div class="qpindent"><textarea class="form-control" name="q19" id="q19" rows="16" cols="46" onfocus="clearEssayFeedback(19)"></textarea></div><div class="qpqcheckbutton"><input onclick="check_q(19, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(19)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done19"></div><div class="collapse qpqfeedback2" id="feed19"></div></div></div>';

