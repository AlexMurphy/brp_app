When(/^I check the First name checkbox$/) do
  check('first-name-error-checkbox')
end

When(/^I type thirty one characters into the First name field$/) do
  fill_in('first-name-error', :with => '1234567890123456789012345678901')
end

Then(/^I am on the first First name exit page$/) do
  page.should have_content('Problems with names on your BRP')
  page.should have_content('You typed in your first name as:')
  page.should have_content('1234567890123456789012345678901')
  page.should have_content('Your first name has 31 letters. Your BRP can only show a maximum of 30 letters, so it is shortened to this on your BRP:')
  page.should have_content('123456789012345678901234567890')
  page.should have_content('Is this how it looks on your BRP?')
end

Then(/^I am on the second First name exit page$/) do
  page.should have_content('Problems with names on your BRP')
  page.should have_content('Your name has been shortened on your BRP, as a maximum of 30 characters can be printed on the card.')
  page.should have_content('This is not an error. The information is correct on your card and you will be able to use it to travel.')
  page.should have_content('You do not need to do anything else.')
  find_link('Close').visible?
  delete_cookie('hmbrp.sid')  
end