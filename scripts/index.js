function theTeam(){
    empty();
    document.getElementById('topContent').innerHTML =
        'We are currently a one-person army but ' +
        '<span><strong>looking to expand</strong></span> in the near future. Contact for any working inquiries!';
    document.getElementById('mainContent').innerHTML =
        'Evan Miller - Full Stack Developer';
    document.getElementById('mainPicture').src = '../images/evan_represent_working_smile1.jpg';
    document.getElementById('content1').innerHTML =
        'Studies Computer Science in the University of Helsinki.<br><br>' +
        'Programming experience in java, javascript and C.<br><br>' +
        'Strengths include logical thinking and hard work<br><br>' +
        '';
}

function showContact(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'Country: Finland<br>' +
        'eMail: evanmillersolutions@gmail.com<br>' +
        'phone: +358 40 812 6244';
}

function whatnow(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'The company is <b>currently</b> working on a mobile app<br>' +
        'in collaboration with <a href="http://mercury.black" target="_blank">mercury.black</a>.<br><br>' +
        '<span><i>Mobile Marketing Companion</i></span> will be launched soon.<br><br>' +
        '<b>Further into the future</b> the company will be focused on releasing<br>' +
        'original mobile apps.';
}

function about(){
    empty();
    document.getElementById('mainContent').innerHTML =
        '<center>MILLER SOLUTIONS is a Finnish software company founded in 2017 by an ' +
        'aspiring Computer Science student Evan Miller.<br><br>' +
        'Services include mobile, web and general application development for private customers as well as businesses<br><br>' +
        'The goal is to build a big enough team to be able to work on native projects with <br>' +
        'full focus as well as outsource programming consultants elsewhere.</center>';

}

function empty(){
    document.getElementById('mainPicture').src = '../images/black.png';
    document.getElementById('content1').innerHTML = '';
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('topContent').innerHTML = '';
}