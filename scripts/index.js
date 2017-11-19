var formVisible = false;

function theTeam(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'Evan Miller - Full Stack Developer';
    document.getElementById('mainPicture').style.visibility = 'visible';
    document.getElementById('mainPicture').src = '../images/evan_represent_working_smile1.jpg';
    document.getElementById('content1').innerHTML =
        'Studies Computer Science in the University of Helsinki.<br><br>' +
        'Programming experience in java, javascript and C.<br><br>' +
        'Loves to code, play chess and tennis on his freetime.';
    document.getElementById('secondTeamMemberName').innerHTML =
        'Axel Wallin - Backend Developer';
    document.getElementById('content2').innerHTML =
        '3rd year Computer Science student at the University of Helsinki.<br><br>' +
        'Excellent coding skills with Java in particular.<br><br>' +
        'Interested in music, chess and pharmacology.';
}

function showContact(){
    empty();
    document.getElementById('contact').innerHTML =
        'Country: Finland<br>' +
        'eMail: evanmillersolutions@gmail.com<br>' +
        'phone: +358 40 812 6244';
    document.getElementById('orText').style.visibility = 'visible';
    document.getElementById('mail').style.visibility = 'visible';
}

function whatnow(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'The company is working on a project ' +
        'for <a href="http://www.svenskaklubben-helsinki.fi" target="_blank">Helsinki Svenska Klubben</a>.<br><br>' +
        'We are currently looking to take on a <span style="color:cornflowerblue">second</span> project right away ' +
        'as well as booking more projects to start early 2018. Contact <u>right now</u> for any business inquiries!<br><br><br><br>' +
        'Our previous customers include <a href="http://mercury.black" target="_blank">mercury.black</a>.';
}

function about(){
    empty();
    document.getElementById('mainContent').innerHTML =
        '<span style="color:red"><b>Miller Solutions</b></span> is a Finnish software company founded in 2017 by an ' +
        'aspiring Computer Science student Evan Miller.<br><br>' +
        '<spans style="color:cornflowerblue">Services include</spans> mobile, web and general application development for private customers as well as businesses. ' +
        'For example homepages, inventories, blogging apps or anything you can come up with!<br><br>' +
        '<span style="color:hotpink"><b>It goes without saying</b></span> that because we are a business run by students, prices are adjusted accordingly. ' +
        'Easily affordable coding services are still hard to come across. This is where you need to look no further!';

}

function empty(){
    document.getElementById('mainPicture').style.visibility = 'hidden';
    document.getElementById('content1').innerHTML = '';
    document.getElementById('content2').innerHTML = '';
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('topContent').innerHTML = '';
    document.getElementById('contact').innerHTML = '';
    document.getElementById('secondTeamMemberName').innerHTML = '';
    document.getElementById('orText').style.visibility = 'hidden';
    document.getElementById('mail').style.visibility = 'hidden';
}
