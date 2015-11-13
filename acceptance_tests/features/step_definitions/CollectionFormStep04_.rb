When(/^I go to Step Four of the collection form$/) do
  visit config['collection_host']
  choose('collection-where-radio-Post office')
  click_button('Continue')
  choose('reason-radio-under-age')
  click_button('Continue')
  fill_in('nominated-fullname', :with => 'Mister Resonable')
  fill_in('nominated-date-day', :with => '17')
  fill_in('nominated-date-month', :with => '08')
  fill_in('nominated-date-year', :with => '1988')
  fill_in('nominated-nationality', :with => 'China')
  fill_in('nominated-id-number', :with => '1234567890')
  click_button('Continue')
end

Then(/^I am on Step Four of the collection form$/) do
  page.should have_content('Step 4 of 6')
  page.should have_content('What are your personal details?')
  page.should have_content('We need these details to process your request.')
  page.should have_content('Full name')
  find_field('fullname')
  page.should have_content('Date of birth')
  page.should have_content('For example, 31  3  1970')
  page.should have_content('Day')
  find_by_id('date-of-birth-day')
  page.should have_content('Month')
  find_by_id('date-of-birth-month')
  page.should have_content('Year')
  find_by_id('date-of-birth-year')
  page.should have_content('Country of nationality ')
  find_by_id('nationality')
  page.should have_content('Passport number (optional)')
  find_by_id('passport')
  find_button('Continue')
  delete_cookie('hmbrp.sid')
end
