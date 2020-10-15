/*
Epicon links
-----------
Script to generate links for epicons
*/

const epicons = {
    // Gen 1
    'gen1':{id: 'gen1', icons:[
    'bmi',
    'drinking',
    'drugs',
    'education_schoolYears',
    'education_schoolYears_alt',
    'exercise_bike',
    'gaming',
    'intelligence',
    'intelligence_alt',
    'intelligence2',
    'mh_anxiety',
    'mh_anxiety2',
    'mh_depression',
    'mh_depression2',
    'mh_ocd2',
    'phone',
    'sleep_duration',
    'sleep_duration2',
    'smoking',
    'social_chatBubble',
    'social_chatBubble_alt',
    'social_loneliness',
    'social_loneliness_alt',
    'wellbeing',
    'wellbeing2',
    'wellbeing2_alt',
    'work_nightShifts',
    ]},
    // Gen 2
    'gen2':{id: 'gen2', icons:[
    'anxiety',
    'bmi',
    'caffeine',
    'chd',
    'depression',
    'diabetes',
    'drinking',
    'drugs',
    'education',
    'eveningness',
    'exercise',
    'gaming',
    'intelligence',
    'loneliness',
    'loneliness_alt',
    'notSocial1',
    'notSocial2',
    'ocd',
    'phone',
    'shifts',
    'shifts_alt',
    'sleep',
    'sleep_duration',
    'sleep_insomnia',
    'smoking',
    'social',
    'wellbeing',
    ]},
    // Gen 3
    'gen3':{id: 'gen3', icons:[
    'bmi',
    'caffeine',
    'chd_alt',
    'diabetes',
    'drinking',
    'drugs',
    'education_schoolYears',
    'education_schoolYears_alt',
    'eveningness',
    'exercise_bike',
    'gaming',
    'intelligence',
    'intelligence_alt',
    'mh_anxiety2',
    'mh_depression2',
    'mh_ocd2',
    'phone',
    'sleep',
    'sleep_duration',
    'sleep_insomnia',
    'smoking',
    'social_chatBubble',
    'social_chatBubble_alt',
    'social_loneliness',
    'social_loneliness_alt',
    'social_notChatting',
    'wellbeing2_alt',
    'work_nightShifts',
    'work_nightShifts_alt',
    ]},
    // Gen 4
    'gen4':{id: 'gen4', icons:[
    'bmi',
    'caffeine',
    'chd_alt',
    'diabetes',
    'drinking',
    'drugs',
    'education_schoolYears',
    'eveningness',
    'exercise_bike',
    'gaming',
    'intelligence_alt',
    'mh_anxiety2',
    'mh_depression2',
    'mh_ocd2',
    'phone',
    'sleep',
    'smoking',
    'social_chatBubble_alt',
    'social_loneliness_alt',
    'wellbeing2_alt',
    'work_nightShifts',
    ]},
}

// Generate previews and links for each icon
function generateEpiconLinks(epiconSet){

    // Reset gallery
    document.getElementById('epicon-gallery').innerHTML = '';

    // Set active in UI
    document.getElementById('btn-epicons-gen1').className = 'nav-link';
    document.getElementById('btn-epicons-gen2').className = 'nav-link';
    document.getElementById('btn-epicons-gen3').className = 'nav-link';
    document.getElementById('btn-epicons-gen4').className = 'nav-link';
    document.getElementById(`btn-epicons-${epiconSet}`).className = 'nav-link active';

    // Get icons from generation of epicons
    const gen = epicons[epiconSet];
    const id = gen.id;
    const icons = gen.icons;

    // Fill gallery
    for(const icon of icons){

        // Make container div
        var div = document.createElement('DIV');
            div.className = `epicon-div-${id} card`;
        document.getElementById('epicon-gallery').appendChild(div);

        // Make icon preview
        var img = document.createElement('IMG');
            img.src=`${id}/${icon}.PNG`;
            img.className = 'epicon mt-4 mx-auto d-block';
        div.appendChild(img);
            
        // Add links for each
        var p = document.createElement('P');
            p.className = 'epicon-link card-body';
            p.innerText = `www.morenostok.io/epicons/${id}/${icon}.PNG`;
        div.appendChild(p);

    }

}

// Initiate
window.onload = function(){
    generateEpiconLinks('gen3');
}