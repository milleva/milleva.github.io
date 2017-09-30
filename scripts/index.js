function theTeam(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'Evan Miller - Full Stack Developer';
    document.getElementById('mainPicture').src = '../images/evan_thumbs_up.jpg';
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
        'The company is currently working on a mobile app<br>' +
        'in collaboration with mercury.black.<br><br>' +
        'Mobile Marketing Companion will be launched soon.' +
        '';
}

function empty(){
    document.getElementById('mainPicture').src = '../images/black.png';
    document.getElementById('content1').innerHTML = '';
    document.getElementById('mainContent').innerHTML = '';
}