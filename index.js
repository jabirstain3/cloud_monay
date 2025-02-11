const getValue = ( id ) =>{
    const number = document.getElementById(id).value;
    document.getElementById(id).value = ""
    return parseFloat(number);
} 

const getInnerText = ( id ) =>{
    const number = document.getElementById(id).innerText;
    return parseFloat(number);     
} 

const setInnerText = ( id, amount ) =>{
    document.getElementById(id).innerText = amount;
} 

const successMassege = () => {
    my_modal_5.showModal()
}

const donationCalc = ( donation, totaldonation ) => {
    const donationAmound = getValue( donation );
    // console.log(typeof donationAmound);
    
    let mainAmoutn = getInnerText( 'total_balance' );
    // console.log(mainAmoutn);

    if(mainAmoutn > donationAmound) {
        let total_donated_fond = getInnerText(totaldonation);
        total_donated_fond += donationAmound;
        mainAmoutn -= donationAmound;
        setInnerText( totaldonation, total_donated_fond );
        setInnerText( 'total_balance', mainAmoutn )
        successMassege();
    }
}

// flood donation
document.getElementById( 'flood_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'flood_donation_amount', 'flood_total_Donation' )
})

// cyclone donation
document.getElementById( 'cyclone_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'cyclone_donation_amount', 'cyclone_total_Donation' )
})

// landslide donation
document.getElementById( 'landslide_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'landslide_donation_amount', 'landslide_total_Donation' )
})

// tab button button
document.getElementById( 'donation_btn' )
.addEventListener('click', () => {    
    document.getElementById('history_btn').classList.remove('tab-active', 'text-white', 'font-semibold');
    document.getElementById('donation_btn').classList.add('tab-active', 'text-white', 'font-semibold');

    document.getElementById('donation-tab').classList.remove('hidden');
    document.getElementById('history-tab').classList.add('hidden');
})

document.getElementById( 'history_btn' )
.addEventListener('click', () => {
    document.getElementById('donation_btn').classList.remove('tab-active', 'text-white', 'font-semibold');
    document.getElementById('history_btn').classList.add('tab-active', 'text-white', 'font-semibold');

    document.getElementById('history-tab').classList.remove('hidden');
    document.getElementById('donation-tab').classList.add('hidden');
})