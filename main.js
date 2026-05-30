import { supabase } from './supabase.js';

const rsvpCount = document.querySelector('.rsvp-count');

document.querySelector('.rsvp-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#first_name').value;
  const email = document.querySelector('#email').value;

  const { data, error } = await supabase
    .from('rsvp_users')
    .insert({ name, email })

    // Update total RSVP display on form submission
    if (!error) {
      let currentCount = parseInt(rsvpCount.innerText);
      currentCount++;
      rsvpCount.innerText = currentCount.toString();

      const rsvpButton  = document.querySelector('.rsvp-button');
      rsvpButton.innerText = 'RSVP Successful ✔️';
    }
})
