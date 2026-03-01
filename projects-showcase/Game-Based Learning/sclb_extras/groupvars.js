/**
 *  SoftChalk LessonBuilder
 *  ================ DO NOT EDIT ================
 */

var groupFinished = [];
var currentQPNum = [];
var quizGroupSize = [];
var firstDisplayed = [];
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
var groupQpArray6 = [];
var groupQpStateArray6 = [];
var qpNumbersArray6 = [];
qpNumbersArray6[0] = 1;
qpNumbersArray6[1] = 2;
qpNumbersArray6[2] = 3;
qpNumbersArray6[3] = 4;
randomizeQp(qpNumbersArray6);
quizGroupSize[6] = 4;
groupQpArray6[1]='<div id="quizpopper20"><div class="qpqvalue">Value: 2</div><div class="qpq"><form class="qp-form" name="f20"><fieldset><div class="qp-the-question"><legend><p>Game-Based Learning (GBL)&nbsp;describes an approach to teaching, where students explore relevant aspect of games in a learning context designed by teachers.</p></legend></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q20" value="true" id="q20a"></div><div class="qp-t-f-cell-right"><label for="q20a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q20" value="false" id="q20b"></div><div class="qp-t-f-cell-right"><label for="q20b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></fieldset></form><div class="collapse qpqfeedback" id="f_done20"></div><div class="collapse qpqfeedback2" id="feed20"></div></div></div>';
groupQpArray6[2]='<div id="quizpopper21"><div class="qpqvalue">Value: 2</div><div class="qpq"><form class="qp-form" name="f21"><fieldset><div class="qp-the-question"><legend><p>Ditigal Game-Based Learning started out as an instructional strategy that can be embodied through computer-based applications.</p></legend></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q21" value="true" id="q21a"></div><div class="qp-t-f-cell-right"><label for="q21a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q21" value="false" id="q21b"></div><div class="qp-t-f-cell-right"><label for="q21b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></fieldset></form><div class="collapse qpqfeedback" id="f_done21"></div><div class="collapse qpqfeedback2" id="feed21"></div></div></div>';
groupQpArray6[3]='<div id="quizpopper22"><div class="qpqvalue">Value: 2</div><div class="qpq"><form class="qp-form" name="f22"><fieldset><div class="qp-the-question"><legend><p>Digital game-based learning does not refer to using digital video games as learning tools.</p></legend></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q22" value="true" id="q22a"></div><div class="qp-t-f-cell-right"><label for="q22a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q22" value="false" id="q22b"></div><div class="qp-t-f-cell-right"><label for="q22b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></fieldset></form><div class="collapse qpqfeedback" id="f_done22"></div><div class="collapse qpqfeedback2" id="feed22"></div></div></div>';
groupQpArray6[4]='<div id="quizpopper23"><div class="qpqvalue">Value: 1</div><div class="qpq"><form class="qp-form" name="f23"><fieldset><div class="qp-the-question"><legend><p>Gamification takes an element of education and replaces it with a game-based element. For instance, a teacher may replace grades with levels or experience points.</p></legend></div><div class="qpindent"><div class="qp-table"><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q23" value="true" id="q23a"></div><div class="qp-t-f-cell-right"><label for="q23a"><span class="qp-t-f-answer">True</span></label></div></div><div class="qp-row"><div class="qp-t-f-cell-left"><input type="radio" name="q23" value="false" id="q23b"></div><div class="qp-t-f-cell-right"><label for="q23b"><span class="qp-t-f-answer">False</span></label></div></div></div></div></fieldset></form><div class="collapse qpqfeedback" id="f_done23"></div><div class="collapse qpqfeedback2" id="feed23"></div></div></div>';


