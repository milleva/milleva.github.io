var formVisible = false;

function theTeam(){
    empty();
    document.getElementById('firstTeamMember').innerHTML =
        'Evan Miller - Full Stack Developer';
    document.getElementById('mainPicture').style.visibility = 'visible';
    document.getElementById('secondaryPicture').style.visibility = 'visible';
    document.getElementById('content1').innerHTML =
        'Studies Computer Science in the University of Helsinki.<br><br>' +
        'Programming experience in java, javascript and C.<br><br>' +
        'Loves to code, play chess and tennis on his freetime.';
    document.getElementById('secondTeamMember').innerHTML =
        'Axel Wallin - Backend Developer';
    document.getElementById('content2').innerHTML =
        '3rd year Computer Science student at the University of Helsinki.<br><br>' +
        'Excellent coding skills with Java in particular.<br><br>' +
        'Interested in music, chess and pharmacology.';
    document.getElementById('lihava').style.visibility = 'visible';
}

function showContact(){
    empty();
    document.getElementById('contact').innerHTML =
        'Country: Finland<br>' +
        'eMail: evanmillersolutions@gmail.com<br>' +
        'phone: +358 40 812 6244';
    document.getElementById('orText').style.visibility = 'visible';
    document.getElementById('mail').style.visibility = 'visible';
    document.getElementById('formParagraph').style.visibility = 'visible';
}

function whatnow(){
    empty();
    document.getElementById('mainContent').innerHTML =
        'The company is working at full capacity. <br><br>' +
        'We are currently looking to book more projects to start early 2018. ' +
        'Contact <button class="textOnlyButton" id="rightnow" onclick="showContact()"><u>right now</u></button> for any inquiries!<br><br><br><br>';
}

function about(){
    empty();
    document.getElementById('mainContent').innerHTML =
        '<span style="color:orange"><b>Miller Solutions</b></span> is a Finnish software company founded in 2017 by an ' +
        'aspiring Computer Science student Evan Miller.<br><br><br>' +
        '<spans style="color:orange"><b>Services include</b></spans> mobile, web and general application development for private customers as well as businesses. ' +
        'For example homepages, inventories, blogging apps or anything you can come up with!<br><br><br>' +
        '<span style="color:orange"><b>It goes without saying</b></span> that because we are a business run by students, prices are adjusted accordingly. ' +
        'Easily affordable coding services are still hard to come across. This is where you need to look no further!';
        //#c15a00#e0710f
}

function empty(){
    document.getElementById('mainPicture').style.visibility = 'hidden';
    document.getElementById('secondaryPicture').style.visibility = 'hidden';
    document.getElementById('content1').innerHTML = '';
    document.getElementById('content2').innerHTML = '';
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('topContent').innerHTML = '';
    document.getElementById('contact').innerHTML = '';
    document.getElementById('firstTeamMember').innerHTML = '';
    document.getElementById('secondTeamMember').innerHTML = '';
    document.getElementById('orText').style.visibility = 'hidden';
    document.getElementById('mail').style.visibility = 'hidden';
    document.getElementById('formParagraph').style.visibility = 'hidden';
    document.getElementById('lihava').style.visibility = 'hidden';
}
