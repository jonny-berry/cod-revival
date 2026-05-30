import { supabase } from './supabase.js';

document.querySelector('.rsvp-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#first_name').value;
  const email = document.querySelector('#email').value;

  const { data, error } = await supabase
    .from('rsvp_users')
    .insert({ name, email })

  if (error) {
    console.error(error);
  } else {
    console.log('submitted', data);
  }
})
