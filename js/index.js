/*
    selectors 
    /
        btn-play 
        progress
        btn score
        cho


    /

*/

// aos library
AOS.init();




let buton1 = document.getElementById("btn-play");
let index_no = 0;
playing_song = false;
// create audio here 
let Track = document.createElement("audio");
// songs
let Songs = [
    {
        path:'../music/اغنية دوري ابطال اوروبا مترجم Uefa champions league (192 kbps).mp3'
    }
]

buton1.addEventListener('click',()=>{

    if(playing_song===false)
    {
        playing();
    }else
    {
        pausing();
    }

});
function playing()
{
    Track.play();
    buton1.innerHTML = " <i class='fas fa-pause'></i>";
    playing_song = true;
}

function pausing()
{

    Track.pause();
    buton1.innerHTML = " <i class='fas fa-play'></i>";
    playing_song = false;
}


function Load(index_no)
{
    Track.src = Songs[index_no].path;
    Track.load();
    Track.autoplay;
    Track.loop;

}

Load(index_no);


// quiz app here 
class Quiz 
{
    constructor(questions)
    {
        this.score=0;
        this.questions=questions;
        this.getquestionIndex=0; 
    }

  GetquestionIndex()
    {

        return this.questions[this.getquestionIndex];
    }


    guess(answer)
    {   
        if(this.GetquestionIndex().isCorrect(answer))
        {
            this.score++;

        }

        this.getquestionIndex++;

    }


    isEnded()
    {

        return this.getquestionIndex === this.questions.length; 
    
    
    }

  
}

class Question 
{
    constructor(text,choes,answer)
    {
        this.text = text;
        this.choes =choes;
        this.answer = answer;
    }

isCorrect(cho)
 {

    return this.answer === cho

}  



}


function disPlayQuestion()
{
    if(quiz.isEnded())
    {
        showscores();
        document.querySelector(".alert").style.opacity = 1;
    }
    else
    {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.GetquestionIndex().text;

        // chioces 
        chioces = quiz.GetquestionIndex().choes;

        for(var i = 0; i<chioces.length;i++)
        {
            let choElement =  document.getElementById("cho"+i);
            choElement.innerHTML = chioces[i];
            guess('btn'+i, chioces[i])
        }
        
        progress();

    }
}


function guess(id,guess)
{
    let button = document.getElementById(id);
    button.onclick = function()
    {
        quiz.guess(guess);
        disPlayQuestion();

    }
}


function progress()
{
    let progress = document.getElementById("progress");
    progress.innerHTML = `${quiz.getquestionIndex+1} of ${quiz.questions.length} `;

}


function showscores()
{
    let quizElement = document.getElementById("score");
    // console.log(quizElement)
    quizElement.innerHTML = `   YourScore   ${quiz.score} of ${quiz.questions.length}`; 
}



let question2 = 
[
    new Question
    (
        "من هدافي دوري ابطال اوربا 2021",
        [
            'إيرلينج-هالاند',
            'كيليان-مبابي',
            'محمد-صلاح',
            'ماركوس-راشفورد'
        ],
        
        'إيرلينج-هالاند  '
    ),

    new Question
    (
        "من هو أكثر فريق فاز بدوري أبطال أوروبا؟ ",
        [
            ' أياكس ',
            'مانشستر سيتي',
            'ريال مدريد',
            'ليفربول '
        ],
        
        'ريال مدريد'
    )

,

new Question
(
    "كم سجل رونالدو في دوري الابطال ",
    [
        '127',
        '108',
        '265',
        '150'
    ],
    
    '127'
)
,


new Question
(
    "كم سجل ميسي في دوري الابطال",
    [
        '250',
        '102',
        '114',
        '80'
    ],
    
    '114'
)



,


new Question
(
    "كم مرة توج ليفربول بلقب دوري ابطال اوروبا ",
    [
        '4',
        '6',
        '3',
        '5'
    ],
    
    '5'
)


,

new Question
(
    "عدد ألقاب برشلونة في دوري أبطال أوروبا",
    [
        '5',
        '4',
        '2',
        '6'
    ],
    
    '5'
)

,
new Question
(
    "كم هدف سجل مارادونا في دوري الابطال",
    [
        '35',
        '25',
        '40',
        '73'
    ],
    
    '35'
)


,

new Question
(
    "من حصل على الكرة الذهبية 2019",
    [
        'ميسي',
        'فيرجيل فان ديك ',
        'كريستيانو رونالدو',
        'محمد صلاح'
    ],
    
    'ميسي'
)

,



new Question
(
    "من افريقي الذي  حصل على الكرة الذهبية",
    [
        'جورج ويا',
        'صومال ايتو',
        'دروجبا',
        'محمد صلاح'
    ],
    
    'جورج ويا '
)


,


new Question
(
    "من توج دوري ابطال اوروبا 2010",
    [
        'إنتر ميلان',
        'برشلونة ',
        'ليفربول ',
        'تشلسي '
    ],
    
    'إنتر ميلان'
)





]

let quiz = new Quiz(question2);
disPlayQuestion();




// spinner page  here 
window.addEventListener("load",()=>{

    document.querySelector(".loader").classList.add("fade");

});


setTimeout(()=>{

    document.querySelector(".loader").remove();


}, 800 )


