// donation amount
const getValue = ( id ) =>{
    const number = parseFloat(document.getElementById(id).value);
    if(number > 0) {
        document.getElementById(id).value = ""
        return number;
    }
    else {
        document.getElementById(id).value = ""
        alert("Minimum donation must be a number greater then 0BDT")
    }
} 

// total balance
const getInnerText = ( id ) =>{
    const number = document.getElementById(id).innerText;
    return parseFloat(number);     
} 

// set total balance
const setInnerText = ( id, amount ) =>{
    document.getElementById(id).innerText = amount;
} 

// success massege
const successMassege = () => {
    my_modal_5.showModal()
}

// create history
const createHistory = ( amount, donation_title ) => {
    const date = new Date();
    // console.log(date);
    
    const title = document.getElementById(donation_title).innerText
    const history = document.createElement('div');
    history.classList.add(  "border", "rounded-lg", "bg-neutral-100", "shadow", "mx-auto", "my-4", "p-6",)
    history.innerHTML = `<h1 class="text-2xl font-bold">${title}</h1>
                        <h2 class="my-2 text-xl font-semibold">Donation: <span  class="text-lg font-bold">${amount}BDT</span></h2>
                        <p class="text-sm">${date}</p>`;

    document.getElementById('history container').appendChild(history)
}

// claculate donation 
const donationCalc = ( title, donation, totaldonation ) => {
    const donationAmount = getValue( donation );
    // console.log(typeof donationAmound);
    
    let mainAmoutn = getInnerText( 'total_balance' );
    // console.log(mainAmoutn);

    if(mainAmoutn >= donationAmount) {
        let total_donated_fond = getInnerText(totaldonation);
        total_donated_fond += donationAmount;
        mainAmoutn -= donationAmount;

        setInnerText( totaldonation, total_donated_fond );
        setInnerText( 'total_balance', mainAmoutn )

        createHistory( donationAmount, title )
        successMassege();
    }
    else {
        alert("Donation Amount Can't be More then the Main Amount")

    }
}

// flood donation event
document.getElementById( 'flood_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'flood-title', 'flood_donation_amount', 'flood_total_Donation' )
})

// cyclone donation event
document.getElementById( 'cyclone_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'cyclone-title', 'cyclone_donation_amount', 'cyclone_total_Donation' )
})

// landslide donation event
document.getElementById( 'landslide_donate_btn' )
.addEventListener('click', (e) => {
    // console.log("clicked");
    e.preventDefault()

    donationCalc( 'landslide-title', 'landslide_donation_amount', 'landslide_total_Donation' )
})

// tab button event
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