groupFinished[2] = false;
firstDisplayed[2] = false;
currentQPNum[2] = 1;
var groupQpArray2 = [];
var groupQpStateArray2 = [];
var qpNumbersArray2 = [];
qpNumbersArray2[0] = 1;
qpNumbersArray2[1] = 2;
qpNumbersArray2[2] = 3;
quizGroupSize[2] = 3;
groupQpArray2[1]='<div id="quizpopper3"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f3"><fieldset><div class="qp-the-question"><legend><p>What game-based learing have you implemented in your classroom before? Explain about what you did.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q3" id="q3" rows="16" cols="46" onfocus="clearEssayFeedback(3)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(3, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(3)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done3"></div><div class="collapse qpqfeedback2" id="feed3"></div></div></div>';
groupQpArray2[2]='<div id="quizpopper4"><div class="qpqvalue">Value: 3</div><div class="qpq"><form class="qp-form" name="f4"><fieldset><div class="qp-the-question"><legend><p>From the examples you just read what do you think will be most useful for your class?</p></legend></div><div class="qpindent"><textarea class="form-control" name="q4" id="q4" rows="16" cols="46" onfocus="clearEssayFeedback(4)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(4, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(4)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done4"></div><div class="collapse qpqfeedback2" id="feed4"></div></div></div>';
groupQpArray2[3]='<div id="quizpopper5"><div class="qpqvalue">Value: 5</div><div class="qpq"><form class="qp-form" name="f5"><fieldset><div class="qp-the-question"><legend><p>From the given list of examples of game-based learning, select any one and critique the usage of digital game-based learning in your classroom.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q5" id="q5" rows="16" cols="46" onfocus="clearEssayFeedback(5)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(5, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(5)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done5"></div><div class="collapse qpqfeedback2" id="feed5"></div></div></div>';


groupFinished[8] = false;
firstDisplayed[8] = false;
currentQPNum[8] = 1;
var groupQpArray8 = [];
var groupQpStateArray8 = [];
var qpNumbersArray8 = [];
qpNumbersArray8[0] = 1;
qpNumbersArray8[1] = 2;
qpNumbersArray8[2] = 3;
quizGroupSize[8] = 3;
groupQpArray8[1]='<div id="quizpopper26"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f26"><fieldset><div class="qp-the-question"><legend><p>Among all the examples of the digital game-based learning you know so far, list at least 5 digital game-based activities you can implement in your class.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q26" id="q26" rows="16" cols="46" onfocus="clearEssayFeedback(26)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(26, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(26)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done26"></div><div class="collapse qpqfeedback2" id="feed26"></div></div></div>';
groupQpArray8[2]='<div id="quizpopper27"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f27"><fieldset><div class="qp-the-question"><legend><p>Select minimum one digital game-based learning activity and a digital platform for your classroom implementation.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q27" id="q27" rows="16" cols="46" onfocus="clearEssayFeedback(27)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(27, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(27)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done27"></div><div class="collapse qpqfeedback2" id="feed27"></div></div></div>';
groupQpArray8[3]='<div id="quizpopper28"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f28"><fieldset><div class="qp-the-question"><legend><p>Make a design draft of the game-based learning activity using a digital platform or software.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q28" id="q28" rows="16" cols="46" onfocus="clearEssayFeedback(28)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(28, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(28)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done28"></div><div class="collapse qpqfeedback2" id="feed28"></div></div></div>';


groupFinished[7] = false;
firstDisplayed[7] = false;
currentQPNum[7] = 1;
var groupQpArray7 = [];
var groupQpStateArray7 = [];
var qpNumbersArray7 = [];
qpNumbersArray7[0] = 1;
qpNumbersArray7[1] = 2;
quizGroupSize[7] = 2;
groupQpArray7[1]='<div id="quizpopper24"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f24"><fieldset><div class="qp-the-question"><legend><p>Explain the purpose of the game that you are creating and how you plan to implement in in your class.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q24" id="q24" rows="16" cols="46" onfocus="clearEssayFeedback(24)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(24, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(24)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done24"></div><div class="collapse qpqfeedback2" id="feed24"></div></div></div>';
groupQpArray7[2]='<div id="quizpopper25"><div class="qpqvalue">Value: 10</div><div class="qpq"><form class="qp-form" name="f25"><fieldset><div class="qp-the-question"><legend><p>Plan the introduction of the selected platform and its function to students.</p></legend></div><div class="qpindent"><textarea class="form-control" name="q25" id="q25" rows="16" cols="46" onfocus="clearEssayFeedback(25)"></textarea></div></fieldset><div class="qpqcheckbutton"><input onclick="check_q(25, 0, 8, true)" type="button" class="btn btn-default" name="essay_button" value="Finish"><span class="qp-between-button-space"></span><input onclick="print_essay(25)" type="button" class="btn btn-default" name="Print" value="Print"></div></form><div class="collapse qpqfeedback" id="f_done25"></div><div class="collapse qpqfeedback2" id="feed25"></div></div></div>';

