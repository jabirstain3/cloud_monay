
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